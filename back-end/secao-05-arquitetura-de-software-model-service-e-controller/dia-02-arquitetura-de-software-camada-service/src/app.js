const express = require('express');

const { travelModel, passengerModel } = require('./models');

const app = express();

app.use(express.json());

const passengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  return passenger || false;
};

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const passenger = await passengerExists(passengerId);
  if (!passenger) {
    return res.status(404).json({ message: 'Passenger not found' });
  }

  const travelId = await travelModel.insert({
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  });
  const newTravel = await travelModel.findById(travelId);

  return res.status(201).json(newTravel);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const WAITING_DRIVER = 1;
  const openTravelsFromDB = await travelModel.findByStatus(WAITING_DRIVER);
  res.status(200).json(openTravelsFromDB);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  const INCREMENT_STATUS = 1;

  const { travelStatusId } = await travelModel.findById(travelId);

  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  const result = await travelModel.update(travelId, {
    driverId,
    travelStatusId: nextTravelStatusId,
  });

  const updatedTravel = await travelModel.findById(travelId);

  res.status(200).json(updatedTravel);
});

module.exports = app;
