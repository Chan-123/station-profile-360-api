const mongoose = require('mongoose');

const reservedSchema = new mongoose.Schema({
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

module.exports = mongoose.model('TrafficReserved', reservedSchema);