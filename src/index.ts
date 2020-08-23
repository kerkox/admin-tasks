import Server from './server/server';
import Router from './routes/api/index';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
require('dotenv').confgi();

const port = Number(process.env.PORT) || 3000;
const server = Server.init(port);
server.app.use(bodyParser.urlencoded({ extended: false }))
server.app.use(bodyParser.json())
server.app.use(Router);

const mongodbURL = process.env.MOGO_URI || 'mongodb://localhost/tasks'

server.start(() => {
  console.log(`correindo en el puerto ${port}`);
})