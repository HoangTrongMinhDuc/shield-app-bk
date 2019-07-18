const { getFrequencyById } = require("../../objectservices/Frequency");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const get = async (req, res) => {
  try {
    const { frequencyId } = getParams(req);
    const frequency = await getFrequencyById(frequencyId);
    if (!frequency) return NotFound(res);
    res.json(frequency);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  frequencyId: req.params.frequencyId
});

module.exports = get;
