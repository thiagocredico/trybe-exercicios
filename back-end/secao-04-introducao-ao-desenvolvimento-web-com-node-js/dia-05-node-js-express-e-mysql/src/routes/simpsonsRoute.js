const express = require('express');
const simpsonsDB = require('../simpsonsDB');

const simpsonsRoute = express.Router();

simpsonsRoute.get('/', async (req, res) => {
  const characters = await simpsonsDB.getAll();
  return res.status(200).json(characters);
});

simpsonsRoute.post('/', async (req, res) => {
  const simpson = req.body;
  const result = await simpsonsDB.createSimpson(simpson);
  return res.status(201).json(result);
});

simpsonsRoute.put('/:id', async (req, res) => {
  const simpson = req.body;
  const { id } = req.params;

  const result = await simpsonsDB.updateSimpson(id, simpson);
  return res.status(200).json(result);
});

simpsonsRoute.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const result = await simpsonsDB.deleteSimpson(id);
  return res.status(204).json({});
});
module.exports = simpsonsRoute;
