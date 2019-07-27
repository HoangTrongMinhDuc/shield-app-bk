const { isValidTeamInfo } = require("../../validator/TeamValidator");
const {
  BadRequest,
  InternalServerError
} = require("../../helpers/ErrorHelper");
const create = (req, res) => {
  try {
    if (!isValidTeamInfo(getParams(req))) return BadRequest(res);
    res.json(getParams(req));
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({ ...req.body });

module.exports = create;
