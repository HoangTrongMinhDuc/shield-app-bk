const { getStatusById } = require("../../objectservices/Status");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const get = async (req, res) => {
  try {
    const { statusId } = getParams(req);
    const status = await getStatusById(statusId);
    if (!status) return NotFound(res);
    res.json(status);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  statusId: req.params.statusId
});

module.exports = get;
