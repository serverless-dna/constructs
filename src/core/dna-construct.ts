import { CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export class DnaConstruct extends Construct {
  /**
   * @param scope - the construct resource belong to
   * @param id - the logical id of the construct
   */
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  /**
   * Adds a local stack exports to the cloudformation stack
   *
   * @param key - the logical id of the CfnOutput resource
   * @param value - value to be exported
   * @param exportName - name of the Stack Export variable
   * @returns - create CfnOutput
   */
  public addOutput(key: string, value: string, exportName?: string): CfnOutput {
    return new CfnOutput(this, key, {
      value: value,
      exportName,
    });
  }
}