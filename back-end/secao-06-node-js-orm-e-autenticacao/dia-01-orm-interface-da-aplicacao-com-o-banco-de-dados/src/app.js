const express = require('express');
const { Course } = require('./models');

const app = express();

app.use(express.json());

app.post('/courses', async (req, res) => {
  const { name, description, active, duration } = req.body;
  const creationDate = new Date();
  await Course.create({ name, description, active, duration, creationDate });

  return res.status(201).json(datas);
});

module.exports = app;