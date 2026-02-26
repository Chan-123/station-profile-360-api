const mongoose = require('mongoose');

const expenditureSchema = new mongoose.Schema({
  contractHead: { type: String, required: true },
  licenseeName: { type: String, required: true },
  term: String,
  fromDate: Date,
  toDate: Date,
  contractValue: Number,
  remarks: String
}, { timestamps: true });

module.exports = mongoose.model(
  'Expenditure',
  expenditureSchema,
  'expenditure_contracts' 
);