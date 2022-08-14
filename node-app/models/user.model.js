const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

const platformDb = require('../db');
const { roles, roleName } = require('../config/roles');
const config = require('../config/config');

const User = platformDb.define(
  'User',
  {
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
  },
  {
    timestamps: true,
    tableName: 'User' // 明示的にテーブル名を指定
  }
);

User.addHook('beforeSave', async (user) => {
  if (user.changed('password')) {
    // eslint-disable-next-line no-param-reassign
    user.password = await bcrypt.hash(user.password, 8);
  }
});

User.addHook('afterSync', async () => {
  if (config.env === 'development') {
    User.create({
      email: 'test@nttdata.com',
      role: 'adm',
      name: 'admin',
      password: 'Nttdata0',
    });
  }
});

module.exports = User;
