const Joi = require("@hapi/joi");

module.exports.isStringId = string =>
  !Joi.string()
    .length(24)
    .validate(string).error;

