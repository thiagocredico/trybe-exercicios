const express = require('express');
const { carService } = require('./services');

const app = express();

app.use(express.json());

app.post('/cars', async (req, res) => {
  const { model, licensePlate, year, color, driverId } = req.body;
  const serviceResponse = await carService.createCar({
    model,
    licensePlate,
    year,
    color,
    driverId,
  });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
});

app.get('/cars', async (_req, res) => {
  const serviceResponse = await carService.findAll();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
});

app.put('/cars/:carId', async (req, res) => {
  const { carId } = req.params;
  const { model, licensePlate, year, color, driverId } = req.body;
  const serviceResponse = await carService.updateCar(carId, {
    model,
    licensePlate,
    year,
    color,
    driverId,
  });
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json({ message: serviceResponse.data });
  }
  return res.status(200).json(serviceResponse.data);
});

app.get('/cars/:carId', async (req, res) => {
  const { carId } = req.params;
  const serviceResponse = await carService.findById(carId);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json({ message: serviceResponse.data });
  }
  return res.status(200).json(serviceResponse.data);
});

module.exports = app;
