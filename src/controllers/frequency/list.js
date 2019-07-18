const { listFrequency } = require("../../objectservices/Frequency");
const { InternalServerError } = require("../../helpers/ErrorHelper");

const list = async (req, res) => {
  try {
    const frequencies = await listFrequency();
    res.json(frequencies);
  } catch (err) {
    InternalServerError(res);
  }
};

module.exports = list;
