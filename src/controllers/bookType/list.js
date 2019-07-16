const { listBookType } = require("../../objectservices/BookType");
const { InternalServerError } = require("../../helpers/ErrorHelper");

const list = async (req, res) => {
  try {
    const bookTypes = await listBookType();
    res.json(bookTypes);
  } catch (err) {
    InternalServerError(res);
  }
};

module.exports = list;
