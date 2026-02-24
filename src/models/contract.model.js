const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  assetCode: String,
  stationCode: String,
  stationName: String,
  location: String,

  category: String, // PARKING | PA | NFR | CATERING
  type: String,     // 2 wheeler | PAUT | ACWH | etc

  licenseeName: String,

  startDate: Date,
  endDate: Date,
  annualFee: Number,

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contract', contractSchema);