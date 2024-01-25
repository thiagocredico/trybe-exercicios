import { Router } from 'express';
import podcastController from '../controllers/podcast.controller';

const podcastRouter = Router();

podcastRouter.post('/podcast', podcastController.create);

export default podcastRouter;
