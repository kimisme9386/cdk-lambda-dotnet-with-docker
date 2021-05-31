import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class LambdaDotnet extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'DotnetLambda', {
      code: lambda.DockerImageCode.fromImageAsset(
        path.join(__dirname, '../DemoFunction/src/DemoFunction'),
      ),
    });
  }
}
