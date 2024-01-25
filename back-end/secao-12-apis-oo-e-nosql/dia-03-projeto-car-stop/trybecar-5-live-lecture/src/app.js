const express = require('express');
const { passengerRoutes, driverRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use('/passengers', passengerRoutes);
app.use('/drivers', driverRoutes);

module.exports = app;
