const express = require('express');
const router = express.Router();

const userRoute = require('./user.route');
const imageRoute = require('./image.route');

router.get('/', (req, res, next) => {
  if (!req.session.views) {
    req.session.views = 0;
  };
  req.session.views++;
  res.status(200).json({status: 'success(top page)', views: req.session.views});
});

router.use('/user', userRoute);
router.use('/image', imageRoute);

module.exports = router;
