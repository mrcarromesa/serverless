import { Router } from 'express';

import PetsController from './app/controllers/PetsControllers';

const routes = new Router();

routes.get('/pets', PetsController.index);

routes.post('/pets', PetsController.store);

export default routes;