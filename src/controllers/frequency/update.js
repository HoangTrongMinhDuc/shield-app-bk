const { updateFrequencyById } = require("../../objectservices/Frequency");
const {
  BadRequest,
  InternalServerError,
  NotFound
} = require("../../helpers/ErrorHelper");
const { isString, isUndefined } = require("lodash");

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const frequencyUpdated = await updateFrequencyById(getParams(req));
    if (!frequencyUpdated) return NotFound(res);
    res.json(frequencyUpdated);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  id: req.params.frequencyId,
  ...req.body
});

const isValidParams = req => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

module.exports = update;
