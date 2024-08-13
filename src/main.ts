import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as constructs from 'constructs';

export interface RdsPostgresProps {
  readonly yourIpAddres?: string;
  readonly securityGroup: ec2.ISecurityGroup;
  readonly tag: string;
  readonly vpc: ec2.IVpc;
}

export class RdsPostgres extends constructs.Construct {
  readonly credentialsParameterName: string;
  readonly rdsInstance: rds.IDatabaseInstance;

  constructor(scope: constructs.Construct, id: string, props: RdsPostgresProps) {
    super(scope, id);

    const databaseCredentialsSecret = new secretsmanager.Secret(this, 'RdsPostgresCredentials' + props.tag, {
      secretName: 'RdsPostgresCredentials' + props.tag,
      generateSecretString: {
        secretStringTemplate: JSON.stringify({
          username: 'postgres',
        }),
        excludePunctuation: true,
        includeSpace: false,
        generateStringKey: 'password',
      },
    });

    new cdk.CfnOutput(this, 'Secret Name', { value: databaseCredentialsSecret.secretName });
    new cdk.CfnOutput(this, 'Secret ARN', { value: databaseCredentialsSecret.secretArn });
    new cdk.CfnOutput(this, 'Secret Full ARN', { value: databaseCredentialsSecret.secretFullArn || '' });

    const parameter = new ssm.StringParameter(this, 'RdsPostgresCredentialsArn' + props.tag, {
      parameterName: 'RdsPostgresCredentialsArn' + props.tag,
      stringValue: databaseCredentialsSecret.secretArn,
    });

    this.credentialsParameterName = parameter.parameterName;

    if (props?.yourIpAddres) {
      props.securityGroup.addIngressRule(ec2.Peer.ipv4(props.yourIpAddres), ec2.Port.tcp(5432), 'allow 5432 access from this IP');
    }

    const rdsConfig: rds.DatabaseInstanceProps = {
      engine: rds.DatabaseInstanceEngine.postgres({ version: rds.PostgresEngineVersion.VER_15_4 }),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MICRO),
      vpc: props.vpc,
      // TODO: don't make the db publicly accessible
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      instanceIdentifier: 'rdsInstanceIdentifier2' + props.tag,
      maxAllocatedStorage: 200,
      securityGroups: [props.securityGroup],
      credentials: rds.Credentials.fromSecret(databaseCredentialsSecret),
    };

    this.rdsInstance = new rds.DatabaseInstance(this, 'RdsPostgresInstance' + props.tag, rdsConfig);

    new cdk.CfnOutput(this, 'RDS Endpoint', { value: this.rdsInstance.dbInstanceEndpointAddress });
  }
}
