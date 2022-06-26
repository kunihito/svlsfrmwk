const AWS = require('aws-sdk');
const config = require('../../config/config');

const dynamoDb = new AWS.DynamoDB({
  endpoint: config.aws.ddb.endpoint,
  region: config.aws.ddb.region,
});


const create = (body) => {

  const params = {
    TableName: 'User',
    Item: {
      "id": body.id,
      "name": body.name,
    },
    ReturnValues: 'ALL_OLD'
  };

  const user = dynamoDb.put(params, (err, data) => {
    return data;
  });

  return user;
  //return "Create"
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


const updateById = (id, body) => {

  const params = {
    TableName: 'User',
    Key: {
      "id": id
    },
    UpdateExpression: "set name = :y",
    ConditionExpression: "attribute_exists(id)",
    ExpressionAttributeValues: {
      ":y": body.name
    },
    ReturnValues: "UPDATED_NEW"
  };

  const user = dynamoDb.update(params, (err, data) => {
    return data;
  });

  //return user;
  return "Update"
};


const deleteById = (id) => {

  const params = {
    TableName: 'User',
    Key: {
      "id": id,
    },
    ConditionExpression: "attribute_exists(id)",
    ReturnValues: 'ALL_OLD'
  };

  const user = dynamoDb.delete(params, (err, data) => {
    return data;
  });

  //return user;
  return "Delete"
};


module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
