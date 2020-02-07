const { InternalServerError, Success } = require('../../helpers/ErrorHelper');
const { listTeam } = require('../../objectservices/Team');

const list = async (req, res) => {
  try {
    const teams = await listTeam();
    return Success(res, teams);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
