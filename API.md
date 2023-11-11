# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnaConstruct <a name="DnaConstruct" id="@serverless-dna/constructs.DnaConstruct"></a>

#### Initializers <a name="Initializers" id="@serverless-dna/constructs.DnaConstruct.Initializer"></a>

```typescript
import { DnaConstruct } from '@serverless-dna/constructs'

new DnaConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - the construct resource belong to. |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | - the logical id of the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverless-dna/constructs.DnaConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the construct resource belong to.

---

##### `id`<sup>Required</sup> <a name="id" id="@serverless-dna/constructs.DnaConstruct.Initializer.parameter.id"></a>

- *Type:* string

the logical id of the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.addOutput">addOutput</a></code> | Adds a local stack exports to the cloudformation stack. |

---

##### `toString` <a name="toString" id="@serverless-dna/constructs.DnaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverless-dna/constructs.DnaConstruct.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

Adds a local stack exports to the cloudformation stack.

###### `key`<sup>Required</sup> <a name="key" id="@serverless-dna/constructs.DnaConstruct.addOutput.parameter.key"></a>

- *Type:* string

the logical id of the CfnOutput resource.

---

###### `value`<sup>Required</sup> <a name="value" id="@serverless-dna/constructs.DnaConstruct.addOutput.parameter.value"></a>

- *Type:* string

value to be exported.

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverless-dna/constructs.DnaConstruct.addOutput.parameter.exportName"></a>

- *Type:* string

name of the Stack Export variable.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverless-dna/constructs.DnaConstruct.isConstruct"></a>

```typescript
import { DnaConstruct } from '@serverless-dna/constructs'

DnaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@serverless-dna/constructs.DnaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.DnaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverless-dna/constructs.DnaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### PrivateVpc <a name="PrivateVpc" id="@serverless-dna/constructs.PrivateVpc"></a>

#### Initializers <a name="Initializers" id="@serverless-dna/constructs.PrivateVpc.Initializer"></a>

```typescript
import { PrivateVpc } from '@serverless-dna/constructs'

new PrivateVpc(scope: Construct, id: string, config?: IPrivateVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.Initializer.parameter.config">config</a></code> | <code><a href="#@serverless-dna/constructs.IPrivateVpcProps">IPrivateVpcProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverless-dna/constructs.PrivateVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverless-dna/constructs.PrivateVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="@serverless-dna/constructs.PrivateVpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@serverless-dna/constructs.IPrivateVpcProps">IPrivateVpcProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.addGatewayEndpoint">addGatewayEndpoint</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.addInterfaceEndpoint">addInterfaceEndpoint</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.createEndpointServices">createEndpointServices</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.createVpc">createVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverless-dna/constructs.PrivateVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addGatewayEndpoint` <a name="addGatewayEndpoint" id="@serverless-dna/constructs.PrivateVpc.addGatewayEndpoint"></a>

```typescript
public addGatewayEndpoint(name: string, service: GatewayVpcEndpointAwsService): void
```

###### `name`<sup>Required</sup> <a name="name" id="@serverless-dna/constructs.PrivateVpc.addGatewayEndpoint.parameter.name"></a>

- *Type:* string

---

###### `service`<sup>Required</sup> <a name="service" id="@serverless-dna/constructs.PrivateVpc.addGatewayEndpoint.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ec2.GatewayVpcEndpointAwsService

---

##### `addInterfaceEndpoint` <a name="addInterfaceEndpoint" id="@serverless-dna/constructs.PrivateVpc.addInterfaceEndpoint"></a>

```typescript
public addInterfaceEndpoint(name: string, service: InterfaceVpcEndpointAwsService): void
```

###### `name`<sup>Required</sup> <a name="name" id="@serverless-dna/constructs.PrivateVpc.addInterfaceEndpoint.parameter.name"></a>

- *Type:* string

---

###### `service`<sup>Required</sup> <a name="service" id="@serverless-dna/constructs.PrivateVpc.addInterfaceEndpoint.parameter.service"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService

---

