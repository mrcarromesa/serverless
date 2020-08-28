import serverless from 'serverless-http';
import app from './src/app';

exports.run = serverless(app);