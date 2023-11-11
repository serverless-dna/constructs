
import { WebSocketApi, WebSocketStage, WebSocketApiProps } from '@aws-cdk/aws-apigatewayv2-alpha';
import { WebSocketLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { Stack, ArnFormat, RemovalPolicy } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { DnaConstruct } from '../core/dna-construct';

const defaultStage: string = 'dev';

export enum SocketApiIntegrationType {
  LAMBDA = 'LAMBDA',
}

export interface ISocketFunction {
  readonly route: string;
  readonly type?: SocketApiIntegrationType;
  readonly integration: Function;
  readonly returnResponse?: boolean;
}

export interface ISocketApiConfig {
  readonly stage?: string;
  readonly removalPolicy?: RemovalPolicy;
  readonly routes?: ISocketFunction[];
  readonly websocketConfig?: WebSocketApiProps;
}

/**
 * This construct creates an AWS WebSocket API with routes that are handled by AWS Lambda functions.  A WebSocket can only exist when there are one or more valid integrations defined.  If you do not define any integrations the WebSocket API will not be deployed.
 *
 * ## Getting Started
 *
 * The SocketAPI accepts an array of route definitions of type **ISocketFunction**.
 *
 * ```typescript
 *  export interface ISocketFunction {
 *    readonly route: string;
 *    readonly type?: SocketApiIntegrationType;
 *    readonly integration: Function;
 *    readonly returnResponse?: boolean;
 *  }
 * ```
 *
 * To create a WebSocket API you will need to provide a Lambda handler construct to execute your WebSocket API action.  The following example shows how to setup a WebSocket API with a **test** action route which is handled by the **test-func** lambda handler.
 *
 * ```typescript
 *  import { SocketApi } from '@serverless-dna/constructs';
 *  import { Duration, Stack, StackProps } from 'aws-cdk-lib';
 *  import { Runtime } from 'aws-cdk-lib/aws-lambda';
 *  import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
 *  import { Construct } from 'constructs';
 *  import { IntegrationHandlers } from './integrations';
 *
 *  export class ApplicationStack extends Stack {
 *    constructor(scope: Construct, id: string, props?: StackProps) {
 *    super(scope, id, props);
 *
 *    const handler = new NodejsFunction(this, `test-func`, {
 *      entry: `${__dirname}/integrations.ts`,
 *      handler: IntegrationHandlers.noOp,
 *      runtime: Runtime.NODEJS_18_X,
 *      timeout: Duration.seconds(3),
 *    });
 *
 *    new SocketApi(this, 'socket-api', {
 *      routes: [{ route: 'test', integration: handler, returnResponse: true }],
 *      });
 *    }
 *  }
 * ```
 */
export class SocketApi extends DnaConstruct {
  protected stage: string;
  protected namePrefix: string;
  protected name: string;
  protected socket: WebSocketApi;
  protected socketStage: WebSocketStage;

  constructor(scope: Construct, id: string, config?: ISocketApiConfig) {
    super(scope, id);

    this.stage = config?.stage ?? defaultStage;
    this.namePrefix = `${this.stage}-${id}`;
    this.name = `${this.namePrefix}-socket`;

    this.socket = this.createWebSocketApi(config ?? {});
    this.socketStage = this.createWebSocketStage(this.socket);

    this.addRoutes(config?.routes ?? []);
  }

  public arnForExecuteApi(): string {
    return Stack.of(this).formatArn({
      service: 'execute-api',
      resource: this.socket.apiId,
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      resourceName: `${this.socketStage.stageName}/*`,
    });
  }

  protected createWebSocketApi(config: ISocketApiConfig): WebSocketApi {
    return new WebSocketApi(this, this.name, config?.websocketConfig);
  }

  protected createWebSocketStage(api: WebSocketApi): WebSocketStage {
    const stage = new WebSocketStage(this, `${this.namePrefix}`, {
      webSocketApi: api,
      stageName: this.stage,
      autoDeploy: true,
    });

    this.addOutput('StageUrl', stage.url, `${this.namePrefix}-StageUrl`);
    this.addOutput('CallbackUrl', stage.callbackUrl, `${this.namePrefix}-CallbackUrl`);

    return stage;
  }

  /**
   *
   * @param routes Array of function routes for the Web Socket API
   */
  protected addRoutes(routes: ISocketFunction[]) {
    routes?.forEach(route => this.addFunctionRoute(route.route, route.integration, route.returnResponse));
  }

  /**
   *
   * @param route
   * @param integrationFunction - optional, will default to locally named default integration function for routes: $connect, $default and $disconnect
   * @param returnResponse - optional, must be true if a response payload is to be returned by the route.  Defaults to false.
   */
  public addFunctionRoute(route: string, integrationFunction: Function, returnResponse?: boolean) {
    this.socket.addRoute(route, {
      integration: new WebSocketLambdaIntegration(`integration-${route}`, integrationFunction),
      returnResponse: returnResponse ?? false,
    });
  }
}