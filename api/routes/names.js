const express = require("express");
const router = express.Router();
const Name = require("../models/Name");

// Get back all names
router.get("/", async (req, res) => {
  try {
    const names = await Name.find();
    res.json(names);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submits a name
router.post("/", async (req, res) => {
  const name = new Name({
    name: req.body.name,
  });

  try {
    const savedName = await name.save();
    res.json(savedName);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
