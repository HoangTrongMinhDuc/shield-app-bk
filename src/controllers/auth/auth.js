const jwt = require("jsonwebtoken");
const config = require("../../config");
const { getHashString } = require("../../helpers/HashHelper");
const AccountService = require("../../objectservices/User");
const ErrorHelper = require("../../helpers/ErrorHelper");

const WrongAccountMsg = "Wrong email or password";

//Define controller here

const auth = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) return ErrorHelper.BadRequest(res);
  try {
    email = email.trim().toLowerCase();
    const account = await AccountService.getUserByEmail(email);
    if (account && isMatchPassword(account, password)) {
      responseUserSession(res, account);
    } else {
      ErrorHelper.BadRequest(res, WrongAccountMsg);
    }
  } catch (err) {
    ErrorHelper.InternalServerError(res);
  }
};

//Support function

const createToken = (email, expireTime = "24h") => {
  return jwt.sign({ email }, config.SECRECT_WORD, {
    expiresIn: expireTime
  });
};

const isMatchPassword = (user, password) => {
  const hashPassword = getHashString(password, user.salt_password);
  return hashPassword === user.hash_password;
};

const responseUserSession = (res, user) => {
  let userInfo = user.toObject();
  delete userInfo.hash_password;
  delete userInfo.salt_password;
  res.json({ token: createToken(user.email), user: userInfo });
};

module.exports = auth;
