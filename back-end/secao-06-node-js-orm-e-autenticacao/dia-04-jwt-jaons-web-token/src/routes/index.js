const express = require('express');

const getPosts = require('../controllers/posts');
const { createUser, getUsers } = require('../controllers/users');
const login = require('../controllers/login');
const { createProduct } = require('../controllers/products');

const validateJwt = require('../middleware/validateJWT');

const apiRoutes = express.Router();

apiRoutes.post('/users', createUser);
apiRoutes.get('/users', getUsers);

apiRoutes.post('/login', login);

apiRoutes.get('/posts', getPosts);

apiRoutes.post('/products', validateJwt, createProduct);

module.exports = apiRoutes;
