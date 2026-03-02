const TrafficTicketChecking = require('../models/traffic_ticket_checking.model');

exports.create = async (req, res) => {
  const data = await TrafficTicketChecking.create(req.body);
  res.status(201).json(data);
};

exports.getAll = async (req, res) => {
  const data = await TrafficTicketChecking.find();
  res.json(data);
};

exports.update = async (req, res) => {
  const updated = await TrafficTicketChecking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.delete = async (req, res) => {
  await TrafficTicketChecking.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};