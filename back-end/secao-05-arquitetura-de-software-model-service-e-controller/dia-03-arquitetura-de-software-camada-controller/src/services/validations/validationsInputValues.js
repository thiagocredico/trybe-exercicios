const { addCarSchema, updateCarSchema } = require('./schemas');

const validateNewCar = ({ model, licensePlate, year, color, driverId }) => {
  const { error } = addCarSchema.validate({
    model,
    licensePlate,
    year,
    color,
    driverId,
  });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const validateUpdateCar = (dataCar) => {
  const { error } = updateCarSchema.validate(dataCar);
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateNewCar,
  validateUpdateCar,
};
