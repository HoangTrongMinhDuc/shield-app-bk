const jwt = require("jsonwebtoken");
const config = require("../config");
const createError = require("http-errors");
const statusCodes = require("http-status");

const CheckToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token && token.startsWith("Bearer ")) {
    let begin = token.indexOf(' ') + 1;
    token = token.slice(begin, token.length);
  }
  if (token) {
    jwt.verify(token, config.SECRECT_WORD, (err, decoded) => {
      if (err) {
        return res
          .status(statusCodes.UNAUTHORIZED)
          .json(createError("Your session invalid"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res
      .status(statusCodes.UNAUTHORIZED)
      .json(createError("Unauthorized"));
  }
};

module.exports = {
  CheckToken
};
