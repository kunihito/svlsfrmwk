const AWS = require('aws-sdk');
const config = require('../../config/config');

const dynamoDb = new AWS.DynamoDB({
  endpoint: config.aws.ddb.endpoint,
  region: config.aws.ddb.region,
});

const date = new Date();
const unixTimestamp = Math.floor(date.getTime() / 1000 );


const create = async body => {

  const params = {
    TableName: 'user',
    Item: {
      "id": {
        N: body.id
      },
      "name": {
        S: body.name
      },
      "created_at": {
        S: String(unixTimestamp)
      }
    },
  };

  const user = await dynamoDb.putItem(params).promise();
  return user;
};


const getById = async id => {

  const params = {
    TableName: 'user',
    Key: {
      "id": {
        N: id
      }
    }
  };

  const user = await dynamoDb.getItem(params).promise();
  return user.Item;
};


const updateById = async (id, body) => {

  const params = {
    TableName: 'user',
    Item: {
      "id": {
        N: id
      },
      "name": {
        S: body.name
      },
      "created_at": {
        S: String(unixTimestamp)
      }
    },
  };

  const user = await dynamoDb.putItem(params).promise();
  return user;
};


const deleteById = async id => {

  const params = {
    TableName: 'user',
    Key: {
      "id": {
        N: id
      }
    }
  };

  const user = await dynamoDb.deleteItem(params).promise();
  return user;
};


module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
