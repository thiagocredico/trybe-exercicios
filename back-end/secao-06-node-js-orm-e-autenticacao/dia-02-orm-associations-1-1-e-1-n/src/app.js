const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const { studentRoute, courseRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use('/course', courseRoute);
app.use('/students', studentRoute);

app.use(errorMiddleware);

module.exports = app;