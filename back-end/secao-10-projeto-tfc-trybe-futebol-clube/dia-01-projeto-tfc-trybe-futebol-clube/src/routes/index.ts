import { Router } from 'express';
import booksRouter from './books.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/books', booksRouter);
router.use('/users', usersRouter);

export default router;
