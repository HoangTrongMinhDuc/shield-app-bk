const BodyParser = require('body-parser');
const CheckToken = require('./CheckToken');
const AccessFilter = require('./AccessFilter');

module.exports = {
  JsonWithAuthMw: [BodyParser.json(), CheckToken],
  JsonMw: [BodyParser.json()],
  AuthMw: [CheckToken],
  JsonWithAuthorization: (pers) => [
    BodyParser.json(),
    CheckToken,
    AccessFilter(pers),
  ],
};
