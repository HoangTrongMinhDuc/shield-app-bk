const { isString, isUndefined } = require('lodash');
const { updateMagazineById } = require('../../objectservices/Magazine');
const {
  BadRequest,
  InternalServerError,
  NotFound,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  id: req.params.magazineId,
  ...req.body,
});

const isValidParams = (req) => {
  const { name, description } = getParams(req);
  return isString(name) && (isUndefined(description) || isString(description));
};

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const magazineUpdated = await updateMagazineById(getParams(req));
    if (!magazineUpdated) return NotFound(res);
    return Success(res, magazineUpdated);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = update;
