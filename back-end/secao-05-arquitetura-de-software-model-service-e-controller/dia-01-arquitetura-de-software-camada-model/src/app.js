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
  if (!passenger) {
    return res.status(404).json({ message: 'Passenger not found' });
  }
  return res.status(200).json(passenger);
});

app.post('/passengers', async (req, res) => {
  const { name, email, phone } = req.body;
  const passengerId = await passengerModel.insert({ name, email, phone });
  const newPassenger = {
    id: passengerId,
    name,
    email,
    phone,
  };
  return res.status(201).json(newPassenger);
});

app.put('/passengers/:passengerId', async (req, res) => {
  const { name, email, phone } = req.body;
  const { passengerId } = req.params;
  await passengerModel.update(passengerId, { name, email, phone });
  const updatedPassenger = await passengerModel.findById(passengerId);
  return res.status(200).json(updatedPassenger);
});

module.exports = app;
