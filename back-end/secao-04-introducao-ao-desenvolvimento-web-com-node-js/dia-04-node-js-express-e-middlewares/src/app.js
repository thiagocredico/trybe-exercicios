const express = require('express');
require('express-async-errors');

const blogPostRoutes = require('./routes/blogPostsRoutes');
const errorHandler = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/blogPosts', blogPostRoutes);
app.use(errorHandler);
module.exports = app;