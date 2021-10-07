/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["SecretKey1"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_CREATEREACTAPPAUTHAMPLIFY_FILETABLE_ARN
	API_CREATEREACTAPPAUTHAMPLIFY_FILETABLE_NAME
	API_CREATEREACTAPPAUTHAMPLIFY_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const aws = require('aws-sdk');
const region = process.env.REGION
const fileTable = process.env.API_CREATEREACTAPPAUTHAMPLIFY_FILETABLE_NAME
aws.config.update({region: region});
var ddb = new aws.DynamoDB({apiVersion: '2012-08-10'});
var ddb_table_name = fileTable
var ddb_primary_key = 'id';

exports.handler = async function (event) {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);

  console.log(`region: ${region}`);
  console.log(`ddb_table_name: ${ddb_table_name}`, `ddb_primary_key: ${ddb_primary_key}`);
};
