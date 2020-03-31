const router = require("express").Router();
const Merch = require("../models/merch");

router.route("/").get((req, res) => {
  Merch.find()
    .then(merch => res.json(merch))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const newMerch = new Merch({
    title: req.body.title,
    price: req.body.price
  });

  newMerch.save()
    .then(() => res.json("Merch added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Merch.findById(req.params.id)
    .then(merch => {
      res.json(merch);
    })
    .catch(err => res.status(404).json("Error: " + err));

  res.json("Nothing here");
});

module.exports = router;
