import express from 'express';
import cors from 'cors';
import './utils/handleEnv.js';

export const app = express();

// TODO App Settings

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

/**
 * * Here call routes! 🤖
 */
import { router } from './routes/index.routes.js';
// TODO localhost/api/______
app.use('/api', router);
