import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { 
  }

  public async getAllUsers(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.findAll();
    return res.status(200).json(serviceResponse.data);
  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.findById(Number(req.params.id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.createUser(req.body);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(201).json(serviceResponse.data);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.login(req.body);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }
}
