import { aws_lambda, core } from '@frankpengau/eg-lib';
import { Construct } from 'constructs';

export class EgAppStack extends core.Stack {
  constructor(scope: Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    const myLambdaFn = new aws_lambda.Function(this, 'MyLambdaFn', {
      runtime: aws_lambda.Runtime.NODEJS_24_X,
      handler: 'index.handler',
      code: aws_lambda.Code.fromAsset('lambda')
    });
  }
}
