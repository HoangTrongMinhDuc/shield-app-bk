const { getPublisherById } = require('../../objectservices/Publisher');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const getParams = (req) => ({
  publisherId: req.params.publisherId,
});

const get = async (req, res) => {
  try {
    const { publisherId } = getParams(req);
    const publisher = await getPublisherById(publisherId);
    if (!publisher) return NotFound(res);
    return Success(res, publisher);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
