const { getBookTypeById } = require("../../objectservices/BookType");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const get = async (req, res) => {
  try {
    const { bookTypeId } = getParams(req);
    const bookType = await getBookTypeById(bookTypeId);
    if (!bookType) return NotFound(res);
    res.json(bookType);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  bookTypeId: req.params.bookTypeId
});

module.exports = get;
