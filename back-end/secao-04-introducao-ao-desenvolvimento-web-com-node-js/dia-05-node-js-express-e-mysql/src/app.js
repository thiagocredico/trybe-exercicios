const express = require('express');
const simpsonsRoute = require('./routes/simpsonsRoute');

const app = express();

app.use(express.json());

app.use('/simpsons', simpsonsRoute);

module.exports = app;
