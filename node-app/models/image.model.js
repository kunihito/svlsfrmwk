const dynamoDb = require('../db/ddb');

const date = new Date();
const unixTimestamp = Math.floor(date.getTime() / 1000 );


const create = async body => {

  const params = {
    TableName: 'image',
    Item: {
      "id": {
        N: body.id
      },
      "url": {
        S: body.url
      },
      "created_at": {
        S: String(unixTimestamp)
      },
      "updated_at": {
        S: String(unixTimestamp)
      }
    },
  };

  const image = await dynamoDb.putItem(params).promise();
  return image;
};


const getById = async id => {

  const params = {
    TableName: 'image',
    Key: {
      "id": {
        N: id
      }
    }
  };

  const image = await dynamoDb.getItem(params).promise();
  return image.Item;
};


const updateById = async (id, body) => {

  const params = {
    TableName: 'image',
    Item: {
      "url": {
        S: body.url
      },
      "updated_at": {
        S: String(unixTimestamp)
      }
    },
  };

  const image = await dynamoDb.putItem(params).promise();
  return image;
};


const deleteById = async id => {

  const params = {
    TableName: 'image',
    Key: {
      "id": {
        N: id
      }
    }
  };

  const image = await dynamoDb.deleteItem(params).promise();
  return image;
};


module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
