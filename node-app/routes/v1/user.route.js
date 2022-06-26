const express = require('express');
const router = express.Router();
const userController = require('../../controllers/v1/user.controller');

router
  .route('/')
  .get((req, res, next) => {
    res.status(200).json({status: 'success(user page)'})
  });

router
  .route('/create')
  .post(userController.create);

router
  .route('/:userId')
  .get(userController.getById)
  .patch(userController.updateById)
  .delete(userController.deleteById);

module.exports = router;
