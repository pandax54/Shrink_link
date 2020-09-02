import { getRepository } from 'typeorm';

// url libs
import validUrl from 'valid-url';
import shortid from 'shortid';
import AppError from '../erros/AppError';
import Link from '../models/Links';
import baseUrl from '../config/index';

const urlExists = require("url-exists");

interface RequestDTO {
  url: string;
}

class CreateUserService {
  public async execute({ url }: RequestDTO): Promise<Link> {
    const linksRepository = getRepository(Link);

    console.log('is valid url?', !!validUrl.isUri(url))

    if (validUrl.isUri(url)) {
      try {

        // const baseUrl = 'http://localhost:3333'

        // Check base url
        if (!validUrl.isUri(baseUrl)) {
          throw new AppError('Invalid base url');
        }

        // Create url code
        const shortCode = shortid.generate();

        const checkUrl = await linksRepository.findOne({
          where: { url },
        });

        if (checkUrl) {
          throw new AppError('This Link is already registered.');
        } else {
          const shortUrl = `${baseUrl}/${shortCode}`;


          //------------------

          urlExists(shortUrl, function (err, exists) {
            console.log('this shortURL is valid?', exists);
          });
          //------------------


          const urlObject = linksRepository.create({
            url,
            shortUrl,
            shortCode,
            views: 0,
          });

          await linksRepository.save(urlObject);


          return urlObject;
        }
      } catch (err) {
        console.error(err);
        throw new AppError('Server error');
      }
    } else {
      throw new AppError('Invalid long url');
    }
  }
}

export default CreateUserService;
