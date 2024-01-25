import { Request, Response } from 'express';
import podcastService from '../services/podcast.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response): Promise<Response> {
  const { title, description, url, hostId } = req.body;
  const serviceResponse = await podcastService.create({
    title, description, url, hostId,
  });
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
}

export default {
  create,
};
