const { removeAuthorById } = require("../../objectservices/Author");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");
const { DeleteSuccessMsg } = require("../../Messages");

const remove = async (req, res) => {
  try {
    const { authorId } = getParams(req);
    const removed = await removeAuthorById(authorId);
    if (!removed) return NotFound(res);
    res.json({ message: DeleteSuccessMsg });
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => {
  return { authorId: req.params.authorId };
};

module.exports = remove;
