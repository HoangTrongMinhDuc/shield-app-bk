const createDoc = async (Doc, data) => await new Doc(data).save();

const listDoc = async Doc => await Doc.find({}).exec();

const getDocById = async (Doc, id) => await Doc.findById(id).exec();

const updateDoc = async ({ Doc, id, updateData }) =>
  await Doc.findByIdAndUpdate(id, updateData, {
    new: true
  }).exec();

const removeDocById = async (Doc, id) => await Doc.findByIdAndDelete(id).exec();

module.exports = {
  createDoc,
  listDoc,
  getDocById,
  updateDoc,
  removeDocById
};
