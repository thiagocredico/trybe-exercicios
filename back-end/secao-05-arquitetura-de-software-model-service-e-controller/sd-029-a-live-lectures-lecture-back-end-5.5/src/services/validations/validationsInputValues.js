const { addRequestTravelSchema } = require('./schemas');

const validateRequestTravel = (keysObjectToValidate) => {
  const { error } = addRequestTravelSchema.validate(keysObjectToValidate);
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateRequestTravel,
};
