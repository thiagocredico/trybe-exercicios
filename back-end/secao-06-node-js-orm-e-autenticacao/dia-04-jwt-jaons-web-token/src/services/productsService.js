const { Product } = require('../models');

const createProduct = async ({ price, title, userId }) => {
  const result = await Product.create({ price, title, userId });
  return result;
};

const getProducts = async () => {
  const result = await Product.findAll();
  return result;
};

module.exports = { createProduct, getProducts };
