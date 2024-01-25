const express = require('express');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'I\'m alive!!!' });
});

app.get('/activities', (req, res) => {
  res.status(200).json(activities);
});

app.post('/activities', (req, res) => {
  activities.push(req.body);
  res.status(201).json(req.body);
});

app.get('/activities/:id', (req, res) => {
  console.log('PARAMS', req.params);
  const activity = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(activity);
});

app.put('/activities/:id', (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;
  let alteredActivity;
  for (let i = 0; i < activities.length; i += 1) {
    const activity = activities[i];
    if (activity.id === Number(id)) {
      activity.description = description;
      activity.status = status;
      alteredActivity = activity;
    }
  }
  res.status(200).json(alteredActivity);
});

app.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = activities.findIndex((activity) => activity.id === Number(id));
  activities.splice(arrayPosition, 1);
  res.status(200).json(activities);
});

module.exports = app;