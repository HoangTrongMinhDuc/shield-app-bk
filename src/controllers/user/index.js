const router = require('express').Router();
const { JsonWithAuthorization } = require('../../middleware/MidWare');

router.post(
  '/',
  JsonWithAuthorization(['system.account.create']),
  require('./create'),
);

module.exports = router;
