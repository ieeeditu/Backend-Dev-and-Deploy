const express = require('express');
const router = express.Router()

router.get('', (req, res) => {
  res.send('Hey it\'s message route');
});

router.get('/hello', (req, res) => {
  res.send('Hello World');
});

module.exports = router;

