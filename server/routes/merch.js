const router = require('express').Router();
const Merch = require('../models/merch');

router.route('/').get((req, res) => {
  Merch.find()
    .then(merch => res.json(merch))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const newTitle = req.body.title;
  console.log(req.body);

  const newMerch = new Merch({
    title: newTitle
  });

  newMerch.save()
    .then(() => res.json('Merch added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
