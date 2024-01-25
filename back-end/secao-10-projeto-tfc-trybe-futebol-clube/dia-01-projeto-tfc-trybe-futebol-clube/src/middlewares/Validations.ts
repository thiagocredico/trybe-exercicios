import { NextFunction, Request, Response } from 'express';
import JWT from '../utils/JWT';

class Validations {
  static validateBook(req: Request, res: Response, next: NextFunction): Response | void {
    const book = req.body;
    const requiredKeys = ['title', 'price', 'author', 'isbn'];
    const notFoundKey = requiredKeys.find((key) => !(key in book));
    if (notFoundKey) {
      return res.status(400).json({ message: `${notFoundKey} is required` });
    }

    next();
  }

  static validateUser(req: Request, res: Response, next: NextFunction): Response | void {
    const user = req.body;
    const requiredKeys = ['email', 'name', 'password'];
    const notFoundKey = requiredKeys.find((key) => !(key in user));
    if (notFoundKey) {
      return res.status(400).json({ message: `${notFoundKey} is required` });
    }

    next();
  }

  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const validToken = JWT.verify(token);
    if (validToken === 'Token must be a valid Token') {
      return res.status(401).json({ message: validToken });
    }
    next();
  }
}

export default Validations;
