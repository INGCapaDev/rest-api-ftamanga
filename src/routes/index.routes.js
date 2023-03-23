import express from 'express';
export const router = express.Router();

// TODO All Routes
import { productsRoutes } from './products.routes.js';

router.use('/products', productsRoutes);
