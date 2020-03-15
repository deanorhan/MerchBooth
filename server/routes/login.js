const router = require('express').Router();
const User = require('../models/user');

router.route('/').post((req, res) => {
  const email = req.body.email;

  User.findOne({ email: email }, (err, user) => {
    if (err || !user) {
      res.status(400).json('Error can\'t login ' + err);
      return;
    }

    const password = req.body.password;

    user.comparePassword(password, function (err, isMatch) {
      if (isMatch) {
        res.status(200).json({ email: user.email });
      } else {
        res.status(400).json('Error can\'t login' + err);
      }
    });
  });
});

module.exports = router;
