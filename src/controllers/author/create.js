const { createAuthor } = require('../../objectservices/Author');
const {
  BadRequest,
  InternalServerError,
  Success,
  Conflict,
} = require('../../helpers/ErrorHelper');

const isValidParams = (req) => {
  const { name, gender, socials } = req.body;
  if (!name) return false;
  if (gender && typeof gender !== 'number') return false;
  if (socials && typeof socials !== 'object') return false;
  return true;
};

const create = async (req, res) => {
  if (!isValidParams(req)) return BadRequest(res);
  const {
    name, originName, gender, socials, description,
  } = req.body;
  try {
    const author = await createAuthor({
      name,
      originName,
      gender,
      socials,
      description,
    });
    if (!author) return Conflict(res);
    return Success(res, author);
  } catch (err) {
    return InternalServerError(res);
  }
};
module.exports = create;
