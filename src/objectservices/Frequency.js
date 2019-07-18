const Frequency = require("../models/Frequency");
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const createFrequency = async data => await createDoc(Frequency, data);

const listFrequency = async () => await listDoc(Frequency);

const getFrequencyById = async id => await getDocById(Frequency, id);

const removeFrequencyById = async id => await removeDocById(Frequency, id);

const updateFrequencyById = async ({ id, ...updateData }) =>
  await updateDoc({ Doc: Frequency, id, updateData });

module.exports = {
  createFrequency,
  listFrequency,
  getFrequencyById,
  removeFrequencyById,
  updateFrequencyById
};
