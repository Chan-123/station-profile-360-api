const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
  avgLoadingPerDay: Number,
  avgEarningsPerDay: Number,
  yearlyData: [
    {
      year: String,
      totalLoading: Number,
      totalEarnings: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('TrafficParcel', parcelSchema);