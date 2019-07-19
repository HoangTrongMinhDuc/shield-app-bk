const { getMagazineById } = require("../../objectservices/Magazine");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const get = async (req, res) => {
  try {
    const { magazineId } = getParams(req);
    const magazine = await getMagazineById(magazineId);
    if (!magazine) return NotFound(res);
    res.json(magazine);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  magazineId: req.params.magazineId
});

module.exports = get;
