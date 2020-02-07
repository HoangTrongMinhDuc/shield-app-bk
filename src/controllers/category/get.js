const { getCategoryById } = require('../../objectservices/Category');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  categoryId: req.params.categoryId,
});

const get = async (req, res) => {
  try {
    const { categoryId } = getParams(req);
    const category = await getCategoryById(categoryId);
    if (!category) return NotFound(res);
    return Success(res, category);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
