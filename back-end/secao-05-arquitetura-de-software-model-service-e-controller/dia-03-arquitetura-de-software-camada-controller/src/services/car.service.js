const { carModel, driverModel } = require('../models');
const {
  validateNewCar,
  validateUpdateCar,
} = require('./validations/validationsInputValues');

const driverExists = async (driverId) => {
  const driver = await driverModel.findById(driverId);
  return driver || false;
};

const createCar = async ({ model, licensePlate, year, color, driverId }) => {
  const error = validateNewCar({ model, licensePlate, year, color, driverId });
  if (error) return { status: error.status, data: { message: error.message } };

  const driver = await driverExists(driverId);
  if (!driver) {
    return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };
  }

  const carId = await carModel.insert({
    model,
    licensePlate,
    year,
    color,
    driverId,
  });
  const newCar = { id: carId, model, licensePlate, year, color, driverId };
  return { status: 'SUCCESSFUL', data: newCar };
};

const findAll = async () => {
  const cars = await carModel.findAll();
  return { status: 'SUCCESSFUL', data: cars };
};

const updateCar = async (carId, dataToUpdate) => {
  const invalidValue = validateUpdateCar(dataToUpdate);
  if (invalidValue) {
    return { status: invalidValue.status, data: invalidValue.message };
  }

  const carExist = await carModel.findById(carId);
  if (!carExist) {
    return { status: 'NOT_FOUND', data: 'Car not found' };
  }

  if (dataToUpdate.driverId && carExist.driverId !== dataToUpdate.driverId) {
    return { status: 'INVALID_DATA', data: 'Cannot update car owner' };
  }

  await carModel.updateCar(carId, dataToUpdate);
  const updatedCar = await carModel.findById(carId);
  return { status: 'SUCCESSFUL', data: updatedCar };
};

const findById = async (carId) => {
  const car = await carModel.findById(carId);
  if (!car) {
    return { status: 'NOT_FOUND', data: 'Carro não encontrado' };
  }
  return { status: 'SUCCESSFUL', data: car };
};

module.exports = {
  createCar,
  findAll,
  updateCar,
  findById,
};
