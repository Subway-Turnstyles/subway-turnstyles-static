const fetch = require('node-fetch');

const turnstyleURL = 'http://ec2-54-89-175-90.compute-1.amazonaws.com/myapp/model_one';

// Search Flask URL for Turnstyle data
function searchFlask(req, res, next) {
  // fetch flask turnstyle data
  fetch(`${turnstyleURL}`)
  .then(r => r.json())
  .then((results) => {
    res.data = results;
    console.log(res.data);
    console.log('service')
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { searchFlask };
