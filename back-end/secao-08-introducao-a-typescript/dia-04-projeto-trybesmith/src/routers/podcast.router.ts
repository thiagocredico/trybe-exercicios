import { Router } from 'express';
import podcastController from '../controllers/podcast.controller';
import auth from '../middlewares/auth.middleware';

const podcastRouter = Router();

podcastRouter.post('/podcast', auth, podcastController.create);

export default podcastRouter;
