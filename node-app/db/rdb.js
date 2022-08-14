const { Sequelize } = require('sequelize');
const config = require('../config/config');

const rdb = new Sequelize('platform_db', config.mysql.user, config.mysql.password, {
  dialect: 'mysql',
  host: config.mysql.host,
  port: config.mysql.port,
});

module.exports = rdb;
