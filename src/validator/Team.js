const Joi = require("@hapi/joi");
const Schema = require("./Schema");

const schema = Joi.object().keys({
  name: Schema.StringName.required(),
  description: Schema.StringDescription,
  logo: Schema.StringLink
});

const isValidTeamInfo = team => !schema.validate(team).error;

module.exports = { isValidTeamInfo };
