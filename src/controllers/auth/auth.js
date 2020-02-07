const jwt = require('jsonwebtoken');
const config = require('../../config');
const { getHashString } = require('../../helpers/HashHelper');
const AccountService = require('../../objectservices/User');
const {
  BadRequest,
  InternalServerError,
  Success,
} = require('../../helpers/ErrorHelper');

const WrongAccountMsg = 'Wrong email or password';

// eslint-disable-next-line max-len
const isMatchPassword = (user, password) => user.hash_password === getHashString(password, user.salt_password);

const createToken = (user, expireTime = '24h') => jwt.sign({ ...user }, config.SECRET_WORD, {
  expiresIn: expireTime,
});

const responseUserSession = (res, user) => {
  const userInfo = user.toObject();
  delete userInfo.hash_password;
  delete userInfo.salt_password;
  return Success(res, {
    token: createToken({ email: user.email, id: user._id }),
    user: userInfo,
  });
};
const auth = async (req, res) => {
  let { email } = req.body;
  const { password } = req.body;
  if (!email || !password) return BadRequest(res);
  try {
    email = email.trim().toLowerCase();
    const account = await AccountService.getUserByEmail(email);
    if (account && isMatchPassword(account, password)) {
      return responseUserSession(res, account);
    }
    return BadRequest(res, WrongAccountMsg);
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = auth;
