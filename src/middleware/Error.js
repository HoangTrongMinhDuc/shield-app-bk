const httpStatus = require('http-status');

const ErrorMiddleware = (err, req, res, next) => {
  const { statusCode = null } = err;
  const { message = httpStatus[`${statusCode}_MESSAGE`] } = err;
  if (statusCode) {
    res.status(statusCode).json({ message, statusCode });
    console.log(Date.now, err);
  }
  next();
};


module.exports = ErrorMiddleware;
