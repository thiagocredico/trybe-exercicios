const schema = require('./validations/validationsInputValues');
const { passengerModel, travelModel, driverModel } = require('../models');

const requestTravel = async (travelDataObject) => {
  const error = schema.validateRequestTravel(travelDataObject);
  if (error) return { status: error.status, data: { message: error.message } };

  const passenger = await passengerModel.findById(travelDataObject.passengerId);
  if (!passenger) return { status: 'NOT_FOUND', data: { message: 'Passenger not found' } };

  const newTravelId = await travelModel.insert(travelDataObject);
  const newTravel = await travelModel.findById(newTravelId);
  return { status: 'SUCCESSFUL', data: newTravel };
};

const getOpenTravels = async () => {
  const WAITING_DRIVER = 1;
  let data = await travelModel.findByStatus(WAITING_DRIVER);
  if (!data || data.length === 0) data = { message: 'There are no open trips' };
  
  return { status: 'SUCCESSFUL', data };
};

const isTravelAssigned = (currentDriverId, newDriverId) => 
  currentDriverId && currentDriverId !== newDriverId;

const getNextTravelStatus = (CurrentStatus) => {
  const INCREMENT_STATUS = 1;
  return CurrentStatus + INCREMENT_STATUS;
};

const updateTravelStatus = async (driverId, travelId) => {
  // Validar se motorista existe
  const driver = await driverModel.findById(driverId);
  if (!driver) {
    return { status: 'NOT_FOUND', data: { message: 'Driver not found' } }; 
  }

  // validar se a viagem existe
  const travel = await travelModel.findById(travelId);
  if (!travel) {
    return { status: 'NOT_FOUND', data: { message: 'Travel not found' } }; 
  }

  // motorista estar disponivel

  // if (travel.driverId !== null && travel.driverId !== driverId) {
  if (isTravelAssigned(travel.driverId, driverId)) {
    return { status: 'CONFLICT', data: { message: 'Travel already assigned' } }; 
  }

  // validar se o status pode ser incrementado
  const nextTravelStatusId = getNextTravelStatus(travel.travelStatusId);

  if (nextTravelStatusId > 4) {
    return { status: 'CONFLICT', data: { message: 'Travel already finished' } }; 
  }

  // atualização
  await travelModel.update(travelId, { driverId, travelStatusId: nextTravelStatusId });
  const updatedTravel = await travelModel.findById(travelId);

  return { status: 'SUCCESSFUL', data: updatedTravel };
};

module.exports = {
  requestTravel,
  getOpenTravels,
  updateTravelStatus,
};
