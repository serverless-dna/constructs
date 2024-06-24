import { awscdk, javascript } from 'projen';

const packageManager = javascript.NodePackageManager.NPM;
const cdkVersion = '2.147.0';

const constructLib = new awscdk.AwsCdkConstructLibrary({
  author: 'walmsles',
  authorAddress: '2704782+walmsles@users.noreply.github.com',
  cdkVersion,
  constructsVersion: '10.3.0',
  description: 'A collection of useful CDK constructs of known, repeatable patterns that are easily consumable.',
  defaultReleaseBranch: 'main',
  gitignore: ['.DS_Store', 'docs', '.idea'],
  jsiiVersion: '~5.4.0',
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
    'typedoc',
  ],
});

const typeDoc = 'type-doc';
constructLib.addTask(typeDoc, {
  exec: 'npx typedoc --readme ./README.md --name "Serverless DNA Constructs" --out docs src',
});

constructLib.synth();