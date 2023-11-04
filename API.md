# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnaConstruct <a name="DnaConstruct" id="@serverlessdna/constructs.DnaConstruct"></a>

#### Initializers <a name="Initializers" id="@serverlessdna/constructs.DnaConstruct.Initializer"></a>

```typescript
import { DnaConstruct } from '@serverlessdna/constructs'

new DnaConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.DnaConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.DnaConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverlessdna/constructs.DnaConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverlessdna/constructs.DnaConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverlessdna/constructs.DnaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverlessdna/constructs.DnaConstruct.addOutput">addOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverlessdna/constructs.DnaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverlessdna/constructs.DnaConstruct.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

###### `key`<sup>Required</sup> <a name="key" id="@serverlessdna/constructs.DnaConstruct.addOutput.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@serverlessdna/constructs.DnaConstruct.addOutput.parameter.value"></a>

- *Type:* string

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverlessdna/constructs.DnaConstruct.addOutput.parameter.exportName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverlessdna/constructs.DnaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverlessdna/constructs.DnaConstruct.isConstruct"></a>

```typescript
import { DnaConstruct } from '@serverlessdna/constructs'

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

###### `x`<sup>Required</sup> <a name="x" id="@serverlessdna/constructs.DnaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.DnaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverlessdna/constructs.DnaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SocketApi <a name="SocketApi" id="@serverlessdna/constructs.SocketApi"></a>

#### Initializers <a name="Initializers" id="@serverlessdna/constructs.SocketApi.Initializer"></a>

