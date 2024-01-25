import * as bcrypt from 'bcrypt';
import { IToken } from '../interfaces/IToken';
import { ILogin, IUser, IUserResponse } from '../interfaces/users/IUser';
import UserModel from '../models/UserModel';
import { IUserModel } from '../interfaces/users/IUserModel';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import { NewEntity } from '../interfaces';
import JWT from '../utils/JWT';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { 
    
  }

  public async findAll(): Promise<ServiceResponse<IUserResponse[]>> {
    const allUsers = await this.userModel.findAll();
    const usersReturn = allUsers.map(({ id, name, email }) => ({ id, name, email }));
    return { status: 'SUCCESSFUL', data: usersReturn };
  }

  public async findById(id: number): Promise<ServiceResponse<IUserResponse>> {
    const user = await this.userModel.findById(id);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    const { name, email } = user as IUser;

    return { status: 'SUCCESSFUL', data: { id, name, email } };
  }

  public async createUser(user: NewEntity<IUser>):Promise<
  ServiceResponse<IUserResponse | ServiceMessage>> {
    const userFound = await this.userModel.findbyEmail(user.email);
    if (userFound) return { status: 'CONFLICT', data: { message: 'User already exists' } };
    const userPassword = bcrypt.hashSync(user.password, 10);
    const newUser = await this.userModel.create({ ...user, password: userPassword });
    const { id, name, email } = newUser;
    return { status: 'SUCCESSFUL', data: { id, name, email } };
  }

  public async login(data: ILogin):Promise<
  ServiceResponse<IToken | ServiceMessage>> {
    const user = await this.userModel.findbyEmail(data.email);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    if (!bcrypt.compareSync(data.password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const token = JWT.sign({ email: data.email });
    return { status: 'SUCCESSFUL', data: { token } };
  }
}
