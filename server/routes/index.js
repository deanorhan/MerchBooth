
var router = require('express').Router();

router.use('/login', require('./login'));
router.use('/merch', require('./merch'));
router.use('/user', require('./users'));

module.exports = router;
