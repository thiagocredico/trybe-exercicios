const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  const path = '/files/cacauTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter(
    (chocolate) => chocolate.brandId === brandId,
  );
};

const createChocolate = async (name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const newChocolate = { name, brandId, id: cacauTrybe.nextChocolateId };
  cacauTrybe.chocolates.push(newChocolate);
  cacauTrybe.nextChocolateId += 1;
  await writeCacauTrybeFile(cacauTrybe);
  return newChocolate;
};

const deleteChocolate = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();

  const isChocolateExist = cacauTrybe.chocolates.some(
    (chocolate) => chocolate.id === id,
  );

  if (!isChocolateExist) return false;

  cacauTrybe.chocolates = cacauTrybe.chocolates.filter(
    (chocolate) => chocolate.id !== id,
  );

  await writeCacauTrybeFile(cacauTrybe);

  return true;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  readCacauTrybeFile,
  createChocolate,
  writeCacauTrybeFile,
  deleteChocolate,
};
