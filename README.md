# Serverless DNA Constructs

A library containing a set of re-usable AWS CDK constructs.

## Installation

```bash
npm install @serverless-dna/constructs
```

## The Constructs

### SocketApi

This construct creates an AWS WebSocket API with routes that are handled by AWS Lambda functions.  A WebSocket can only exist when there are one or more valid integrations defined.  If you do not define any integrations the WebSocket API will not be deployed.

#### Getting Started

The SocketAPI accepts an array of route definitions of type **ISocketFunction**.

```typescript
export interface ISocketFunction {
  readonly route: string;
  readonly type?: SocketApiIntegrationType;
  readonly integration: Function;
  readonly returnResponse?: boolean;
}
```

To create a WebSocket API you will need to provide a Lambda handler construct to execute your WebSocket API action.  The following example shows how to setup a WebSocket API with a **test** action route which is handled by the **test-func** lambda handler.

```typescript
import { SocketApi } from '@serverless-dna/constructs';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { IntegrationHandlers } from './integrations';

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handler = new NodejsFunction(this, `test-func`, {
      entry: `${__dirname}/integrations.ts`,
      handler: IntegrationHandlers.noOp,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(3),
    });

    new SocketApi(this, 'socket-api', {
      routes: [{ route: 'test', integration: handler, returnResponse: true }],
    });
  }
}
```

#### SocketTasks

This construct inherits from the SocketAPI and creates a complete Asycnrhonouse Task Execution framework using WebSockets and AWS Lambda for running long-running tasks.

#### Getting Started

```typescript
import { SocketTasks } from '@serverless-dna/constructs';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { IntegrationHandlers } from './integrations';

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handlerOne = new NodejsFunction(this, `handler-one`, {
      entry: `${__dirname}/integrations.ts`,
      handler: IntegrationHandlers.taskHandler,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(3),
    });

    const handlerTwo = new NodejsFunction(this, `handler-two`, {
      entry: `${__dirname}/integrations.ts`,
      handler: IntegrationHandlers.taskFail,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(3),
    });

    new SocketTasks(this, `tasks`, {
      taskFunctions: [
        {
          type: ['task-type'],
          func: handlerOne,
        },
        {
          type: ['task-type-2'],
          func: handlerTwo,
        },
      ],
    });
  }
}
```

## Contributing

This project uses Projen to construct the project.  Altering project dependencies or configurations is all done in the .projenrc.ts file.  Please refer to the [Projen Documentation](https://projen.io/) for details on Projen.


