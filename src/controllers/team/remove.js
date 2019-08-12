const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");
const { removeTeamById } = require("../../objectservices/Team");

const remove = async (req, res) => {
  try {
    const removedTeam = await removeTeamById(req.params.teamId);
    if (!removedTeam) return NotFound(res);
    res.json(removedTeam);
  } catch (error) {
    console.log(error);
    InternalServerError(res);
  }
};

module.exports = remove;
