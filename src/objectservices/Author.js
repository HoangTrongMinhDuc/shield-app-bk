const Author = require("../models/Author");
const { paginateQuery } = require("../helpers/QueryHelper");

const createAuthor = async author => await new Author(author).save();

const updateAuthor = async ({ authorId, ...updateData }) =>
  await Author.findByIdAndUpdate(authorId, updateData).exec();

const removeAuthorById = async id => await Author.findByIdAndDelete(id).exec();

const getAllAuthor = async (page = 1) => {
  return await paginateQuery(Author.find({}), { page, Doc: Author });
};

const getAuthorById = async id => await Author.findById(id).exec();

module.exports = {
  createAuthor,
  updateAuthor,
  removeAuthorById,
  getAllAuthor,
  getAuthorById
};
