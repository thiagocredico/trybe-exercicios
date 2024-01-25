const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM simpsons_db.characters;',
  );
  return result;
};

const createSimpson = async (simpson) => {
  const [result] = await connection.execute(
    'INSERT INTO characters (name) VALUES (?);',
    [simpson.name],
  );
  return { id: result.insertId, ...simpson };
};

const updateSimpson = async (id, simpson) => {
  const result = await connection.execute(
    'UPDATE characters SET name = ? WHERE id = ?;',
    [simpson.name, id],
  );
  console.log('UPDATED', result);
  return { id, ...simpson };
};

const deleteSimpson = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM characters WHERE id = ?;',
    [id],
  );
  console.log('DELETED', [result]);
  return { id };
};

module.exports = { 
  getAll, 
  createSimpson,
  updateSimpson,
  deleteSimpson,
};
