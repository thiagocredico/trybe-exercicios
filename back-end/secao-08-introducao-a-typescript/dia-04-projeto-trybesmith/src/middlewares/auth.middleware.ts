import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';
import HostModel from '../database/models/host.model';
import { Host } from '../types/Host';

async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<unknown> {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token é obrigatório' });
  }

  try {
    const decoded = jwtUtil.verify(authorization) as Host;
    const host = await HostModel.findOne({ where: { email: decoded.email } });
    if (!host) return res.status(401).json({ message: 'Token inválido' });

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authMiddleware;
