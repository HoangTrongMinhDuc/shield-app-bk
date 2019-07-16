const CheckToken = require("./CheckToken");
const BodyParser = require("body-parser");
module.exports = {
  JsonWithAuthMw: [BodyParser.json(), CheckToken],
  JsonMw: [BodyParser.json()],
  AuthMw: [CheckToken]
};
