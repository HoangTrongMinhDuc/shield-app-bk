const { removeCategoryById } = require("../../objectservices/Category");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const remove = async (req, res) => {
  try {
    const { categoryId } = getParams(req);
    const categoryRemoved = await removeCategoryById(categoryId);
    if (!categoryRemoved) return NotFound(res);
    res.json(categoryRemoved);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  categoryId: req.params.categoryId
});

module.exports = remove;
