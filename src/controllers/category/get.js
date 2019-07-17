const { getCategoryById } = require("../../objectservices/Category");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const get = async (req, res) => {
  try {
    const { categoryId } = getParams(req);
    const category = await getCategoryById(categoryId);
    if (!category) return NotFound(res);
    res.json(category);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  categoryId: req.params.categoryId
});

module.exports = get;
