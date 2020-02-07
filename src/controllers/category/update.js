const { isString, isUndefined } = require('lodash');
const { updateCategoryById } = require('../../objectservices/Category');
const {
  BadRequest,
  InternalServerError,
  NotFound,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  id: req.params.categoryId,
  ...req.body,
});

const isValidParams = (req) => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const categoryUpdated = await updateCategoryById(getParams(req));
    if (!categoryUpdated) return NotFound(res);
    return Success(res, categoryUpdated);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = update;
