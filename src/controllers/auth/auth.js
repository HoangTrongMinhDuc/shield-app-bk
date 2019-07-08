const jwt = require("jsonwebtoken");
const config = require("../../config");
const { getHashString } = require("../../helpers/HashHelper");
const AccountService = require("../../services/AccountService");

const WrongAccountMsg = "Wrong email or password";

//Define controller here
/**
 *
 * @api {post} /api/auth/ Authorize an account
 * @apiName {auth}
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email Email of the account
 * @apiParam {String} password Password of the account
 *
 * @apiSuccess {String} token Access token contain the session of account
 * @apiSuccess {Object} user User info
 * @apiSuccessExample Success request
 * {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTU2MjIxNTMwNCwiZXhwIjoxNTYyMzAxNzA0fQ.TnYsNljBJFVHE_1AMy-OwCm5kDR3dEZM3dTx7z0YGz4","user":{"_id":"5d19c64dd5932017aa395f25","email":"admin@email.com","status":true,"join_date":"2019-07-01T08:37:33.109Z"}}
 *
 * @apiError (Error) {String} message Message Error
 * @apiErrorExample Wrong email or password:
 * {"message": "Wrong email or password"}
 * 
 * @apierrorExample Internal Error:
 * { "message": "Server internal error"}
 */

const auth = async (req, res) => {
  var { email, password } = req.body;
  if (email && password) {
    email = email.trim().toLowerCase();
    try {
      let account = await AccountService.getAccountByEmail(email);
      if (account && isMatchPassword(account, password)) {
        responseUserSession(res, account);
      } else {
        ErrorHelper.BadRequest(res, WrongAccountMsg);
      }
    } catch (err) {
      ErrorHelper.InternalServerError(res);
    }
  } else {
    ErrorHelper.BadRequest(res);
  }
};

//Support function

const createToken = (email, expireTime = "24h") => {
  return jwt.sign({ email }, config.SECRECT_WORD, {
    expiresIn: expireTime
  });
};

const isMatchPassword = (user, password) => {
  let hashPassword = getHashString(password, user.salt_password);
  if (hashPassword === user.hash_password) {
    return true;
  }
  return false;
};

const responseUserSession = (res, user) => {
  let userInfo = JSON.parse(JSON.stringify(user));
  delete userInfo.hash_password;
  delete userInfo.salt_password;
  res.json({ token: createToken(user.email), user: userInfo });
};

module.exports = auth;
