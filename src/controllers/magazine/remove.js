const { removeMagazineById } = require('../../objectservices/Magazine');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  magazineId: req.params.magazineId,
});

const remove = async (req, res) => {
  try {
    const { magazineId } = getParams(req);
    const magazineRemoved = await removeMagazineById(magazineId);
    if (!magazineRemoved) return NotFound(res);
    return Success(res, magazineRemoved);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = remove;
