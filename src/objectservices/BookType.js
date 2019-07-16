const BookType = require("../models/BookType");
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const createBookType = async data => await createDoc(BookType, data);

const listBookType = async () => await listDoc(BookType);

const getBookTypeById = async id => await getDocById(BookType, id);

const removeBookTypeById = async id => await removeDocById(BookType, id);

const updateBookTypeById = async ({ id, ...updateData }) =>
  await updateDoc({ Doc: BookType, id, updateData });

module.exports = {
  createBookType,
  listBookType,
  getBookTypeById,
  removeBookTypeById,
  updateBookTypeById
};
