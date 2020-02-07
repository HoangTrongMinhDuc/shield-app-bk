const { getStatusById } = require('../../objectservices/Status');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  statusId: req.params.statusId,
});

const get = async (req, res) => {
  try {
    const { statusId } = getParams(req);
    const status = await getStatusById(statusId);
    if (!status) return NotFound(res);
    return Success(res, status);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
