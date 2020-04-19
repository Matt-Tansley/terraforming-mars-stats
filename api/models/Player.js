const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  Name: String,
  Corps: {
    Selected: String,
    Discarded: String,
  },
  Preludes: {
    Selected: [String],
    Discarded: [String],
  },
  MilestonesWon: [String],
  AwardsWon: [String],
  AwardsSecond: [String],
  Score: Number,
});

module.exports = PlayerSchema;
