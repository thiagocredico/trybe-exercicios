import { ICRUDModelReader, ICRUDModelCreator } from '../ICRUDModel';
import { IUser } from './IUser';

export interface IUserModel extends ICRUDModelReader<IUser>, ICRUDModelCreator<IUser>{
  findbyEmail(email: IUser['email']): Promise<IUser | null>
}
