const { getAuthorById } = require('../../objectservices/Author');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({ authorId: req.params.authorId });

const get = async (req, res) => {
  try {
    const { authorId } = getParams(req);
    const author = await getAuthorById(authorId);
    if (!author) return NotFound(res);
    return Success(res, author);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
