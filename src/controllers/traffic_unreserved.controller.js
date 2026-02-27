const TrafficUnreserved = require('../models/traffic_unreserved.model');

exports.create = async (req, res) => {
  try {
    const data = await TrafficUnreserved.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = async (req, res) => {
  const data = await TrafficUnreserved.find();
  res.json(data);
};

exports.update = async (req, res) => {
  const updated = await TrafficUnreserved.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.delete = async (req, res) => {
  await TrafficUnreserved.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};