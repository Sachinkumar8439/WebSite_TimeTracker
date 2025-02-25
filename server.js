const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/time-tracker", { useNewUrlParser: true, useUnifiedTopology: true });

const logSchema = new mongoose.Schema({
  url: String,
  date: String,
  startTime: String,
  timeSpent: Number,
});

const Log = mongoose.model("Log", logSchema);

app.post("/api/time-log", async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.status(201).send("Log saved.");
  } catch (error) {
    res.status(500).send("Error saving log.");
  }
});

app.get("/api/time-log", async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    res.status(500).send("Error retrieving logs.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
