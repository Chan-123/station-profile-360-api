const express = require('express');
const router = express.Router();
const stationController = require('../controllers/station.controller');

// CREATE
router.post('/', stationController.createStation);

// READ ALL
router.get('/', stationController.getStations);

// READ ONE
router.get('/:id', stationController.getStationById);

// UPDATE
router.put('/:id', stationController.updateStation);

// DELETE
router.delete('/:id', stationController.deleteStation);

module.exports = router;