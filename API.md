# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsPostgres <a name="RdsPostgres" id="rds-postgres.RdsPostgres"></a>

#### Initializers <a name="Initializers" id="rds-postgres.RdsPostgres.Initializer"></a>

```typescript
import { RdsPostgres } from 'rds-postgres'

new RdsPostgres(scope: Construct, id: string, props: RdsPostgresProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rds-postgres.RdsPostgres.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#rds-postgres.RdsPostgres.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rds-postgres.RdsPostgres.Initializer.parameter.props">props</a></code> | <code><a href="#rds-postgres.RdsPostgresProps">RdsPostgresProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rds-postgres.RdsPostgres.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="rds-postgres.RdsPostgres.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="rds-postgres.RdsPostgres.Initializer.parameter.props"></a>

- *Type:* <a href="#rds-postgres.RdsPostgresProps">RdsPostgresProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rds-postgres.RdsPostgres.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="rds-postgres.RdsPostgres.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rds-postgres.RdsPostgres.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="rds-postgres.RdsPostgres.isConstruct"></a>

```typescript
import { RdsPostgres } from 'rds-postgres'

RdsPostgres.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="rds-postgres.RdsPostgres.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rds-postgres.RdsPostgres.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rds-postgres.RdsPostgres.property.credentialsParameterName">credentialsParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rds-postgres.RdsPostgres.property.rdsInstance">rdsInstance</a></code> | <code>aws-cdk-lib.aws_rds.IDatabaseInstance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rds-postgres.RdsPostgres.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `credentialsParameterName`<sup>Required</sup> <a name="credentialsParameterName" id="rds-postgres.RdsPostgres.property.credentialsParameterName"></a>

```typescript
public readonly credentialsParameterName: string;
```

- *Type:* string

---

##### `rdsInstance`<sup>Required</sup> <a name="rdsInstance" id="rds-postgres.RdsPostgres.property.rdsInstance"></a>

```typescript
public readonly rdsInstance: IDatabaseInstance;
```

- *Type:* aws-cdk-lib.aws_rds.IDatabaseInstance

---


## Structs <a name="Structs" id="Structs"></a>

### RdsPostgresProps <a name="RdsPostgresProps" id="rds-postgres.RdsPostgresProps"></a>

#### Initializer <a name="Initializer" id="rds-postgres.RdsPostgresProps.Initializer"></a>

```typescript
import { RdsPostgresProps } from 'rds-postgres'

const rdsPostgresProps: RdsPostgresProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rds-postgres.RdsPostgresProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | *No description.* |
| <code><a href="#rds-postgres.RdsPostgresProps.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rds-postgres.RdsPostgresProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#rds-postgres.RdsPostgresProps.property.yourIpAddres">yourIpAddres</a></code> | <code>string</code> | *No description.* |

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="rds-postgres.RdsPostgresProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---

##### `tag`<sup>Required</sup> <a name="tag" id="rds-postgres.RdsPostgresProps.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="rds-postgres.RdsPostgresProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `yourIpAddres`<sup>Optional</sup> <a name="yourIpAddres" id="rds-postgres.RdsPostgresProps.property.yourIpAddres"></a>

```typescript
public readonly yourIpAddres: string;
```

- *Type:* string

---



