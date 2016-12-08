const db = require('../dbConnect');

function getDate(req, res, next) {
  db.one(
    `SELECT * FROM date WHERE day=$1;`, [req.body.date])
  .then((result) => {
      res.result = result;
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
