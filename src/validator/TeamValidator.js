const Joi = require("@hapi/joi");

const schema = Joi.object().keys({
  logo: Joi.string(),
  name: Joi.string()
    .min(3)
    .max(60),
  description: Joi.string().max(256),
  leader: Joi.string().length(24),
  members: Joi.array().items(Joi.string().length(24))
});

const isValidTeamInfo = team => !schema.validate(team).error;

module.exports = { isValidTeamInfo };
