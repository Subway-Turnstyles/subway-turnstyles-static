const router = require('express').Router();
const { searchFlask } = require('../services/flask.js');

router.get('/', searchFlask, (req, res) => {
    const sendFlaskData = {
    flaskData: res.data,
  };
  console.log(res.data);
  res.render('results', sendFlaskData);
})


module.exports = router;
