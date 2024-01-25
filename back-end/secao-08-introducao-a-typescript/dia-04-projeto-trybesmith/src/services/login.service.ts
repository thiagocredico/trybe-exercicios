import bcrypt from 'bcryptjs';
import HostModel from '../database/models/host.model';
import Login from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import jwtUtil from '../utils/jwt.util';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.email || !login.password) {
    return { status: 'INVALID_DATA', data: { message: 'Dados inválidos' } };
  }

  const host = await HostModel.findOne({ where: { email: login.email } });

  if (!host || !bcrypt.compareSync(login.password, host.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'E-mail ou senha inválidos' } };
  }
  const { id, email } = host.dataValues;
  const token = jwtUtil.sign({ id, email });
  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  verifyLogin,
};
