const { imageService } = require('../../services');

const create = async (req, res) => {
  const image = await imageService.create(req.body);
  res.send(image);
};

const getById = async (req, res) => {
  const image = await imageService.getById(req.params.id);
  res.send(image);
};

const updateById = async (req, res) => {
  const image = await imageService.updateById(req.params.id, req.body);
  res.send(image);
};

const deleteById = async (req, res) => {
  const image = await imageService.deleteById(req.params.id);
  res.send(image);
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
