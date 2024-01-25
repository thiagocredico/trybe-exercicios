import { Router } from 'express';
import HouseController from '../controllers/HousesController';
import HouseRepository from '../repository/HouseRepository';
import HouseService from '../services/House.service';

const houseRouter = Router();

const repository = new HouseRepository();
const service = new HouseService(repository);
const controller = new HouseController(service);

houseRouter.get('/', controller.indexHouse);

export default houseRouter;