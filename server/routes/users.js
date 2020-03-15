const router = require('express').Router();
const User = require('../models/user');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    email,
    password
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  const forEdit = Boolean(req.query.full);
  console.log(req.query);
  console.log(forEdit);

  User.findById(req.params.id)
    .then(user => {
      if (forEdit) {
        res.json(user);
      } else {
        res.json({ email: user.email, createdAt: user.createdAt });
      }
    })
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;
