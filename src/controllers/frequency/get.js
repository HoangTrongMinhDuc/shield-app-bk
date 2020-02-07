const { getFrequencyById } = require('../../objectservices/Frequency');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  frequencyId: req.params.frequencyId,
});

const get = async (req, res) => {
  try {
    const { frequencyId } = getParams(req);
    const frequency = await getFrequencyById(frequencyId);
    if (!frequency) return NotFound(res);
    return Success(res, frequency);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
