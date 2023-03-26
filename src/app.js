import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import './utils/handleEnv.js';

export const app = express();

// TODO App Settings

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
  })
);

/**
 * * Here call routes! 🤖
 */
import { router } from './routes/index.routes.js';
// TODO localhost/api/______
app.use('/api', router);
