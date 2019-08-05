const { createAuthor } = require("../../objectservices/Author");
const {
  BadRequest,
  InternalServerError
} = require("../../helpers/ErrorHelper");

const create = async (req, res) => {
  if (!isValidParams(req)) return BadRequest(res);
  const { name, originName, gender, socials, description } = req.body;
  try {
    const author = await createAuthor({
      name,
      originName,
      gender,
      socials,
      description
    });
    res.json(author);
  } catch (err) {
    InternalServerError(res);
  }
};

const isValidParams = req => {
  const { name, gender, socials } = req.body;
  if (!name) return false;
  if (gender && typeof gender !== "number") return false;
  if (socials && typeof socials !== "object") return false;
  return true;
};

module.exports = create;
