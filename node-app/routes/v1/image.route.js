const express = require('express');
const router = express.Router();
const imageController = require('../../controllers/v1/image.controller');

router
  .route('/')
  .get((req, res, next) => {
    res.status(200).json({status: 'success(image page)'})
  });

router
  .route('/create')
  .post(imageController.create);

router
  .route('/:id')
  .get(imageController.getById)
  .patch(imageController.updateById)
  .delete(imageController.deleteById);

module.exports = router;
