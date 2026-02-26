const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  stationName: {
    type: String,
    required: true
  },
  stationCode: {
    type: String,
    required: true
  },
  category: String,
  platforms: Number,
  avgFootfall: Number,
  avgRevenuePerDay: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Station', stationSchema);