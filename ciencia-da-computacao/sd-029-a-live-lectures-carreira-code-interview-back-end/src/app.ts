import express from 'express';
import cors from 'cors';
import houseRouter from './routes/House.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/houses', houseRouter);

export default app;