const db = require('../dbConnect');

function getDate(req, res, next) {
  // console.log(req.query);
  // console.log(req.query.bob);
  db.one(
    `SELECT result FROM bob WHERE day=$1;`, [req.query.bob])
  .then((result) => {
      res.data = result;
      console.log(res.data)
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

module.exports = {
  getDate,
};
