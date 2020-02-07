const { isString, isUndefined } = require('lodash');
const { updateFrequencyById } = require('../../objectservices/Frequency');
const {
  BadRequest,
  InternalServerError,
  NotFound,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  id: req.params.frequencyId,
  ...req.body,
});

const isValidParams = (req) => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const frequencyUpdated = await updateFrequencyById(getParams(req));
    if (!frequencyUpdated) return NotFound(res);
    return Success(res, frequencyUpdated);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = update;
