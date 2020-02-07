const { removeBookTypeById } = require('../../objectservices/BookType');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  bookTypeId: req.params.bookTypeId,
});

const remove = async (req, res) => {
  try {
    const { bookTypeId } = getParams(req);
    const bookTypeRemoved = await removeBookTypeById(bookTypeId);
    if (!bookTypeRemoved) return NotFound(res);
    return Success(res, bookTypeRemoved);
  } catch (err) {
    return InternalServerError(res);
  }
};


module.exports = remove;