##### `createEndpointServices` <a name="createEndpointServices" id="@serverless-dna/constructs.PrivateVpc.createEndpointServices"></a>

```typescript
public createEndpointServices(endpointServices: IEndpointService[]): void
```

###### `endpointServices`<sup>Required</sup> <a name="endpointServices" id="@serverless-dna/constructs.PrivateVpc.createEndpointServices.parameter.endpointServices"></a>

- *Type:* <a href="#@serverless-dna/constructs.IEndpointService">IEndpointService</a>[]

---

##### `createVpc` <a name="createVpc" id="@serverless-dna/constructs.PrivateVpc.createVpc"></a>

```typescript
public createVpc(config: IPrivateVpcProps): Vpc
```

###### `config`<sup>Required</sup> <a name="config" id="@serverless-dna/constructs.PrivateVpc.createVpc.parameter.config"></a>

- *Type:* <a href="#@serverless-dna/constructs.IPrivateVpcProps">IPrivateVpcProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverless-dna/constructs.PrivateVpc.isConstruct"></a>

```typescript
import { PrivateVpc } from '@serverless-dna/constructs'

PrivateVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@serverless-dna/constructs.PrivateVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@serverless-dna/constructs.PrivateVpc.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | A new private vpc instance or the one provided in the construct config. |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverless-dna/constructs.PrivateVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@serverless-dna/constructs.PrivateVpc.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

A new private vpc instance or the one provided in the construct config.

---


### SocketApi <a name="SocketApi" id="@serverless-dna/constructs.SocketApi"></a>

#### Initializers <a name="Initializers" id="@serverless-dna/constructs.SocketApi.Initializer"></a>

```typescript
import { SocketApi } from '@serverless-dna/constructs'

