const { removeStatusById } = require('../../objectservices/Status');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  statusId: req.params.statusId,
});

const remove = async (req, res) => {
  try {
    const { statusId } = getParams(req);
    const statusRemoved = await removeStatusById(statusId);
    if (!statusRemoved) return NotFound(res);
    return Success(res, statusRemoved);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = remove;
