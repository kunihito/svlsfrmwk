const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');
const imageRoute = require('./image.route');

router.get('/', (req, res, next) => {
  res.status(200).json({status: 'success(top page)'})
});

router.use('/user', userRoute);
router.use('/image', imageRoute);

module.exports = router;
