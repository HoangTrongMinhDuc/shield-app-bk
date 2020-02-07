const { isValidTeamInfo } = require('../../validator/Team');
const {
  BadRequest,
  InternalServerError,
  Success,
} = require('../../helpers/ErrorHelper');
const { createTeam } = require('../../objectservices/Team');

const getParams = (req) => ({ ...req.body });

const create = async (req, res) => {
  try {
    if (!isValidTeamInfo(getParams(req))) return BadRequest(res);
    const { name, description, logo } = getParams(req);
    const team = await createTeam({
      name,
      description,
      logo,
      leader: req.user.id,
    });
    if (!team) return InternalServerError(res);
    return Success(res, team);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = create;
