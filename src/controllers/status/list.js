const { listStatus } = require('../../objectservices/Status');
const { InternalServerError, Success } = require('../../helpers/ErrorHelper');

const list = async (req, res) => {
  try {
    const statuses = await listStatus();
    return Success(res, statuses);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
