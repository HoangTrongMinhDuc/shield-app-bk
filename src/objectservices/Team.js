const Team = require("../models/Team");
const {
  createDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const UserExcludeFields = "-hash_password -salt_password -upload_preset";

const createTeam = data => createDoc(Team, data);

const listTeam = () =>
  Team.find({})
    .populate("leader", UserExcludeFields, "User")
    .populate("members", UserExcludeFields, "User");

const getTeamById = id => getDocById(Team, id);

const removeTeamById = id => removeDocById(Team, id);

const updateTeamById = ({ id, ...updateData }) =>
  updateDoc({ Doc: Team, id, updateData });

module.exports = {
  createTeam,
  listTeam,
  getTeamById,
  removeTeamById,
  updateTeamById
};
