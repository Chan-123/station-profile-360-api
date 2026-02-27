const mongoose = require('mongoose');

const terminalContributionSchema = new mongoose.Schema({
  year: String,
  data: [
    {
      terminalType: String,
      tickets: Number,
      percentage: Number
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('TerminalContribution', terminalContributionSchema);