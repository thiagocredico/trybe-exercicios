const fs = require('fs');

const FILE_PATH = './data/products.json';

function getAll() {
  const rawData = fs.readFileSync(FILE_PATH);
  const products = JSON.parse(rawData);

  return products;
}

function getById(id) {
  const rawData = fs.readFileSync(FILE_PATH);

  const product = JSON.parse(rawData).find(
    (data) => data.id === parseInt(id, 10),
  );

  return product;
}

function add(name, brand) {
  const rawData = fs.readFileSync(FILE_PATH);
  const products = JSON.parse(rawData);

  const id = products[products.length - 1].id + 1;

  const product = { id, name, brand };
  products.push(product);

  fs.writeFile(FILE_PATH, JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return product;
}

function remove(id) {
  const rawData = fs.readFileSync(FILE_PATH);
  const products = JSON.parse(rawData).filter(
    (product) => product.id !== parseInt(id, 10),
  );

  fs.writeFile(FILE_PATH, JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return products;
}

function addOrUpdate(id, name, brand) {
  const rawData = fs.readFileSync(FILE_PATH);
  const products = JSON.parse(rawData);

  const product = products.find((data) => data.id === parseInt(id, 10));

  if (product) {
    product.name = name;
    product.brand = brand;
  } else {
    const newId = products[products.length - 1].id + 1;
    const newProduct = { id: newId, name, brand };
    products.push(newProduct);
  }

  fs.writeFile(FILE_PATH, JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return products;
}

module.exports = { add, remove, getAll, getById, addOrUpdate };
