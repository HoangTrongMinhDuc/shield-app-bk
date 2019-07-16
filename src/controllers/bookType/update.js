const { updateBookTypeById } = require("../../objectservices/BookType");
const {
  BadRequest,
  InternalServerError,
  NotFound
} = require("../../helpers/ErrorHelper");

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const bookTypeUpdated = await updateBookTypeById(getParams(req));
    if (!bookTypeUpdated) return NotFound(res);
    res.json(bookTypeUpdated);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  id: req.params.bookTypeId,
  name: req.body.name,
  description: req.body.description
});

const isValidParams = req => {
  const { name, description } = getParams(req);
  return (
    (name && typeof name === "string") ||
    (description && typeof description === "string")
  );
};

module.exports = update;
