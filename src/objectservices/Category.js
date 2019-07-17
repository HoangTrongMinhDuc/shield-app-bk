const Category = require("../models/Category");
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const createCategory = async data => await createDoc(Category, data);

const listCategory = async () => await listDoc(Category);

const getCategoryById = async id => await getDocById(Category, id);

const removeCategoryById = async id => await removeDocById(Category, id);

const updateCategoryById = async ({ id, ...updateData }) =>
  await updateDoc({ Doc: Category, id, updateData });

module.exports = {
  createCategory,
  listCategory,
  getCategoryById,
  removeCategoryById,
  updateCategoryById
};
