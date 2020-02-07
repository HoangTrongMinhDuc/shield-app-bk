const { listPublisher } = require('../../objectservices/Publisher');
const { InternalServerError, Success } = require('../../helpers/ErrorHelper');

const list = async (req, res) => {
  try {
    const publishers = await listPublisher();
    return Success(res, publishers);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
