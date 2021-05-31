import { SynthUtils } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { LambdaDotnet } from '../src/lambda-dotnet';

test('Snapshot', () => {
  const env = {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  };

  const app = new App();
  const stack = new LambdaDotnet(app, 'test', { env });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
