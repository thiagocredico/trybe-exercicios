import { NextFunction, Request, Response } from 'express';
import { IHouse } from '../models/IHouse';
import HouseService from '../services/House.service';

export default class HousesController {
  private houseService: HouseService;

  constructor(houseService: HouseService) {
    this.houseService = houseService;
  }

  public indexHouse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const houses: IHouse[] | null = await this.houseService.all();

      if (!houses) {
        res.status(404).json({ message: 'Não possui casas cadastradas.' });
      } else {
        res.status(200).json({ houses });
      }
    } catch (error) {
      next(error);
    }
  };

}