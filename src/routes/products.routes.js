import express from 'express';
export const productsRoutes = express.Router();
import productsController from '../controllers/products.controller.js';

// TODO Middlewares and Validators
import productsValidator from '../validators/products.validator.js';

/**
 * * Get All Products
 */
productsRoutes.get('/', productsController.getProducts);

/**
 * * Create New Product
 */
productsRoutes.post(
  '/',
  productsValidator.isValidProduct,
  productsController.createProduct
);