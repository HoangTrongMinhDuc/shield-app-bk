const { listCategory } = require('../../objectservices/Category');
const { InternalServerError, Success } = require('../../helpers/ErrorHelper');

const list = async (req, res) => {
  try {
    const categories = await listCategory();
    return Success(res, categories);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
