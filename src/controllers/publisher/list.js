const { listPublisher } = require("../../objectservices/Publisher");
const { InternalServerError } = require("../../helpers/ErrorHelper");

const list = async (req, res) => {
  try {
    const publishers = await listPublisher();
    res.json(publishers);
  } catch (err) {
    InternalServerError(res);
  }
};

module.exports = list;
