const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


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

  //return user;
  return "Create"
};


const getById = (id) => {

  const params = {
    TableName: 'User',
    Key: {
      "id": id,
    }
  };

  const user = dynamoDb.get(params, (err, data) => {
    return data;
  });

  //return user;
  return "Get"
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
