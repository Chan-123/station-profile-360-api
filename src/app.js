// src/app.js

const express = require('express');
const cors = require('cors');

const stationRoutes = require('./routes/station.routes');
const contractRoutes = require('./routes/contract.routes');
const expenditureRoutes = require('./routes/expenditure.routes');
const trafficUnreservedRoutes = require('./routes/traffic_unreserved.routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/stations', stationRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/expenditures', expenditureRoutes);
app.use('/api/traffic/unreserved', trafficUnreservedRoutes);

module.exports = app;