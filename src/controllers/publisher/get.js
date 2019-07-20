const { getPublisherById } = require("../../objectservices/Publisher");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

const get = async (req, res) => {
  try {
    const { publisherId } = getParams(req);
    const publisher = await getPublisherById(publisherId);
    if (!publisher) return NotFound(res);
    res.json(publisher);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  publisherId: req.params.publisherId
});

module.exports = get;
