const TrafficRetiringRoom = require('../models/traffic_retiring_room.model');

exports.create = async (req, res) => {
  const data = await TrafficRetiringRoom.create(req.body);
  res.status(201).json(data);
};

exports.getAll = async (req, res) => {
  const data = await TrafficRetiringRoom.find();
  res.json(data);
};

exports.update = async (req, res) => {
  const updated = await TrafficRetiringRoom.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.delete = async (req, res) => {
  await TrafficRetiringRoom.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};