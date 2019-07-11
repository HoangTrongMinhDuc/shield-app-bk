const jwt = require("jsonwebtoken");
const config = require("../config");
const ErrorHelper = require("../helpers/ErrorHelper");

const CheckToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token && token.startsWith("Bearer ")) {
    let begin = token.indexOf(" ") + 1;
    token = token.slice(begin, token.length);
  }
  if (token) {
    jwt.verify(token, config.SECRECT_WORD, (err, decoded) => {
      if (err) {
        return ErrorHelper.Unauthorized(res, "Your session invalid");
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return ErrorHelper.Unauthorized(res);
  }
};

module.exports = CheckToken;
