const Publisher = require("../models/Publisher");
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const createPublisher = data => createDoc(Publisher, data);

const listPublisher = () => listDoc(Publisher);

const getPublisherById = id => getDocById(Publisher, id);

const removePublisherById = id => removeDocById(Publisher, id);

const updatePublisherById = ({ id, ...updateData }) =>
  updateDoc({ Doc: Publisher, id, updateData });

module.exports = {
  createPublisher,
  listPublisher,
  getPublisherById,
  removePublisherById,
  updatePublisherById
};
