const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');
const { removeTeamById } = require('../../objectservices/Team');

const remove = async (req, res) => {
  try {
    const removedTeam = await removeTeamById(req.params.teamId);
    if (!removedTeam) return NotFound(res);
    return Success(res, removedTeam);
  } catch (error) {
    return InternalServerError(res);
  }
};

module.exports = remove;
