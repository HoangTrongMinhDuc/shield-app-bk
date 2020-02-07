const { updateAuthor } = require('../../objectservices/Author');
const {
  InternalServerError,
  NotFound,
  BadRequest,
  Success,
} = require('../../helpers/ErrorHelper');

const getParams = (req) => ({ ...req.params, ...req.body });

const isValidParams = (req) => {
  const { name, gender, socials } = getParams(req);
  if (!name) return false;
  if (gender && typeof gender !== 'number') return false;
  if (socials && typeof socials !== 'object') return false;
  return true;
};

const update = async (req, res) => {
  try {
    if (!isValidParams(req)) return BadRequest(res);
    const updatedAuthor = await updateAuthor(getParams(req));
    if (!updatedAuthor) return NotFound(res);
    return Success(res, updatedAuthor);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = update;
