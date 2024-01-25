const express = require('express');

const { travelService } = require('./services');

const app = express();

app.use(express.json());

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const travelData = { passengerId, ...req.body };

  const serviceResponse = await travelService.requestTravel(travelData);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json(serviceResponse.data);
  }

  return res.status(201).json(serviceResponse.data);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const serviceResponse = await travelService.getOpenTravels();
  return res.status(200).json(serviceResponse.data);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  
  const updatedTravel = await travelService.updateTravelStatus(driverId, travelId);

  if (updatedTravel.status !== 'SUCCESSFUL') {
    return res.status(400).json(updatedTravel.data);
  }

  res.status(200).json(updatedTravel);
});

module.exports = app;
