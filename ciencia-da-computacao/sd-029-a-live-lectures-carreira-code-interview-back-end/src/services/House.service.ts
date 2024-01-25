import House from '../models/House';
import { IHouseDTO } from '../models/IHouse';
import HouseRepository from '../repository/HouseRepository';

export default class HouseService {
  constructor(private repository: HouseRepository) {
    this.repository = repository;
  }

  public async all(): Promise<IHouseDTO[] | null> {
    return await this.repository.findAll() ?? [];
  }
}