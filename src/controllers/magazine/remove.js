const { removeMagazineById } = require("../../objectservices/Magazine");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const remove = async (req, res) => {
  try {
    const { magazineId } = getParams(req);
    const magazineRemoved = await removeMagazineById(magazineId);
    if (!magazineRemoved) return NotFound(res);
    res.json(magazineRemoved);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  magazineId: req.params.magazineId
});

module.exports = remove;
