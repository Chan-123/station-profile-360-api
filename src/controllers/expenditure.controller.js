const Expenditure = require('../models/expenditure.model');

// CREATE
exports.createExpenditure = async (req, res) => {
  try {
    const data = new Expenditure(req.body);
    const saved = await data.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
exports.getExpenditures = async (req, res) => {
  try {
    const list = await Expenditure.find();
    res.json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ONE
exports.getExpenditureById = async (req, res) => {
  try {
    const item = await Expenditure.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateExpenditure = async (req, res) => {
  try {
    const updated = await Expenditure.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteExpenditure = async (req, res) => {
  try {
    await Expenditure.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};