```typescript
import { SocketApi } from '@serverlessdna/constructs'

new SocketApi(scope: Construct, id: string, config?: ISocketApiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketApi.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketApi.Initializer.parameter.config">config</a></code> | <code><a href="#@serverlessdna/constructs.ISocketApiConfig">ISocketApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverlessdna/constructs.SocketApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverlessdna/constructs.SocketApi.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="@serverlessdna/constructs.SocketApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@serverlessdna/constructs.ISocketApiConfig">ISocketApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverlessdna/constructs.SocketApi.addOutput">addOutput</a></code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketApi.addFunctionRoute">addFunctionRoute</a></code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketApi.arnForExecuteApi">arnForExecuteApi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverlessdna/constructs.SocketApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverlessdna/constructs.SocketApi.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

###### `key`<sup>Required</sup> <a name="key" id="@serverlessdna/constructs.SocketApi.addOutput.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@serverlessdna/constructs.SocketApi.addOutput.parameter.value"></a>

- *Type:* string

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverlessdna/constructs.SocketApi.addOutput.parameter.exportName"></a>

- *Type:* string

---

##### `addFunctionRoute` <a name="addFunctionRoute" id="@serverlessdna/constructs.SocketApi.addFunctionRoute"></a>

```typescript
public addFunctionRoute(route: string, integrationFunction: Function, returnResponse?: boolean): void
```

###### `route`<sup>Required</sup> <a name="route" id="@serverlessdna/constructs.SocketApi.addFunctionRoute.parameter.route"></a>

- *Type:* string

---

###### `integrationFunction`<sup>Required</sup> <a name="integrationFunction" id="@serverlessdna/constructs.SocketApi.addFunctionRoute.parameter.integrationFunction"></a>

- *Type:* aws-cdk-lib.aws_lambda.Function

optional, will default to locally named default integration function for routes: $connect, $default and $disconnect.

---

###### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverlessdna/constructs.SocketApi.addFunctionRoute.parameter.returnResponse"></a>

- *Type:* boolean

optional, must be true if a response payload is to be returned by the route.

Defaults to false.

---

##### `arnForExecuteApi` <a name="arnForExecuteApi" id="@serverlessdna/constructs.SocketApi.arnForExecuteApi"></a>

```typescript
public arnForExecuteApi(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverlessdna/constructs.SocketApi.isConstruct"></a>

```typescript
import { SocketApi } from '@serverlessdna/constructs'

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

###### `x`<sup>Required</sup> <a name="x" id="@serverlessdna/constructs.SocketApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverlessdna/constructs.SocketApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### SocketTasks <a name="SocketTasks" id="@serverlessdna/constructs.SocketTasks"></a>

#### Initializers <a name="Initializers" id="@serverlessdna/constructs.SocketTasks.Initializer"></a>

```typescript
import { SocketTasks } from '@serverlessdna/constructs'

new SocketTasks(scope: Construct, id: string, config: ISocketTasksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketTasks.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketTasks.Initializer.parameter.config">config</a></code> | <code><a href="#@serverlessdna/constructs.ISocketTasksConfig">ISocketTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@serverlessdna/constructs.SocketTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@serverlessdna/constructs.SocketTasks.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@serverlessdna/constructs.SocketTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#@serverlessdna/constructs.ISocketTasksConfig">ISocketTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@serverlessdna/constructs.SocketTasks.addOutput">addOutput</a></code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketTasks.addFunctionRoute">addFunctionRoute</a></code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.SocketTasks.arnForExecuteApi">arnForExecuteApi</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@serverlessdna/constructs.SocketTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOutput` <a name="addOutput" id="@serverlessdna/constructs.SocketTasks.addOutput"></a>

```typescript
public addOutput(key: string, value: string, exportName?: string): CfnOutput
```

###### `key`<sup>Required</sup> <a name="key" id="@serverlessdna/constructs.SocketTasks.addOutput.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@serverlessdna/constructs.SocketTasks.addOutput.parameter.value"></a>

- *Type:* string

---

###### `exportName`<sup>Optional</sup> <a name="exportName" id="@serverlessdna/constructs.SocketTasks.addOutput.parameter.exportName"></a>

- *Type:* string

---

##### `addFunctionRoute` <a name="addFunctionRoute" id="@serverlessdna/constructs.SocketTasks.addFunctionRoute"></a>

```typescript
public addFunctionRoute(route: string, integrationFunction: Function, returnResponse?: boolean): void
```

###### `route`<sup>Required</sup> <a name="route" id="@serverlessdna/constructs.SocketTasks.addFunctionRoute.parameter.route"></a>

- *Type:* string

---

###### `integrationFunction`<sup>Required</sup> <a name="integrationFunction" id="@serverlessdna/constructs.SocketTasks.addFunctionRoute.parameter.integrationFunction"></a>

- *Type:* aws-cdk-lib.aws_lambda.Function

optional, will default to locally named default integration function for routes: $connect, $default and $disconnect.

---

###### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverlessdna/constructs.SocketTasks.addFunctionRoute.parameter.returnResponse"></a>

- *Type:* boolean

optional, must be true if a response payload is to be returned by the route.

Defaults to false.

---

##### `arnForExecuteApi` <a name="arnForExecuteApi" id="@serverlessdna/constructs.SocketTasks.arnForExecuteApi"></a>

```typescript
public arnForExecuteApi(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@serverlessdna/constructs.SocketTasks.isConstruct"></a>

```typescript
import { SocketTasks } from '@serverlessdna/constructs'

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

###### `x`<sup>Required</sup> <a name="x" id="@serverlessdna/constructs.SocketTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@serverlessdna/constructs.SocketTasks.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@serverlessdna/constructs.SocketTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="@serverlessdna/constructs.SocketTasks.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus

---




## Protocols <a name="Protocols" id="Protocols"></a>

### ISocketApiConfig <a name="ISocketApiConfig" id="@serverlessdna/constructs.ISocketApiConfig"></a>

- *Implemented By:* <a href="#@serverlessdna/constructs.ISocketApiConfig">ISocketApiConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.ISocketApiConfig.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketApiConfig.property.routes">routes</a></code> | <code><a href="#@serverlessdna/constructs.ISocketFunction">ISocketFunction</a>[]</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketApiConfig.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketApiConfig.property.websocketConfig">websocketConfig</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.WebSocketApiProps</code> | *No description.* |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@serverlessdna/constructs.ISocketApiConfig.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@serverlessdna/constructs.ISocketApiConfig.property.routes"></a>

```typescript
public readonly routes: ISocketFunction[];
```

- *Type:* <a href="#@serverlessdna/constructs.ISocketFunction">ISocketFunction</a>[]

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@serverlessdna/constructs.ISocketApiConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `websocketConfig`<sup>Optional</sup> <a name="websocketConfig" id="@serverlessdna/constructs.ISocketApiConfig.property.websocketConfig"></a>

```typescript
public readonly websocketConfig: WebSocketApiProps;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.WebSocketApiProps

---

### ISocketFunction <a name="ISocketFunction" id="@serverlessdna/constructs.ISocketFunction"></a>

- *Implemented By:* <a href="#@serverlessdna/constructs.ISocketFunction">ISocketFunction</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.ISocketFunction.property.integration">integration</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketFunction.property.route">route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketFunction.property.returnResponse">returnResponse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketFunction.property.type">type</a></code> | <code><a href="#@serverlessdna/constructs.SocketApiIntegrationType">SocketApiIntegrationType</a></code> | *No description.* |

---

##### `integration`<sup>Required</sup> <a name="integration" id="@serverlessdna/constructs.ISocketFunction.property.integration"></a>

```typescript
public readonly integration: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `route`<sup>Required</sup> <a name="route" id="@serverlessdna/constructs.ISocketFunction.property.route"></a>

```typescript
public readonly route: string;
```

- *Type:* string

---

##### `returnResponse`<sup>Optional</sup> <a name="returnResponse" id="@serverlessdna/constructs.ISocketFunction.property.returnResponse"></a>

```typescript
public readonly returnResponse: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Optional</sup> <a name="type" id="@serverlessdna/constructs.ISocketFunction.property.type"></a>

```typescript
public readonly type: SocketApiIntegrationType;
```

- *Type:* <a href="#@serverlessdna/constructs.SocketApiIntegrationType">SocketApiIntegrationType</a>

---

### ISocketTasksConfig <a name="ISocketTasksConfig" id="@serverlessdna/constructs.ISocketTasksConfig"></a>

- *Implemented By:* <a href="#@serverlessdna/constructs.ISocketTasksConfig">ISocketTasksConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.ISocketTasksConfig.property.taskFunctions">taskFunctions</a></code> | <code><a href="#@serverlessdna/constructs.ITaskFunctionConfig">ITaskFunctionConfig</a>[]</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketTasksConfig.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ISocketTasksConfig.property.socketApiConfig">socketApiConfig</a></code> | <code><a href="#@serverlessdna/constructs.ISocketApiConfig">ISocketApiConfig</a></code> | *No description.* |

---

##### `taskFunctions`<sup>Required</sup> <a name="taskFunctions" id="@serverlessdna/constructs.ISocketTasksConfig.property.taskFunctions"></a>

```typescript
public readonly taskFunctions: ITaskFunctionConfig[];
```

- *Type:* <a href="#@serverlessdna/constructs.ITaskFunctionConfig">ITaskFunctionConfig</a>[]

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@serverlessdna/constructs.ISocketTasksConfig.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus

---

##### `socketApiConfig`<sup>Optional</sup> <a name="socketApiConfig" id="@serverlessdna/constructs.ISocketTasksConfig.property.socketApiConfig"></a>

```typescript
public readonly socketApiConfig: ISocketApiConfig;
```

- *Type:* <a href="#@serverlessdna/constructs.ISocketApiConfig">ISocketApiConfig</a>

---

### ITaskFunctionConfig <a name="ITaskFunctionConfig" id="@serverlessdna/constructs.ITaskFunctionConfig"></a>

- *Implemented By:* <a href="#@serverlessdna/constructs.ITaskFunctionConfig">ITaskFunctionConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@serverlessdna/constructs.ITaskFunctionConfig.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |
| <code><a href="#@serverlessdna/constructs.ITaskFunctionConfig.property.type">type</a></code> | <code>string[]</code> | *No description.* |

---

##### `func`<sup>Required</sup> <a name="func" id="@serverlessdna/constructs.ITaskFunctionConfig.property.func"></a>

```typescript
public readonly func: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---

##### `type`<sup>Required</sup> <a name="type" id="@serverlessdna/constructs.ITaskFunctionConfig.property.type"></a>

```typescript
public readonly type: string[];
```

- *Type:* string[]

---

## Enums <a name="Enums" id="Enums"></a>

### SocketApiIntegrationType <a name="SocketApiIntegrationType" id="@serverlessdna/constructs.SocketApiIntegrationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@serverlessdna/constructs.SocketApiIntegrationType.LAMBDA">LAMBDA</a></code> | *No description.* |

---

##### `LAMBDA` <a name="LAMBDA" id="@serverlessdna/constructs.SocketApiIntegrationType.LAMBDA"></a>

---

