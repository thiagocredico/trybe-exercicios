const express = require('express');
const { passengerModel } = require('./models');

const app = express();

app.use(express.json());

app.get('/passengers', async (_req, res) => {
  const passengers = await passengerModel.findAll();
  return res.status(200).json(passengers);
});

app.get('/passengers/:passengerId', async (req, res) => {
  const { passengerId } = req.params;
  const passenger = await passengerModel.findById(passengerId);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
  return res.status(200).json(passenger);
});

module.exports = app;