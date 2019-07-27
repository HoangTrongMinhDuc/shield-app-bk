require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  MODE: process.env.NODE_ENV,
  SECRET_WORD: process.env.SECRET_WORD,
  DEF_PAGE_SIZE: 20,
  ENABLE_URL: process.env.ENABLE_URL
};
