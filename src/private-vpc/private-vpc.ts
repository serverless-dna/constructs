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

  createEndpointServices(endpointServices: IEndpointService[]): void {
    // Enable VPC endpoints
    for (const service of endpointServices) {

      if (service.service instanceof InterfaceVpcEndpointAwsService) {
        this.addInterfaceEndpoint(service.name, service.service as InterfaceVpcEndpointAwsService);
      } else if (service.service instanceof GatewayVpcEndpointAwsService) {
        this.addGatewayEndpoint(service.name, service.service as GatewayVpcEndpointAwsService);
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