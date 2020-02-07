const jwt = require('jsonwebtoken');
const config = require('../config');
const ErrorHelper = require('../helpers/ErrorHelper');

const CheckToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    const begin = token.indexOf(' ') + 1;
    token = token.slice(begin, token.length);
  }
  if (token) {
    jwt.verify(token, config.SECRET_WORD, (err, decoded) => {
      if (err) {
        return ErrorHelper.Unauthorized(res, 'Your session invalid');
      }
      req.user = decoded;
      next();
    });
  } else {
    return ErrorHelper.Unauthorized(res);
  }
};

module.exports = CheckToken;
