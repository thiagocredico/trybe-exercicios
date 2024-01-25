const express = require('express');

const { passengerRoutes, driverRoutes } = require('./routes');

const app = express();

app.use(express.json());
// bodyParser

app.use('/passengers', passengerRoutes);
app.use('/drivers', driverRoutes);

module.exports = app;
