const Magazine = require("../models/Magazine");
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const createMagazine = data => createDoc(Magazine, data);

const listMagazine = () => listDoc(Magazine);

const getMagazineById = id => getDocById(Magazine, id);

const removeMagazineById = id => removeDocById(Magazine, id);

const updateMagazineById = ({ id, ...updateData }) =>
  updateDoc({ Doc: Magazine, id, updateData });

module.exports = {
  createMagazine,
  listMagazine,
  getMagazineById,
  removeMagazineById,
  updateMagazineById
};
