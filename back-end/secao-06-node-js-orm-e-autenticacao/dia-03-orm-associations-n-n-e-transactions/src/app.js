const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs.json');
const errorMiddleware = require('./middlewares/error');
const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

app.use(express.json());

app.use('/course', courseRoutes);
app.use('/student', studentRoutes);

app.use(errorMiddleware);

module.exports = app;