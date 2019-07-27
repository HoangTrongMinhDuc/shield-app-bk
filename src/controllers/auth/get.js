const { getUserById } = require("../../objectservices/User");
const { InternalServerError, NotFound } = require("../../helpers/ErrorHelper");

//Define controller here

const get = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await getUserById(id);
    if (!user) return NotFound(res);
    const { _id, username, displayName, email, join_date } = user;
    res.json({ _id, username, displayName, email, join_date });
  } catch (err) {
    InternalServerError(res);
  }
};

module.exports = get;
