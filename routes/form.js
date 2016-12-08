const router = require('express').Router();
const { searchFlask } = require('../services/flask.js');

router.get('/', searchFlask, (req, res) => {
  res.render('form');
})

module.exports = router;
