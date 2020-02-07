const { listFrequency } = require('../../objectservices/Frequency');
const { InternalServerError, Success } = require('../../helpers/ErrorHelper');

const list = async (req, res) => {
  try {
    const frequencies = await listFrequency();
    return Success(res, frequencies);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
