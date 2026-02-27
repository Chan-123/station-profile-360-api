const mongoose = require('mongoose');

const retiringRoomSchema = new mongoose.Schema({
  mannedBy: String,
  rooms: [String],
  yearlyEarnings: [
    {
      year: String,
      totalEarnings: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('TrafficRetiringRoom', retiringRoomSchema);