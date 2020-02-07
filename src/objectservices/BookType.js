const BookType = require('../models/BookType');
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc,
} = require('./BaseService');

const createBookType = (data) => createDoc(BookType, data);

const listBookType = () => listDoc(BookType);

const getBookTypeById = (id) => getDocById(BookType, id);

const removeBookTypeById = (id) => removeDocById(BookType, id);

const updateBookTypeById = ({ id, ...updateData }) => updateDoc({ Doc: BookType, id, updateData });

module.exports = {
  createBookType,
  listBookType,
  getBookTypeById,
  removeBookTypeById,
  updateBookTypeById,
};
