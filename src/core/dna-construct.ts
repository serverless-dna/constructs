import { CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export class DnaConstruct extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  public addOutput(key: string, value: string, exportName?: string) {
    return new CfnOutput(this, key, {
      value: value,
      exportName,
    });
  }
}