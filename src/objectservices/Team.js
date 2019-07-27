const Team = require("../models/Team");
const {
  createDoc,
  listDoc,
  getDocById,
  removeDocById,
  updateDoc
} = require("./BaseService");

const createTeam = data => createDoc(Team, data);

const listTeam = () => listDoc(Team);

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
