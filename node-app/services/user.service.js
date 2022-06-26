const { User } = require('../models');

/**
 * Create a user
 * @param {Object} body
 * @returns {Promise<User>}
 */
const create = async (body) => {
  const user = await User.create(body);
  return user;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getById = async (id) => {
  const user = await User.getById(id);
  return user;
};

/**
 * Update user by id
 * @param {ObjectId} id
 * @param {Object} body
 * @returns {Promise<User>}
 */
const updateById = async (id, body) => {
  const user = await User.updateById(id, body);
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const deleteById = async (id) => {
  const user = await User.deleteById(id);
  return user;
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
