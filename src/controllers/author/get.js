const { getAuthorById } = require("../../objectservices/Author");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const get = async (req, res) => {
  try {
    const { authorId } = getParams(req);
    const author = await getAuthorById(authorId);
    if (!author) return NotFound(res);
    res.json(author);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => {
  return { authorId: req.params.authorId };
};

module.exports = get;
