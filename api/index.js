const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(cors());
// Below two lines for body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const namesRoute = require("./routes/names");
app.use("/names", namesRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Terraforming Mars Stats");
});

// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

// How do we start listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
