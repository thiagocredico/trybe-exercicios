import { NewEntity } from '../interfaces';
import SequelizeUser from '../database/models/SequelizeUser';
import { IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;
  
  async findAll(): Promise<IUser[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, email, password, name }) => (
      { id, email, password, name }
    ));
  }
    
  async findById(id: IUser['id']): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    const { email, password, name } = user;
    return { id, email, password, name };
  }
    
  async create(data: NewEntity<IUser>): Promise<IUser> {
    const user = await this.model.create(data);
    const { id, name, email, password } = user;
    return { id, name, email, password };
  }

  async findbyEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    const { id, name, password } = user;
    return { id, name, password, email };
  }
}