const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('movie desc')
});

module.exports = router;
