const camelize = require('camelize');

const connection = require('./connection');
const {
  getFormattedColumnsNames,
  getFormattedPlaceholders,
  getFormattedUpdateColumns,
} = require('../utils/generateFormattedQuery');

const findAll = async () => {
  const [passengers] = await connection.execute('SELECT * FROM passengers');
  return camelize(passengers);
};
// camelize faz: nome_cliente => nomeCliente

const findById = async (passengerId) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [passengerId],
  );
  return camelize(passenger);
};

const insert = async (passenger) => {
  // INSERT INTO nome_tabela (name, email) VALUES ('z', '123')
  // {name, email, phone} (name, email, phone) (?, ?, ?)
  // {name, email} name, email // ?, ?
  const columns = getFormattedColumnsNames(passenger);
  const placeholders = getFormattedPlaceholders(passenger);

  const query = `INSERT INTO passengers (${columns}) VALUES (${placeholders});`;

  const [{ insertId }] = await connection.execute(query, [
    ...Object.values(passenger),
  ]);
  return insertId;
};

const update = async (passengerId, dataToUpdate) => {
  // UPDATE nome_tabela SET name='z', email='z@z.com' WHERE id=1
  // snakezie faz: nomeCliente => nome_cliente
  const formattedColumns = getFormattedUpdateColumns(dataToUpdate);

  const query = `UPDATE passengers SET ${formattedColumns} WHERE id = ?`;

  return connection.execute(query, [
    ...Object.values(dataToUpdate),
    passengerId,
  ]);
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
};
