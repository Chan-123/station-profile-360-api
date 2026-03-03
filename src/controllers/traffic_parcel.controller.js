const TrafficParcel = require('../models/traffic_parcel.model');

exports.create = async (req, res) => {
  const data = await TrafficParcel.create(req.body);
  res.status(201).json(data);
};

exports.getAll = async (req, res) => {
  const data = await TrafficParcel.find();
  res.json(data);
};

exports.update = async (req, res) => {
  const updated = await TrafficParcel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.delete = async (req, res) => {
  await TrafficParcel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};