const { getMagazineById } = require('../../objectservices/Magazine');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  magazineId: req.params.magazineId,
});

const get = async (req, res) => {
  try {
    const { magazineId } = getParams(req);
    const magazine = await getMagazineById(magazineId);
    if (!magazine) return NotFound(res);
    return Success(res, magazine);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
