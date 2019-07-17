const { updateCategoryById } = require("../../objectservices/Category");
const {
  BadRequest,
  InternalServerError,
  NotFound
} = require("../../helpers/ErrorHelper");
const { isString, isUndefined } = require("lodash");

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const categoryUpdated = await updateCategoryById(getParams(req));
    if (!categoryUpdated) return NotFound(res);
    res.json(categoryUpdated);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  id: req.params.categoryId,
  ...req.body
});

const isValidParams = req => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

module.exports = update;
