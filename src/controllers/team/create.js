const { isValidTeamInfo } = require("../../validator/Team");
const {
  BadRequest,
  InternalServerError
} = require("../../helpers/ErrorHelper");
const { createTeam } = require("../../objectservices/Team");

const create = async (req, res) => {
  try {
    if (!isValidTeamInfo(getParams(req))) return BadRequest(res);
    const { name, description, logo } = getParams(req);
    const team = await createTeam({
      name,
      description,
      logo,
      leader: req.user.id
    });
    if (!team) return InternalServerError(res);
    res.json(team);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({ ...req.body });

module.exports = create;
