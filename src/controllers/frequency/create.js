const { createFrequency } = require("../../objectservices/Frequency");
const {
  BadRequest,
  InternalServerError
} = require("../../helpers/ErrorHelper");
const { isString, isNull } = require("lodash");

const create = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const frequency = await createFrequency(getParams(req));
    if (!frequency) return InternalServerError(res);
    res.json(frequency);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  name: req.body.name,
  description: req.body.description || null
});

const isValidParams = req => {
  const { name, description } = getParams(req);
  return isString(name) && (isNull(description) || isString(description));
};

module.exports = create;
