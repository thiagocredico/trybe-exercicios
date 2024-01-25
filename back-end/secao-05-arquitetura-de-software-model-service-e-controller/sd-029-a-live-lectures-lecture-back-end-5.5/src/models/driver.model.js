const connection = require('./connection');

const findById = async (driverId) => {
  const [[driver]] = await connection.execute('SELECT * FROM drivers WHERE id = ?', [driverId]);
  return driver;
};

module.exports = {
  findById,
};