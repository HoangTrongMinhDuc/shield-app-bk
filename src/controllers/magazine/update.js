const { updateMagazineById } = require("../../objectservices/Magazine");
const {
  BadRequest,
  InternalServerError,
  NotFound
} = require("../../helpers/ErrorHelper");
const { isString, isUndefined } = require("lodash");

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const magazineUpdated = await updateMagazineById(getParams(req));
    if (!magazineUpdated) return NotFound(res);
    res.json(magazineUpdated);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  id: req.params.magazineId,
  ...req.body
});

const isValidParams = req => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

module.exports = update;
