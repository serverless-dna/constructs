import { awscdk, javascript } from 'projen';

const packageManager = javascript.NodePackageManager.NPM;
const cdkVersion = '2.104.0';

const constructLib = new awscdk.AwsCdkConstructLibrary({
  author: 'walmsles',
  authorAddress: '2704782+walmsles@users.noreply.github.com',
  cdkVersion,
  constructsVersion: '10.3.0',
  description: 'A collection of useful CDK constructs of known, repeatable patterns that are easily consumable.',
  defaultReleaseBranch: 'main',
  gitignore: ['.DS_Store'],
  jsiiVersion: '~5.2.0',
  majorVersion: 0,
  name: '@serverless-dna/constructs',
  packageManager,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/serverless-dna/constructs',
  // Dependencies past this line
  bundledDeps: [
    '@aws-sdk/client-eventbridge',
    '@aws-sdk/client-apigatewaymanagementapi',
  ],
  devDeps: [
    '@aws-cdk/aws-apigatewayv2-alpha@2.100.0-alpha.0',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha@2.100.0-alpha.0',
  ],
  peerDeps: [
    '@aws-cdk/aws-apigatewayv2-alpha@^2.100.0-alpha.0',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha@^2.100.0-alpha.0',
  ],
});

constructLib.synth();