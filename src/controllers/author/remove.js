const { removeAuthorById } = require('../../objectservices/Author');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({ authorId: req.params.authorId });

const remove = async (req, res) => {
  try {
    const { authorId } = getParams(req);
    const removed = await removeAuthorById(authorId);
    if (!removed) return NotFound(res);
    return Success(res, removed);
  } catch (err) {
    return InternalServerError(res);
  }
};


module.exports = remove;
