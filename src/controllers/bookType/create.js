const { createBookType } = require("../../objectservices/BookType");
const {
  BadRequest,
  InternalServerError
} = require("../../helpers/ErrorHelper");
const { isString } = require("lodash");

const create = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const bookType = await createBookType(getParams(req));
    if (!bookType) return InternalServerError(res);
    res.json(bookType);
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
