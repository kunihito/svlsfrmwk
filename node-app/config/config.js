const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') });

module.exports = {
  env: process.env.NODE_ENV,
  aws: {
    ddb: {
      endpoint: process.env.DDB_ENDPOINT,
      region: process.env.DDB_REGION
    }
  }
};
