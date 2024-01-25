const camelize = require('camelize');
const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
  getFormattedUpdateColumns,
} = require('../utils/generateFormattedQuery');

const insert = async (car) => {
  const columns = getFormattedColumnNames(car);
  const placeholders = getFormattedPlaceholders(car);
  const query = `INSERT INTO cars (${columns}) VALUES (${placeholders})`;

  const [{ insertId }] = await connection.execute(query, [
    ...Object.values(car),
  ]);

  return insertId;
};

const findAll = async () => {
  const [cars] = await connection.execute('SELECT * FROM cars');

  return camelize(cars);
};

const findById = async (carId) => {
  const [[car]] = await connection.execute('SELECT * FROM cars WHERE id = ?', [
    carId,
  ]);

  return camelize(car);
};

const updateCar = async (carId, dataToUpdate) => {
  const formattedColumns = getFormattedUpdateColumns(dataToUpdate);
  const query = `UPDATE cars SET ${formattedColumns} WHERE id = ?`;
  return connection.execute(query, [...Object.values(dataToUpdate), carId]);
};

module.exports = {
  insert,
  findAll,
  findById,
  updateCar,
};
