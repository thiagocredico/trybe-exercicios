import { Router } from 'express';
import UsersController from '../controllers/UserController';
import Validations from '../middlewares/Validations';

const userController = new UsersController();

const router = Router();

router.get('/', (req, res) => userController.getAllUsers(req, res));

router.get('/:id', (req, res) => userController.getUserById(req, res));

router.post(
  '/register', 
  Validations.validateUser,
  Validations.validateToken,
  (req, res) => userController.createUser(req, res),
);

router.post(
  '/login', 
  (req, res) => userController.login(req, res),
);

export default router;
