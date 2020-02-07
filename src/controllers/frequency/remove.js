const { removeFrequencyById } = require('../../objectservices/Frequency');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  frequencyId: req.params.frequencyId,
});

const remove = async (req, res) => {
  try {
    const { frequencyId } = getParams(req);
    const frequencyRemoved = await removeFrequencyById(frequencyId);
    if (!frequencyRemoved) return NotFound(res);
    return Success(res, frequencyRemoved);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = remove;
