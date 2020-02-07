const { isString, isNull } = require('lodash');
const { createFrequency } = require('../../objectservices/Frequency');
const {
  BadRequest,
  InternalServerError,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  name: req.body.name,
  description: req.body.description || null,
});

const isValidParams = (req) => {
  const { name, description } = getParams(req);
  return isString(name) && (isNull(description) || isString(description));
};

const create = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const frequency = await createFrequency(getParams(req));
    if (!frequency) return InternalServerError(res);
    return Success(res, frequency);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = create;
