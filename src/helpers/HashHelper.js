const crypto = require('crypto');

const DEFAULT_LENGTH = 24;

const getHashString = (sourceString, saltString) => crypto
  .createHash('sha256')
  .update(sourceString + saltString)
  .digest('hex')
  .toString();

const getRandomString = (length = DEFAULT_LENGTH) => crypto.randomBytes(length).toString('hex');

module.exports = { getHashString, getRandomString };
