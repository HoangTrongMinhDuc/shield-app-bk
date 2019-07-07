require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  MODE: process.env.NODE_ENV,
  SECRECT_WORD: process.env.NODE_ENV
};
