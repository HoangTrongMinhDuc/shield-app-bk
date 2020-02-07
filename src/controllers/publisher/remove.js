const { removePublisherById } = require('../../objectservices/Publisher');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  publisherId: req.params.publisherId,
});

const remove = async (req, res) => {
  try {
    const { publisherId } = getParams(req);
    const publisherRemoved = await removePublisherById(publisherId);
    if (!publisherRemoved) return NotFound(res);
    return Success(res, publisherRemoved);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = remove;
