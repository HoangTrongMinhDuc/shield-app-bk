const { InternalServerError } = require("../../helpers/ErrorHelper");
const { listTeam } = require("../../objectservices/Team");

const list = async (req, res) => {
  try {
    const teams = await listTeam();
    res.json(teams);
  } catch (err) {
    InternalServerError(res);
  }
};

module.exports = list;
