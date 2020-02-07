const { isString } = require('lodash');
const { createCategory } = require('../../objectservices/Category');
const {
  BadRequest,
  InternalServerError,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  name: req.body.name,
  description: req.body.description,
});

const isValidParams = (req) => {
  const { name } = getParams(req);
  return isString(name);
};

const create = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const category = await createCategory(getParams(req));
    if (!category) return InternalServerError(res);
    return Success(res, category);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = create;
