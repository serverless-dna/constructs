import { IEventBus, EventBus, Rule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction as LambdaFunctionTarget } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { Runtime, IFunction, EventSourceMapping } from 'aws-cdk-lib/aws-lambda';
import { SqsDestination } from 'aws-cdk-lib/aws-lambda-destinations';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { IQueue, Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { SocketApi, ISocketApiConfig } from '../socketapi';

export interface ITaskFunctionConfig {
  readonly func: IFunction;
  readonly type: string[];
}

export interface ISocketTasksConfig {
  readonly socketApiConfig?: ISocketApiConfig;
  readonly eventBus?: IEventBus;
  readonly notifySQS?: IQueue;
  readonly taskFunctions: ITaskFunctionConfig[];
}

/**
 * This construct inherits from the SocketAPI and creates a complete Asychronous Task Execution framework using WebSockets and AWS Lambda for running long-running tasks.  An ideal use case when your tasks take too long to trigger via an API Gateway directly!
 *
 * ## Getting Started
 *
 * ```typescript
 * import { SocketTasks } from '@serverless-dna/constructs';
 * import { Duration, Stack, StackProps } from 'aws-cdk-lib';
 * import { Runtime } from 'aws-cdk-lib/aws-lambda';
 * import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
 * import { Construct } from 'constructs';
 * import { IntegrationHandlers } from './integrations';
 *
 * export class ApplicationStack extends Stack {
 *   constructor(scope: Construct, id: string, props?: StackProps) {
 *     super(scope, id, props);
 *
 *     const handlerOne = new NodejsFunction(this, `handler-one`, {
 *       entry: `${__dirname}/integrations.ts`,
 *       handler: IntegrationHandlers.taskHandler,
 *       runtime: Runtime.NODEJS_18_X,
 *       timeout: Duration.seconds(3),
 *     });
 *
 *     const handlerTwo = new NodejsFunction(this, `handler-two`, {
 *       entry: `${__dirname}/integrations.ts`,
 *       handler: IntegrationHandlers.taskFail,
 *       runtime: Runtime.NODEJS_18_X,
 *       timeout: Duration.seconds(3),
 *     });
 *
 *     new SocketTasks(this, `tasks`, {
 *       taskFunctions: [
 *         {
 *           type: ['task-type'],
 *           func: handlerOne,
 *         },
 *         {
 *           type: ['task-type-2'],
 *           func: handlerTwo,
 *         },
 *       ],
 *     });
 *   }
 * }
 * ```
 */
export class SocketTasks extends SocketApi {
  /**
   * reference to the `IEventBus` used by the construct to trigger the defined tasks.
   */
  readonly eventBus: IEventBus;
  /**
   * reference to the SQS Queue used by the construct for notification purposes.
   */
  readonly notifySQS: IQueue;

  constructor(scope: Construct, id: string, config: ISocketTasksConfig) {
    super(scope, id, config?.socketApiConfig);

    this.eventBus = this.createEventBus(config?.eventBus);
    this.notifySQS = this.createNotifySQS(config?.notifySQS);
    this.createSubmitHandler(this.eventBus);
    this.configureTasks(config);
  }

  /**
   * Configures the Task destinations.  Creates the Lambda Destination config and creates the EventBus rule pattern to ensure the Lambda function is triggered.
   * @param config - Configuration holds the `taskFunctions` which is an array of tasks to be processed and configured for the SocketTasks instance.
   */
  protected configureTasks(config: ISocketTasksConfig): void {
    const notifyQueue = this.notifySQS;
    this.createNotifyHandler(notifyQueue);

    config?.taskFunctions.forEach(
      (task) => {
        task.func.configureAsyncInvoke({
          onSuccess: new SqsDestination(notifyQueue),
          onFailure: new SqsDestination(notifyQueue),
        });
        const rule = new Rule(this, `${this.namePrefix}-${task.type}-rule`, {
          eventBus: this.eventBus,
          eventPattern: {
            detailType: task.type,
          },
        });

        rule.addTarget(new LambdaFunctionTarget(task.func));
      },
    );
  }

  /**
   * @param theQueue Creates the Notification SQS Queue used by the construct.
   * @returns theQueue which is either created y this function or was provided in the config by the caller.
   */
  protected createNotifySQS(theQueue?: IQueue): IQueue {
    return theQueue ?? new Queue(this, 'notify-queue', {});
  }

  protected createEventBus(theBus?: IEventBus): IEventBus {
    return theBus ?? new EventBus(this, 'task-bus', {});
  }

  protected createSubmitHandler(theBus: IEventBus): void {
    // Function handler construct must be relative to the JS transpiled structure and code
    const submitHandler = new NodejsFunction(this, 'submit', {
      entry: `${__dirname}/functions/task-submit.js`,
      handler: 'taskSubmitHandler',
      runtime: Runtime.NODEJS_18_X,
      environment: {
        TASK_BUS: theBus.eventBusName,
      },
    });

    theBus.grantPutEventsTo(submitHandler);
    this.addFunctionRoute('task-submit', submitHandler, false);
  }

  protected createNotifyHandler(theQueue: IQueue): void {
    // SocketApi WebSocket Notify Permission
    const socketApiPolicy = new PolicyStatement({
      actions: ['execute-api:ManageConnections'],
      resources: [this.arnForExecuteApi()],
      effect: Effect.ALLOW,
    });

    // Function handler construct must be relative to the JS transpiled structure and code
    const notifyHandler = new NodejsFunction(this, 'notify', {
      entry: `${__dirname}/functions/task-notify.js`,
      handler: 'taskNotifyHandler',
      runtime: Runtime.NODEJS_18_X,
      initialPolicy: [socketApiPolicy],
      environment: {
        WEBSOCKET_API: this.socketStage.callbackUrl,
      },
    });


    // Create SQS Event Source mapping for Notify Handler
    new EventSourceMapping(this, 'notify-source', {
      target: notifyHandler,
      eventSourceArn: theQueue.queueArn,
      reportBatchItemFailures: true,
    });

    theQueue.grantConsumeMessages(notifyHandler);
  }
}