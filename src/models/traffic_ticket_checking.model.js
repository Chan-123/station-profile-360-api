const mongoose = require('mongoose');

const ticketCheckingSchema = new mongoose.Schema({
  staffWorking: Number,
  avgCasesPerDay: Number,
  avgEarningsPerDay: Number,
  yearlyData: [
    {
      year: String,
      totalCases: Number,
      totalEarnings: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('TrafficTicketChecking', ticketCheckingSchema);