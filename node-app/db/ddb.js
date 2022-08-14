const AWS = require('aws-sdk');

const config = require('../config/config');

const dynamoDb = new AWS.DynamoDB({
    endpoint: config.aws.ddb.endpoint,
    region: config.aws.ddb.region,
});

module.exports = dynamoDb;
