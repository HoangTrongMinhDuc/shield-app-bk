const { createPublisher } = require("../../objectservices/Publisher");
const {
  BadRequest,
  InternalServerError
} = require("../../helpers/ErrorHelper");
const { isNull, isString } = require("lodash");

const create = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const publisher = await createPublisher(getParams(req));
    if (!publisher) return InternalServerError(res);
    res.json(publisher);
  } catch (err) {
    InternalServerError(res);
  }
};

const getParams = req => ({
  name: req.body.name,
  description: req.body.description || null
});

const isValidParams = req => {
  const { name, description } = getParams(req);
  return isString(name) && (isNull(description) || isString(description));
};

module.exports = create;
