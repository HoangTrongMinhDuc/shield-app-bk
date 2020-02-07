const { isNull, isString } = require('lodash');
const { createPublisher } = require('../../objectservices/Publisher');
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
    const publisher = await createPublisher(getParams(req));
    if (!publisher) return InternalServerError(res);
    return Success(res, publisher);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = create;
