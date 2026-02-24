// src/app.js

const express = require('express');
const cors = require('cors');

const stationRoutes = require('./routes/station.routes');
const contractRoutes = require('./routes/contract.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/stations', stationRoutes);
app.use('/api/contracts', contractRoutes);

module.exports = app;