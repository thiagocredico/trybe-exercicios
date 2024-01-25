const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(apiRoutes);

module.exports = app;
