const { getUserById } = require('../../objectservices/User');
const { InternalServerError, NotFound, Success } = require('../../helpers/ErrorHelper');

const get = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await getUserById(id);
    if (!user) return NotFound(res);
    const {
      _id,
      username,
      displayName,
      email,
      upload_preset: uploadPreset,
      access,
    } = user.toJSON();
    return Success(res, {
      _id,
      username,
      displayName,
      email,
      uploadPreset,
      access,
    });
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = get;
