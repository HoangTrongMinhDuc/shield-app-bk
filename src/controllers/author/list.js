const { isNumeric } = require('validator');
const { getAllAuthor } = require('../../objectservices/Author');
const {
  BadRequest,
  InternalServerError,
  InError,
  Success,
} = require('../../helpers/ErrorHelper');


const isValidParams = (req) => {
  const { page } = req.query;
  if (page && (!isNumeric(page) || parseInt(page, 10) <= 0)) return false;
  return true;
};
const list = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const { page = 1 } = req.query;
    const authors = await getAllAuthor(parseInt(page, 10));
    if (authors.code) {
      return InError(res, authors.code, authors.message);
    }
    return Success(res, authors);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
