import express from 'express';
export const productsRoutes = express.Router();
import productsController from '../controllers/products.controller.js';

// TODO Middlewares and Validators

productsRoutes.use('/', productsController.getProducts);
