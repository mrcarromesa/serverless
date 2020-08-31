import { Router } from 'express';
import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';



import PetsController from './app/controllers/PetsController';
import TodosController from './app/controllers/TodosController';
import UsersController from './app/controllers/UsersController';
const routes = new Router();

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
      s3: s3,
      bucket: 'rodoserverlessjs1',
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname); //use Date.now() for unique file keys
      }
  })
});

routes.post('/upload', upload.single('file'), function (req, res, next) {
  res.send("Uploaded!");
});

routes.get('/pets', PetsController.index);

routes.post('/pets', PetsController.store);
routes.post('/todo', TodosController.store);

routes.post('/user', UsersController.store);
routes.put('/user/:id', UsersController.update);
routes.delete('/user/:id', UsersController.delete);
routes.get('/user', UsersController.index);

export default routes;