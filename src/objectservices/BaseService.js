const createDoc = (Doc, data) => new Doc(data).save();

const listDoc = Doc => Doc.find({}).exec();

const getDocById = (Doc, id) => Doc.findById(id).exec();

const updateDoc = ({ Doc, id, updateData }) =>
  Doc.update({ _id: id }, updateData, {
    new: true
  }).exec();

const removeDocById = (Doc, id) => Doc.findByIdAndDelete(id).exec();

module.exports = {
  createDoc,
  listDoc,
  getDocById,
  updateDoc,
  removeDocById
};
