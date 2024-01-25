import PodcastModel from '../database/models/podcast.model';
import { Podcast } from '../types/Podcast';
import { ServiceResponse } from '../types/ServiceResponse';

function validateParams({
  title,
  description,
  url,
  hostId,
}: Podcast): string | null {
  if (!title) return 'Title is required';
  if (!description) return 'Description is required';
  if (!url) return 'Url is required';
  if (!hostId) return 'hostId is required';
  return null;
}

async function create(podcast: Podcast): Promise<ServiceResponse<Podcast>> {
  let responseService: ServiceResponse<Podcast>;
  const error = validateParams(podcast);
  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }
  const newPodcast = await PodcastModel.create(podcast);
  responseService = { status: 'SUCCESSFUL', data: newPodcast.dataValues };
  return responseService;
}

export default {
  create,
};
