const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('movies')
});

module.exports = router;
