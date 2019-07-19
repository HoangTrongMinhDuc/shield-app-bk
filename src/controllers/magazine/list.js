const { listMagazine } = require("../../objectservices/Magazine");
const { InternalServerError } = require("../../helpers/ErrorHelper");

const list = async (req, res) => {
  try {
    const magazines = await listMagazine();
    res.json(magazines);
  } catch (err) {
    InternalServerError(res);
  }
};

module.exports = list;
