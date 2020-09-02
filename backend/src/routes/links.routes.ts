import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateLinkService from '../services/CreateLinkService';
import Links from '../models/Links';


import UpdateViewService from '../services/UpdateViewService';

const linksRouter = Router();

linksRouter.get('/:shortCode', async (request, response) => {
  const { shortCode } = request.params

  try {

    const updateViewService = new UpdateViewService();

    const link = await updateViewService.execute({ shortCode })

    return response.redirect(`${link?.url}`)


  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }

})

linksRouter.get('/', async (request, response) => {
  const linksRepository = getRepository(Links);
  const links = await linksRepository.find();

  const orderedLinks = links.sort((a, b) => b.views - a.views)

  return response.json(orderedLinks.splice(0, 5));
});

// Rota POST
linksRouter.post('/', async (request, response) => {
  try {
    const { url } = request.body;

    const createLink = new CreateLinkService();

    const link = await createLink.execute({ url });

    return response.json(link);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

// linksRouter.post('/:shortCode', async (request, response) => {

//   const { shortCode } = request.params

//   try {

//     const updateViewService = new UpdateViewService();

//     const link = await updateViewService.execute({ shortCode })

//     console.log('ok', link)

//     return response.redirect(`${link?.url}`)


//   } catch (err) {
//     return response.status(400).json({ Error: err.message });
//   }

// })


export default linksRouter;
