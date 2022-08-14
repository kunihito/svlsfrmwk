const { DataTypes } = require('sequelize');

const rdb = require('../db/rdb');

const User = rdb.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    field: 'email',
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    lowercase: true,
    trim: true,
    isEmail: true
  },
  role: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: roles,
    defaultValue: 'usr'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
    min: 23,
    is: /^[0-9a-f]{64}$/i
  }
}, {
  timestamps: true,
  tableName: 'User'
});

module.exports = User;
