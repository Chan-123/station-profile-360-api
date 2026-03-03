const mongoose = require('mongoose');

const trafficRetiringRoomSchema = new mongoose.Schema({
  mannedBy: String,
  rooms: [
    {
      roomType: String,
      rate: Number
    }
  ],
  yearlyEarnings: [
    {
      year: String,
      totalEarnings: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model(
  'TrafficRetiringRoom',
  trafficRetiringRoomSchema
);