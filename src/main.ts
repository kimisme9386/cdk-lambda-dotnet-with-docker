import { App } from '@aws-cdk/core';
import { LambdaDotnet } from './lambda-dotnet';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new LambdaDotnet(app, 'LambdaDotnetDemo', { env: devEnv });

app.synth();
