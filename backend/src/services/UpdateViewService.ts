// import { getRepository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import Link from '../models/Links';
import AppError from '../erros/AppError';
import LinksRepository from '../repositories/ShortLinkRepository';

interface RequestDTO {
  shortCode: string;
}

class UpdateViewService {
  public async execute({ shortCode }: RequestDTO): Promise<Link> {
    const linksRepository = getCustomRepository(LinksRepository);

    const checkUrl = await linksRepository.findByShortUrl(shortCode);

    if (!checkUrl) {
      throw new AppError('This link did not exist.');
    }

    checkUrl.views += 1;


    linksRepository.save(checkUrl);

    return checkUrl

  }
}

export default UpdateViewService;
