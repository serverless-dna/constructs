import { Vpc, SubnetType, InterfaceVpcEndpointAwsService, GatewayVpcEndpointAwsService } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export interface IEndpointService {
  /**
   * Name of the service, used in the logical name of the endpoint resource created so must be unique.
   */
  readonly name: string;
  /**
   * The endpoint interface to create.  For S3 and DynamoDB use GatewayVpcEndpointAwsService.S3 and GatewayVpcEndpointAwsService.DYNAMODB
   */
  readonly service: InterfaceVpcEndpointAwsService | GatewayVpcEndpointAwsService;
}


export interface IPrivateVpcProps {
  /**
   * Use an existing VPC.
   *
   * @default - null
   */
  readonly vpc?: Vpc;
  /**
   * The maximum AZs to use.
   *
   * @default - 3
   */
  readonly maxAzs?: number;
  /**
   * The cidr mask to use.  Can onluy provide this when not providing an already constructed vpc
   *
   * @default - 24
   */
  readonly cidrMask?: number;
  /**
   * The endpoint services to enable, an array of endpoint services.
   *
   * @default - null
   */
  readonly endpointServices?: IEndpointService[];
}

/**
 * This construct creates a completely private VPC in your account.  It creates only a private subnet with no Internet Gateway or NAT instance so there is no access out to the internet.
 * When creating the VPC you can pass in an array of `IEndpointService` objects to create the necessary virtual private endpoints.
 *
 * ## Getting Started
 *
 * The following stack will create a Private VPC with VPC Endpoints for S3, Secrets Manager and Systems Manager.  For S3 and DynamoDB VPC Gateway endpoints should be used.  The construct deals with the different creation mechanisms so you just need to list out the endpoints you need to use.
 * The endpoints will have private DNS configured so you do not need to change your code that is accessing the endpoint services - placing an AWS Lambda into a Private VPC will be the same code as a more public or no VPC.
 *
 * ```typescript
 * import * as cdk from 'aws-cdk-lib';
 * import { InterfaceVpcEndpointAwsService, GatewayVpcEndpointAwsService } from 'aws-cdk-lib/aws-ec2';
 * import { Construct } from 'constructs';
 * import { PrivateVpc } from '@serverless-dna/constructs';
 *
 * export class VpcStack extends cdk.Stack {
 *   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
 *     super(scope, id, props);
 *
 *     new PrivateVpc(this, 'vpc-priv', {
 *       maxAzs: 3,
 *       endpointServices: [
 *         { name: 's3', service: GatewayVpcEndpointAwsService.S3 },
 *         { name: 'sm', service: InterfaceVpcEndpointAwsService.SECRETS_MANAGER },
 *         { name: 'ssm', service: InterfaceVpcEndpointAwsService.SSM },
 *       ],
 *     });
 *   }
 * }
 * ```
 */
export class PrivateVpc extends Construct {
  /**
   * A new private vpc instance or the one provided in the construct config
   */
  public readonly vpc: Vpc;

  constructor(scope: Construct, id: string, config?: IPrivateVpcProps) {
    super(scope, id);

    if (config?.maxAzs && config?.vpc) {
      // incompatible properties - unable to apply maxAzs when vpc is already constructed.
      throw new Error('Error: Unable to set maxAzs when providing an already constructed vpc property.');
    }

    this.vpc = this.createVpc(config ?? {});
    this.createEndpointServices(config?.endpointServices ?? []);
  }

  createVpc(config: IPrivateVpcProps): Vpc {
    return config?.vpc ?? new Vpc(this, 'Vpc', {
      maxAzs: config?.maxAzs ?? 3,
      subnetConfiguration: [
        {
          cidrMask: config?.cidrMask ?? 24,
          name: 'private',
          subnetType: SubnetType.PRIVATE_ISOLATED,
        },
      ],
    });
  }

  /**
   * Check if Service is a gatewayENdpoint service.
   * @param service
   * @returns boolean
   */
  isGatewayService(service: InterfaceVpcEndpointAwsService | GatewayVpcEndpointAwsService): boolean {
    return service.name.endsWith('s3')
      || service.name.endsWith('dynamodb');
  }

  createEndpointServices(endpointServices: IEndpointService[]): void {
    for (const service of endpointServices) {
      if (this.isGatewayService(service.service)) {
        this.addGatewayEndpoint(service.name, service.service as GatewayVpcEndpointAwsService);
      } else {
        this.addInterfaceEndpoint(service.name, service.service as InterfaceVpcEndpointAwsService);
      }
    }
  }

  addInterfaceEndpoint(name: string, service: InterfaceVpcEndpointAwsService): void {
    this.vpc.addInterfaceEndpoint(`ep-${name}`, {
      service: service as InterfaceVpcEndpointAwsService,
      privateDnsEnabled: true,
      subnets: { subnetType: SubnetType.PRIVATE_ISOLATED },
    });
  }

  addGatewayEndpoint(name: string, service: GatewayVpcEndpointAwsService): void {
    this.vpc.addGatewayEndpoint(`gw-${name}`, {
      service: service as GatewayVpcEndpointAwsService,
      subnets: [
        { subnetType: SubnetType.PRIVATE_ISOLATED },
      ],
    });
  }
}