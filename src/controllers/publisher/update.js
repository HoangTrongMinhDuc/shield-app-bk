const { isString, isUndefined } = require('lodash');
const { updatePublisherById } = require('../../objectservices/Publisher');
const {
  BadRequest,
  InternalServerError,
  NotFound,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  id: req.params.publisherId,
  ...req.body,
});

const isValidParams = (req) => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const publisherUpdated = await updatePublisherById(getParams(req));
    if (!publisherUpdated) return NotFound(res);
    return Success(res, publisherUpdated);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = update;
