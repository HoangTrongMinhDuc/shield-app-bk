const { listBookType } = require('../../objectservices/BookType');
const { InternalServerError, Success } = require('../../helpers/ErrorHelper');

const list = async (req, res) => {
  try {
    const bookTypes = await listBookType();
    return Success(res, bookTypes);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
