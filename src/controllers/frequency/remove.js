const { removeFrequencyById } = require("../../objectservices/Frequency");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const remove = async (req, res) => {
  try {
    const { frequencyId } = getParams(req);
    const frequencyRemoved = await removeFrequencyById(frequencyId);
    if (!frequencyRemoved) return NotFound(res);
    res.json(frequencyRemoved);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  frequencyId: req.params.frequencyId
});

module.exports = remove;
