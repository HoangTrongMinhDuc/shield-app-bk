const { getAllAuthor } = require("../../objectservices/Author");
const {
  BadRequest,
  InternalServerError,
  InError
} = require("../../helpers/ErrorHelper");
const { isNumeric } = require("validator");

const list = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const { page = 1 } = req.query;
    const authors = await getAllAuthor(parseInt(page));
    if (authors.code) {
      return InError(res, authors.code, authors.message);
    }
    res.json(authors);
  } catch (err) {
    InternalServerError(res);
  }
};

const isValidParams = req => {
  const { page } = req.query;
  if (page && (!isNumeric(page) || parseInt(page) <= 0)) return false;
  return true;
};

module.exports = list;
