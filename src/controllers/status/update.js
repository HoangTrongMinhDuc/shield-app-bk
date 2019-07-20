const { updateStatusById } = require("../../objectservices/Status");
const {
  BadRequest,
  InternalServerError,
  NotFound
} = require("../../helpers/ErrorHelper");
const { isString, isUndefined } = require("lodash");

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const statusUpdated = await updateStatusById(getParams(req));
    if (!statusUpdated) return NotFound(res);
    res.json(statusUpdated);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  id: req.params.statusId,
  ...req.body
});

const isValidParams = req => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

module.exports = update;
