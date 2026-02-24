const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  stationName: String,
  stationCode: String,
  category: String,
  platforms: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Station', stationSchema);