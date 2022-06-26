const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');

router.get('/', (req, res, next) => {
  res.status(200).json({status: 'success(top page)'})
});

router.use('/user', userRoute);

module.exports = router;
