import { PrismaClient } from '@prisma/client';
import { IHouseDTO, IHouse } from '../models/IHouse';

const prisma = new PrismaClient();

interface Repository {
  findAll(): Promise<IHouseDTO[]>;
}

export default class HouseRepository implements Repository {
  async findAll(): Promise<IHouseDTO[]> {
    return await prisma.house.findMany() ?? [];
  }
}