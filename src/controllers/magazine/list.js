const { listMagazine } = require('../../objectservices/Magazine');
const { InternalServerError, Success } = require('../../helpers/ErrorHelper');

const list = async (req, res) => {
  try {
    const magazines = await listMagazine();
    return Success(res, magazines);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = list;
