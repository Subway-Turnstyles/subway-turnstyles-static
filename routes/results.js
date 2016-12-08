const router = require('express').Router();
const { searchFlask } = require('../services/flask.js');
// const { getDate } = require('../model/date.js');

router.get('/', searchFlask, (req, res) => {
    const sendFlaskData = {
    flaskData: res.data,
  };
  console.log(res.data);
  res.render('results', sendFlaskData);
  // res.json(res.date)
})


module.exports = router;
