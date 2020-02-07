const { getBookTypeById } = require('../../objectservices/BookType');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  bookTypeId: req.params.bookTypeId,
});

const get = async (req, res) => {
  try {
    const { bookTypeId } = getParams(req);
    const bookType = await getBookTypeById(bookTypeId);
    if (!bookType) return NotFound(res);
    return Success(res, bookType);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
