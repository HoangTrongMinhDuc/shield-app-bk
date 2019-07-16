const { removeBookTypeById } = require("../../objectservices/BookType");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const remove = async (req, res) => {
  try {
    const { bookTypeId } = getParams(req);
    const bookTypeRemoved = await removeBookTypeById(bookTypeId);
    if (!bookTypeRemoved) return NotFound(res);
    res.json(bookTypeRemoved);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  bookTypeId: req.params.bookTypeId
});

module.exports = remove;
