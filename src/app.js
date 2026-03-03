// src/app.js

const express = require('express');
const cors = require('cors');

const stationRoutes = require('./routes/station.routes');
const contractRoutes = require('./routes/contract.routes');
const expenditureRoutes = require('./routes/expenditure.routes');
const trafficUnreservedRoutes = require('./routes/traffic_unreserved.routes');
const trafficReservedRoutes = require('./routes/traffic_reserved.routes');
const trafficTicketCheckingRoutes = require('./routes/traffic_ticket_checking.routes');
const trafficParcelRoutes = require('./routes/traffic_parcel.routes');
const trafficRetiringRoomRoutes = require('./routes/traffic_retiring_room.routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/stations', stationRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/expenditures', expenditureRoutes);
app.use('/api/traffic/unreserved', trafficUnreservedRoutes);
app.use('/api/traffic/reserved', trafficReservedRoutes);
app.use('/api/traffic/ticket-checking', trafficTicketCheckingRoutes);
app.use('/api/traffic/parcel', trafficParcelRoutes);
app.use('/api/traffic/retiring-room', trafficRetiringRoomRoutes);

module.exports = app;