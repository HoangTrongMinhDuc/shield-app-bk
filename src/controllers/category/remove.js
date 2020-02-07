const { removeCategoryById } = require('../../objectservices/Category');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  categoryId: req.params.categoryId,
});

const remove = async (req, res) => {
  try {
    const { categoryId } = getParams(req);
    const categoryRemoved = await removeCategoryById(categoryId);
    if (!categoryRemoved) return NotFound(res);
    return Success(res, categoryRemoved);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = remove;
