import express from 'express';
import podcastRouter from './routers/podcast.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());

app.use(loginRouter);
app.use(podcastRouter);

app.get('/', (_req, res) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
