const { userService } = require('../../services');

const create = async (req, res) => {
  console.log(req.body);
  const user = await userService.create(req.body);
  res.send(user);
};

const getById = async (req, res) => {
  const user = await userService.getById(req.params.id);
  res.send(user);
};

const updateById = async (req, res) => {
  const user = await userService.updateById(req.params.id, req.body);
  res.send(user);
};

const deleteById = async (req, res) => {
  const user = await userService.deleteById(req.params.id);
  res.sendStatus(200);
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
