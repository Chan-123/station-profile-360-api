const TrafficReserved = require('../models/traffic_reserved.model');

exports.create = async (req, res) => {
  const data = await TrafficReserved.create(req.body);
  res.status(201).json(data);
};

exports.getAll = async (req, res) => {
  const data = await TrafficReserved.find();
  res.json(data);
};

exports.update = async (req, res) => {
  const updated = await TrafficReserved.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.delete = async (req, res) => {
  await TrafficReserved.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};