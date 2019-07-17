const { listCategory } = require("../../objectservices/Category");
const { InternalServerError } = require("../../helpers/ErrorHelper");

const list = async (req, res) => {
  try {
    const categories = await listCategory();
    res.json(categories);
  } catch (err) {
    InternalServerError(res);
  }
};

module.exports = list;
