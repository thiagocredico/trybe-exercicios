const express = require('express');

const utilsFile = require('../utils/readAndWriteFiles');
const fieldValidation = require('../middlewares/fieldValidation');
const valuesValidation = require('../middlewares/valuesValidation');

const route = express.Router();

route.get('/', async (req, res, next) => {
  const posts = await utilsFile.readBlogPostFile();

  if (!posts) {
    return next({ statusCode: 500, message: 'Error opening file' });
  }
  res.status(200).json(posts);
});

route.post('/', fieldValidation, valuesValidation, async (req, res) => {
  const blogPost = req.body;

  const id = await utilsFile.getBlogPostLastId() + 1;
  const blogPostWithDataTimeAndId = {
    id,
    ...blogPost,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await utilsFile.insertBlogPostFile(blogPostWithDataTimeAndId);
  return res.status(201).json(blogPostWithDataTimeAndId);
});

module.exports = route;