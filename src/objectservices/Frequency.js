const Frequency = require('../models/Frequency');
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc,
} = require('./BaseService');

const createFrequency = (data) => createDoc(Frequency, data);

const listFrequency = () => listDoc(Frequency);

const getFrequencyById = (id) => getDocById(Frequency, id);

const removeFrequencyById = (id) => removeDocById(Frequency, id);

// eslint-disable-next-line max-len
const updateFrequencyById = ({ id, ...updateData }) => updateDoc({ Doc: Frequency, id, updateData });

module.exports = {
  createFrequency,
  listFrequency,
  getFrequencyById,
  removeFrequencyById,
  updateFrequencyById,
};
