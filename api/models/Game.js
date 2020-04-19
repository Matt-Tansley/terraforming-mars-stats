const mongoose = require("mongoose");
const PlayerSchema = require("./Player");

const GameSchema = mongoose.Schema({
  Board: String,
  Generations: Number,
  Winner: String,
  Colonies: [String],
  Milestones: [String],
  Awards: [String],
  MilstonesClaimed: [String],
  AwardsSponsored: [String],
  Players: [PlayerSchema],
});

module.exports = mongoose.model("Game", GameSchema);
