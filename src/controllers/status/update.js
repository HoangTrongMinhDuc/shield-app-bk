const { isString, isUndefined } = require('lodash');
const { updateStatusById } = require('../../objectservices/Status');
const {
  BadRequest,
  InternalServerError,
  NotFound,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  id: req.params.statusId,
  ...req.body,
});

const isValidParams = (req) => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const statusUpdated = await updateStatusById(getParams(req));
    if (!statusUpdated) return NotFound(res);
    return Success(res, statusUpdated);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = update;
