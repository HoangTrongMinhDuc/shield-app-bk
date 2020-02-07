const { updateTeamById } = require('../../objectservices/Team');
const {
  InternalServerError,
  BadRequest,
  NotFound,
  Success,
} = require('../../helpers/ErrorHelper');
const { isValidTeamInfo } = require('../../validator/Team');

const update = async (req, res) => {
  try {
    if (!isValidTeamInfo(req.body)) return BadRequest(res);
    const { name, description, logo } = req.body;
    const updatedTeam = await updateTeamById({
      id: req.params.teamId,
      name,
      description,
      logo,
    });
    if (!updatedTeam) return NotFound(res);
    return Success(res, updatedTeam);
  } catch (error) {
    return InternalServerError(res);
  }
};

module.exports = update;
