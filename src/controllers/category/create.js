const { createCategory } = require("../../objectservices/Category");
const {
  BadRequest,
  InternalServerError
} = require("../../helpers/ErrorHelper");
const { isString } = require("lodash");

const create = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const category = await createCategory(getParams(req));
    if (!category) return InternalServerError(res);
    res.json(category);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  name: req.body.name,
  description: req.body.description
});

const isValidParams = req => {
  const { name } = getParams(req);
  return isString(name);
};

module.exports = create;
