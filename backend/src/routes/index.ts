import { Router } from 'express';

import linksRouter from './links.routes';

const routes = Router();

routes.use('/', linksRouter);

export default routes;
