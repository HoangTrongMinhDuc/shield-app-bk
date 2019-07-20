const { removePublisherById } = require("../../objectservices/Publisher");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const remove = async (req, res) => {
  try {
    const { publisherId } = getParams(req);
    const publisherRemoved = await removePublisherById(publisherId);
    if (!publisherRemoved) return NotFound(res);
    res.json(publisherRemoved);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  publisherId: req.params.publisherId
});

module.exports = remove;
