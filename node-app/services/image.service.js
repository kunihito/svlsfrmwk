const { Image } = require('../models');

/**
 * Create a image
 * @param {Object} body
 * @returns {Promise<Image>}
 */
const create = async (body) => {
  const image = await Image.create(body);
  return image;
};

/**
 * Get image by id
 * @param {ObjectId} id
 * @returns {Promise<Image>}
 */
const getById = async (id) => {
  const image = await Image.getById(id);
  return image;
};

/**
 * Update image by id
 * @param {ObjectId} id
 * @param {Object} body
 * @returns {Promise<Image>}
 */
const updateById = async (id, body) => {
  const image = await Image.updateById(id, body);
  return image;
};

/**
 * Delete image by id
 * @param {ObjectId} id
 * @returns {Promise<Image>}
 */
const deleteById = async (id) => {
  const image = await Image.deleteById(id);
  return image;
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
