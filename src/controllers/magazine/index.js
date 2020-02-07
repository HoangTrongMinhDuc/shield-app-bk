const router = require('express').Router();
const { JsonWithAuthorization } = require('../../middleware/MidWare');

router.post(
  '/',
  JsonWithAuthorization(['magazine.create']),
  require('./create'),
);

router.put(
  '/:magazineId',
  JsonWithAuthorization(['magazine.update']),
  require('./update'),
);

router.get('/', require('./list'));

router.get('/:magazineId', require('./get'));

router.delete(
  '/:magazineId',
  JsonWithAuthorization(['magazine.delete']),
  require('./remove'),
);

module.exports = router;
