var conn = require('./db');

module.exports = {
  render(req, res, error, success) {
    res.render('contact');
  }
};