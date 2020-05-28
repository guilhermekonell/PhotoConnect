import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import PortfolioController from './app/controllers/PortfolioController';
import AlbumController from './app/controllers/AlbumController';
import ServiceController from './app/controllers/ServiceController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/portfolios', PortfolioController.index);
routes.get('/portfolios/:id', PortfolioController.show);
routes.post('/portfolios', PortfolioController.store);
routes.put('/portfolios/:id', PortfolioController.update);
routes.delete('/portfolios', PortfolioController.delete);

routes.get('/albums/:id', AlbumController.show);
routes.post('/albums', AlbumController.store);
routes.delete('/albums/:id', AlbumController.delete);

routes.get('/services/user', ServiceController.indexUser);
routes.get('/services/provider', ServiceController.indexProvider);
routes.get('/services/:id', ServiceController.show);
routes.post('/services', ServiceController.store);
routes.put('/services', ServiceController.update);
routes.post('/services/:id/cancel', ServiceController.cancel);
routes.post('/services/:id/approve', ServiceController.approve);
routes.post('/services/:id/conclude', ServiceController.conclude);

export default routes;
