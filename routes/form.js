const router = require('express').Router();
const { searchFlask } = require('../services/flask.js');
// const { getDate } = require('../')

router.get('/', (req, res) => {
  res.render('form');
})

module.exports = router;
