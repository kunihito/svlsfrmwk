const { Sequelize } = require('sequelize');
const sequelizeTransforms = require('sequelize-transforms');
const config = require('./config/config');

const platformDb = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  dialect: 'mysql',
  host: config.mysql.host,
  port: config.mysql.port,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  sync: {
    force: config.env === 'development',
  },
});
sequelizeTransforms(platformDb);

module.exports = platformDb;
