const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.105.0',
  cdkVersionPinning: true,
  defaultReleaseBranch: 'main',
  name: 'cdk-lambda-dotnet-with-docker',
  repositoryUrl: 'git@github.com:kimisme9386/cdk-lambda-dotnet-with-docker.git',
  cdkDependencies: ['@aws-cdk/core', '@aws-cdk/aws-lambda'],
  releaseWorkflow: false,
});

const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'images',
  'yarn-error.log',
  'dependabot.yml',
  'DemoFunction/src/DemoFunction/obj',
  'DemoFunction/src/DemoFunction/bin',
];

project.gitignore.exclude(...common_exclude);

project.synth();
