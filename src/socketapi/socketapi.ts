
import { Stack, ArnFormat, RemovalPolicy } from 'aws-cdk-lib';
import { WebSocketApi, WebSocketStage, WebSocketApiProps } from 'aws-cdk-lib/aws-apigatewayv2';
import { WebSocketLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';
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
 * **Important Note** If you provide no routes to this construct, the construct will not deploy an API gateway.  An endpoint is required for the Websocket API to deploy.
 *
 * ```typescript
 *  import { SocketApi }
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
  /**
   * Stage name for the API gateway
   */
  protected stage: string;
  /**
   * Internal prefix used to name resources according to provided stage and id
   */
  protected namePrefix: string;
  /**
   * Name of the WebSocket API
   */
  protected name: string;
  /**
   * The Web Socket API Construct for reference
   */
  protected socket: WebSocketApi;
  /**
   * WebSocketStage Construct for reference
   */
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

  /**
   * returns the Fully Qualified ARN for the web socket API for use in policy statements.
   * @returns string - the ARN
   */
  public arnForExecuteApi(): string {
    return Stack.of(this).formatArn({
      service: 'execute-api',
      resource: this.socket.apiId,
      arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      resourceName: `${this.socketStage.stageName}/*`,
    });
  }

  /**
   * Create the Web Socket API
   *
   * @param config the `ISocketApiConfig` configuration options
   * @returns WebSocketAPi
   */
  protected createWebSocketApi(config: ISocketApiConfig): WebSocketApi {
    return new WebSocketApi(this, this.name, config?.websocketConfig);
  }

  /**
   * Creates the WebSocketStage
   *
   * @param api the API to create the Stage for
   * @returns
   */
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
   * Adds an array of routes to the WebSocket
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