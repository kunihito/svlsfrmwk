const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../.env') });

module.exports = {
  env: process.env.NODE_ENV,
  aws: {
    ddb: {
      endpoint: process.env.DDB_ENDPOINT,
      region: process.env.DDB_REGION
    }
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  }
};