new SocketApi(scope: Construct, id: string, config?: ISocketApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApi.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApi.Initializer.parameter.config">config</a></code> | <code><a href="#@serverless-dna/constructs.ISocketApiConfig">ISocketApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverless-dna/constructs.SocketApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverless-dna/constructs.SocketApi.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="@serverless-dna/constructs.SocketApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@serverless-dna/constructs.ISocketApiConfig">ISocketApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverless-dna/constructs.SocketApi.addOutput">addOutput</a></code> | Adds a local stack exports to the cloudformation stack. |
| <code><a href="#@serverless-dna/constructs.SocketApi.addFunctionRoute">addFunctionRoute</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketApi.arnForExecuteApi">arnForExecuteApi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverless-dna/constructs.SocketApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverless-dna/constructs.SocketApi.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

Adds a local stack exports to the cloudformation stack.

###### `key`<sup>Required</sup> <a name="key" id="@serverless-dna/constructs.SocketApi.addOutput.parameter.key"></a>

- *Type:* string

the logical id of the CfnOutput resource.

---

###### `value`<sup>Required</sup> <a name="value" id="@serverless-dna/constructs.SocketApi.addOutput.parameter.value"></a>

- *Type:* string

value to be exported.

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverless-dna/constructs.SocketApi.addOutput.parameter.exportName"></a>

- *Type:* string

name of the Stack Export variable.

---

##### `addFunctionRoute` <a name="addFunctionRoute" id="@serverless-dna/constructs.SocketApi.addFunctionRoute"></a>

```typescript
public addFunctionRoute(route: string, integrationFunction: Function, returnResponse?: boolean): void
```

###### `route`<sup>Required</sup> <a name="route" id="@serverless-dna/constructs.SocketApi.addFunctionRoute.parameter.route"></a>

- *Type:* string

---

###### `integrationFunction`<sup>Required</sup> <a name="integrationFunction" id="@serverless-dna/constructs.SocketApi.addFunctionRoute.parameter.integrationFunction"></a>

- *Type:* aws-cdk-lib.aws_lambda.Function

optional, will default to locally named default integration function for routes: $connect, $default and $disconnect.

---

###### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverless-dna/constructs.SocketApi.addFunctionRoute.parameter.returnResponse"></a>

- *Type:* boolean

optional, must be true if a response payload is to be returned by the route.

Defaults to false.

---

##### `arnForExecuteApi` <a name="arnForExecuteApi" id="@serverless-dna/constructs.SocketApi.arnForExecuteApi"></a>

```typescript
public arnForExecuteApi(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverless-dna/constructs.SocketApi.isConstruct"></a>

```typescript
import { SocketApi } from '@serverless-dna/constructs'

SocketApi.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@serverless-dna/constructs.SocketApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverless-dna/constructs.SocketApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SocketTasks <a name="SocketTasks" id="@serverless-dna/constructs.SocketTasks"></a>

#### Initializers <a name="Initializers" id="@serverless-dna/constructs.SocketTasks.Initializer"></a>

```typescript
import { SocketTasks } from '@serverless-dna/constructs'

new SocketTasks(scope: Construct, id: string, config: ISocketTasksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.Initializer.parameter.config">config</a></code> | <code><a href="#@serverless-dna/constructs.ISocketTasksConfig">ISocketTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverless-dna/constructs.SocketTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverless-dna/constructs.SocketTasks.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@serverless-dna/constructs.SocketTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@serverless-dna/constructs.ISocketTasksConfig">ISocketTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverless-dna/constructs.SocketTasks.addOutput">addOutput</a></code> | Adds a local stack exports to the cloudformation stack. |
| <code><a href="#@serverless-dna/constructs.SocketTasks.addFunctionRoute">addFunctionRoute</a></code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.arnForExecuteApi">arnForExecuteApi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverless-dna/constructs.SocketTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverless-dna/constructs.SocketTasks.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

Adds a local stack exports to the cloudformation stack.

###### `key`<sup>Required</sup> <a name="key" id="@serverless-dna/constructs.SocketTasks.addOutput.parameter.key"></a>

- *Type:* string

the logical id of the CfnOutput resource.

---

###### `value`<sup>Required</sup> <a name="value" id="@serverless-dna/constructs.SocketTasks.addOutput.parameter.value"></a>

- *Type:* string

value to be exported.

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverless-dna/constructs.SocketTasks.addOutput.parameter.exportName"></a>

- *Type:* string

name of the Stack Export variable.

---

##### `addFunctionRoute` <a name="addFunctionRoute" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute"></a>

```typescript
public addFunctionRoute(route: string, integrationFunction: Function, returnResponse?: boolean): void
```

###### `route`<sup>Required</sup> <a name="route" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute.parameter.route"></a>

- *Type:* string

---

###### `integrationFunction`<sup>Required</sup> <a name="integrationFunction" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute.parameter.integrationFunction"></a>

- *Type:* aws-cdk-lib.aws_lambda.Function

optional, will default to locally named default integration function for routes: $connect, $default and $disconnect.

---

###### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverless-dna/constructs.SocketTasks.addFunctionRoute.parameter.returnResponse"></a>

- *Type:* boolean

optional, must be true if a response payload is to be returned by the route.

Defaults to false.

---

##### `arnForExecuteApi` <a name="arnForExecuteApi" id="@serverless-dna/constructs.SocketTasks.arnForExecuteApi"></a>

```typescript
public arnForExecuteApi(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverless-dna/constructs.SocketTasks.isConstruct"></a>

```typescript
import { SocketTasks } from '@serverless-dna/constructs'

SocketTasks.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@serverless-dna/constructs.SocketTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@serverless-dna/constructs.SocketTasks.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.SocketTasks.property.notifySQS">notifySQS</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverless-dna/constructs.SocketTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="@serverless-dna/constructs.SocketTasks.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus

---

##### `notifySQS`<sup>Required</sup> <a name="notifySQS" id="@serverless-dna/constructs.SocketTasks.property.notifySQS"></a>

```typescript
public readonly notifySQS: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IEndpointService <a name="IEndpointService" id="@serverless-dna/constructs.IEndpointService"></a>

- *Implemented By:* <a href="#@serverless-dna/constructs.IEndpointService">IEndpointService</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.IEndpointService.property.name">name</a></code> | <code>string</code> | Name of the service, used in the logical name of the endpoint resource created so must be unique. |
| <code><a href="#@serverless-dna/constructs.IEndpointService.property.service">service</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService \| aws-cdk-lib.aws_ec2.GatewayVpcEndpointAwsService</code> | The endpoint interface to create. |

---

##### `name`<sup>Required</sup> <a name="name" id="@serverless-dna/constructs.IEndpointService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the service, used in the logical name of the endpoint resource created so must be unique.

---

##### `service`<sup>Required</sup> <a name="service" id="@serverless-dna/constructs.IEndpointService.property.service"></a>

```typescript
public readonly service: InterfaceVpcEndpointAwsService | GatewayVpcEndpointAwsService;
```

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAwsService | aws-cdk-lib.aws_ec2.GatewayVpcEndpointAwsService

The endpoint interface to create.

For S3 and DynamoDB use GatewayVpcEndpointAwsService.S3 and GatewayVpcEndpointAwsService.DYNAMODB

---

### IPrivateVpcProps <a name="IPrivateVpcProps" id="@serverless-dna/constructs.IPrivateVpcProps"></a>

- *Implemented By:* <a href="#@serverless-dna/constructs.IPrivateVpcProps">IPrivateVpcProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.IPrivateVpcProps.property.cidrMask">cidrMask</a></code> | <code>number</code> | The cidr mask to use. |
| <code><a href="#@serverless-dna/constructs.IPrivateVpcProps.property.endpointServices">endpointServices</a></code> | <code><a href="#@serverless-dna/constructs.IEndpointService">IEndpointService</a>[]</code> | The endpoint services to enable, an array of endpoint services. |
| <code><a href="#@serverless-dna/constructs.IPrivateVpcProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | The maximum AZs to use. |
| <code><a href="#@serverless-dna/constructs.IPrivateVpcProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | Use an existing VPC. |

---

##### `cidrMask`<sup>Optional</sup> <a name="cidrMask" id="@serverless-dna/constructs.IPrivateVpcProps.property.cidrMask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* number
- *Default:* 24

The cidr mask to use.

Can onluy provide this when not providing an already constructed vpc

---

##### `endpointServices`<sup>Optional</sup> <a name="endpointServices" id="@serverless-dna/constructs.IPrivateVpcProps.property.endpointServices"></a>

```typescript
public readonly endpointServices: IEndpointService[];
```

- *Type:* <a href="#@serverless-dna/constructs.IEndpointService">IEndpointService</a>[]
- *Default:* null

The endpoint services to enable, an array of endpoint services.

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="@serverless-dna/constructs.IPrivateVpcProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number
- *Default:* 3

The maximum AZs to use.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@serverless-dna/constructs.IPrivateVpcProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc
- *Default:* null

Use an existing VPC.

---

### ISocketApiConfig <a name="ISocketApiConfig" id="@serverless-dna/constructs.ISocketApiConfig"></a>

- *Implemented By:* <a href="#@serverless-dna/constructs.ISocketApiConfig">ISocketApiConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.ISocketApiConfig.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketApiConfig.property.routes">routes</a></code> | <code><a href="#@serverless-dna/constructs.ISocketFunction">ISocketFunction</a>[]</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketApiConfig.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketApiConfig.property.websocketConfig">websocketConfig</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.WebSocketApiProps</code> | *No description.* |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@serverless-dna/constructs.ISocketApiConfig.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@serverless-dna/constructs.ISocketApiConfig.property.routes"></a>

```typescript
public readonly routes: ISocketFunction[];
```

- *Type:* <a href="#@serverless-dna/constructs.ISocketFunction">ISocketFunction</a>[]

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@serverless-dna/constructs.ISocketApiConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `websocketConfig`<sup>Optional</sup> <a name="websocketConfig" id="@serverless-dna/constructs.ISocketApiConfig.property.websocketConfig"></a>

```typescript
public readonly websocketConfig: WebSocketApiProps;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.WebSocketApiProps

---

### ISocketFunction <a name="ISocketFunction" id="@serverless-dna/constructs.ISocketFunction"></a>

- *Implemented By:* <a href="#@serverless-dna/constructs.ISocketFunction">ISocketFunction</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.ISocketFunction.property.integration">integration</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketFunction.property.route">route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketFunction.property.returnResponse">returnResponse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketFunction.property.type">type</a></code> | <code><a href="#@serverless-dna/constructs.SocketApiIntegrationType">SocketApiIntegrationType</a></code> | *No description.* |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@serverless-dna/constructs.ISocketFunction.property.integration"></a>

```typescript
public readonly integration: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `route`<sup>Required</sup> <a name="route" id="@serverless-dna/constructs.ISocketFunction.property.route"></a>

```typescript
public readonly route: string;
```

- *Type:* string

---

##### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverless-dna/constructs.ISocketFunction.property.returnResponse"></a>

```typescript
public readonly returnResponse: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="@serverless-dna/constructs.ISocketFunction.property.type"></a>

```typescript
public readonly type: SocketApiIntegrationType;
```

- *Type:* <a href="#@serverless-dna/constructs.SocketApiIntegrationType">SocketApiIntegrationType</a>

---

### ISocketTasksConfig <a name="ISocketTasksConfig" id="@serverless-dna/constructs.ISocketTasksConfig"></a>

- *Implemented By:* <a href="#@serverless-dna/constructs.ISocketTasksConfig">ISocketTasksConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.ISocketTasksConfig.property.taskFunctions">taskFunctions</a></code> | <code><a href="#@serverless-dna/constructs.ITaskFunctionConfig">ITaskFunctionConfig</a>[]</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketTasksConfig.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketTasksConfig.property.notifySQS">notifySQS</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ISocketTasksConfig.property.socketApiConfig">socketApiConfig</a></code> | <code><a href="#@serverless-dna/constructs.ISocketApiConfig">ISocketApiConfig</a></code> | *No description.* |

---

##### `taskFunctions`<sup>Required</sup> <a name="taskFunctions" id="@serverless-dna/constructs.ISocketTasksConfig.property.taskFunctions"></a>

```typescript
public readonly taskFunctions: ITaskFunctionConfig[];
```

- *Type:* <a href="#@serverless-dna/constructs.ITaskFunctionConfig">ITaskFunctionConfig</a>[]

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@serverless-dna/constructs.ISocketTasksConfig.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus

---

##### `notifySQS`<sup>Optional</sup> <a name="notifySQS" id="@serverless-dna/constructs.ISocketTasksConfig.property.notifySQS"></a>

```typescript
public readonly notifySQS: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---

##### `socketApiConfig`<sup>Optional</sup> <a name="socketApiConfig" id="@serverless-dna/constructs.ISocketTasksConfig.property.socketApiConfig"></a>

```typescript
public readonly socketApiConfig: ISocketApiConfig;
```

- *Type:* <a href="#@serverless-dna/constructs.ISocketApiConfig">ISocketApiConfig</a>

---

### ITaskFunctionConfig <a name="ITaskFunctionConfig" id="@serverless-dna/constructs.ITaskFunctionConfig"></a>

- *Implemented By:* <a href="#@serverless-dna/constructs.ITaskFunctionConfig">ITaskFunctionConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverless-dna/constructs.ITaskFunctionConfig.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@serverless-dna/constructs.ITaskFunctionConfig.property.type">type</a></code> | <code>string[]</code> | *No description.* |

---

##### `func`<sup>Required</sup> <a name="func" id="@serverless-dna/constructs.ITaskFunctionConfig.property.func"></a>

```typescript
public readonly func: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `type`<sup>Required</sup> <a name="type" id="@serverless-dna/constructs.ITaskFunctionConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---

## Enums <a name="Enums" id="Enums"></a>

### SocketApiIntegrationType <a name="SocketApiIntegrationType" id="@serverless-dna/constructs.SocketApiIntegrationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverless-dna/constructs.SocketApiIntegrationType.LAMBDA">LAMBDA</a></code> | *No description.* |

---

##### `LAMBDA` <a name="LAMBDA" id="@serverless-dna/constructs.SocketApiIntegrationType.LAMBDA"></a>

---

