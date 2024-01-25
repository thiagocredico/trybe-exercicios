const schema = require('./validations/validationsInputValues');
const { passengerModel, travelModel, driverModel } = require('../models');

const isTravelAssigned = (currentDriverId, newDriverId) =>
  currentDriverId && Number(currentDriverId) !== Number(newDriverId);

const getNextTravelStatus = (currentStatus) => {
  const INCREMENT_STATUS = 1;
  return currentStatus + INCREMENT_STATUS;
};

const requestTravel = async (travelDataObject) => {
  const error = schema.validateRequestTravel(travelDataObject);
  if (error) return { status: error.status, data: { message: error.message } };

  const passenger = await passengerModel.findById(travelDataObject.passengerId);
  if (!passenger) return { status: 'NOT_FOUND', data: { message: 'Passenger not found' } };

  const newTravelId = await travelModel.insert(travelDataObject);
  const newTravel = await travelModel.findById(newTravelId);
  return { status: 'CREATED', data: newTravel };
};

const getOpenTravels = async () => {
  const WAITING_DRIVER = 1;
  let data = await travelModel.findByStatus(WAITING_DRIVER);
  if (!data || data.length === 0) data = { message: 'There are no open trips' };

  return { status: 'SUCCESSFUL', data };
};

const updateTravelStatus = async (driverId, travelId) => {
  const driver = await driverModel.findById(driverId);
  if (!driver) {
    return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };
  }

  const travel = await travelModel.findById(travelId);
  if (!travel) {
    return { status: 'NOT_FOUND', data: { message: 'Travel not found' } };
  }

  if (isTravelAssigned(travel.driverId, driverId)) {
    return { status: 'CONFLICT', data: { message: 'Travel already assigned' } };
  }

  const nextTravelStatusId = getNextTravelStatus(travel.travelStatusId);
  if (nextTravelStatusId > 4) {
    return { status: 'CONFLICT', data: { message: 'Travel already finished' } };
  }
  await travelModel.update(travelId, { driverId, travelStatusId: nextTravelStatusId });
  const updatedTravel = await travelModel.findById(travelId);
  return { status: 'SUCCESSFUL', data: updatedTravel };
};

module.exports = {
  requestTravel,
  getOpenTravels,
  updateTravelStatus,
};
