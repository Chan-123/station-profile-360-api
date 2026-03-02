const mongoose = require('mongoose');

const trafficReservedSchema = new mongoose.Schema({
  avgTransactionsPerDay: Number,
  avgEarningsPerDay: Number,
  yearlyData: [
    {
      year: String,
      totalTransactions: Number,
      totalEarnings: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('TrafficReserved', trafficReservedSchema);