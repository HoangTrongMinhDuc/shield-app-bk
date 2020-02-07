const Author = require('../models/Author');
const { paginateQuery } = require('../helpers/QueryHelper');

const createAuthor = (author) => new Author(author).save();

const updateAuthor = ({ authorId, ...updateData }) => Author.findByIdAndUpdate(
  authorId,
  { ...updateData, updatedDate: Date.now() },
  { new: true },
).exec();

const removeAuthorById = (id) => Author.findByIdAndDelete(id).exec();

const getAllAuthor = (page = 1) => paginateQuery(Author.find({}), { page, Doc: Author });

const getAuthorById = async (id) => Author.findById(id).exec();

module.exports = {
  createAuthor,
  updateAuthor,
  removeAuthorById,
  getAllAuthor,
  getAuthorById,
};
