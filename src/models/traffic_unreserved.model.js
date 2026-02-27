const mongoose = require('mongoose');

const trafficUnreservedSchema = new mongoose.Schema({
  avgTicketsPerDay: Number,
  avgPassengersPerDay: Number,
  avgEarningsPerDay: Number,
  yearlyData: [
    {
      year: String,
      totalTickets: Number,
      totalPassengers: Number,
      totalEarnings: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('TrafficUnreserved', trafficUnreservedSchema);