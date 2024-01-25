const productService = require('../services/productsService');

const createProduct = async (req, res) => {
  if (!req.body.title || !req.body.price) {
    return res.status(400).json({ message: 'Produto sem título e/ou preço' });
  }
  
  const { payload } = req;
  const product = await productService.createProduct({
    price: req.body.price, title: req.body.title, userId: payload.data.id });
  
  return res
    .status(200)
    .json({ message: 'Produto real criado com sucesso', data: product });
};

module.exports = { createProduct };
