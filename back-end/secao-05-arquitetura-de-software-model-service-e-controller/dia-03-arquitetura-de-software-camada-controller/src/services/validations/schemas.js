const Joi = require('joi');

const addCarSchema = Joi.object({
  model: Joi.string().min(3).required(),
  color: Joi.string().min(2).required(),
  licensePlate: Joi.string().length(7).required(),
  year: Joi.number().integer().required(),
  driverId: Joi.number().required(),
});

const updateCarSchema = Joi.object({
  model: Joi.string().min(3),
  color: Joi.string().min(2),
  licensePlate: Joi.string().length(7),
  year: Joi.number().integer().max(new Date().getFullYear()),
  driverId: Joi.number().greater(0),
});

module.exports = { addCarSchema, updateCarSchema };
