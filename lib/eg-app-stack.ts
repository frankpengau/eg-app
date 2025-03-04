import { core } from '@frankpengau/eg-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class EgAppStack extends core.Stack {
  constructor(scope: Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'EgAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
