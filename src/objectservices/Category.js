const Category = require("../models/Category");
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const createCategory = data => createDoc(Category, data);

const listCategory = () => listDoc(Category);

const getCategoryById = id => getDocById(Category, id);

const removeCategoryById = id => removeDocById(Category, id);

const updateCategoryById = ({ id, ...updateData }) =>
  updateDoc({ Doc: Category, id, updateData });

module.exports = {
  createCategory,
  listCategory,
  getCategoryById,
  removeCategoryById,
  updateCategoryById
};
