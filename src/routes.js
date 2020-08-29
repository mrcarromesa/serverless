import { Router } from 'express';

import PetsController from './app/controllers/PetsController';
import TodosController from './app/controllers/TodosController';
import UsersController from './app/controllers/UsersController';
const routes = new Router();

routes.get('/pets', PetsController.index);

routes.post('/pets', PetsController.store);
routes.post('/todo', TodosController.store);

routes.post('/user', UsersController.store);
routes.put('/user/:id', UsersController.update);
routes.delete('/user/:id', UsersController.delete);
routes.get('/user', UsersController.index);

export default routes;