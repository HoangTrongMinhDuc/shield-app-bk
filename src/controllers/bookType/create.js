const { isString } = require('lodash');
const { createBookType } = require('../../objectservices/BookType');
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
    const bookType = await createBookType(getParams(req));
    if (!bookType) return InternalServerError(res);
    return Success(res, bookType);
  } catch (err) {
    return InternalServerError(res);
  }
};


module.exports = create;
