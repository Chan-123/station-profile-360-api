const Contract = require('../models/contract.model');

exports.getContracts = async (req, res) => {
  const { category, stationCode } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (stationCode) filter.stationCode = stationCode;

  const contracts = await Contract.find(filter);
  res.json(contracts);
};

exports.createContract = async (req, res) => {
  const contract = new Contract(req.body);
  await contract.save();
  res.json({ message: 'Contract created successfully' });
};

exports.deleteContract = async (req, res) => {
  await Contract.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contract deleted' });
};