import express from 'express';
export const productsRoutes = express.Router();
import productsController from '../controllers/products.controller.js';

// TODO Middlewares and Validators
import productsValidator from '../validators/products.validator.js';
import { authMiddleware } from '../middlewares/sessionMiddleware.js';
import { checkRol } from '../middlewares/rolMiddleware.js';

/**
 * * Get All Products
 */
productsRoutes.get('/', productsController.getProducts);

/**
 * * Get Product Detail
 */
productsRoutes.get(
  '/:id',
  productsValidator.isValidId,
  productsController.getProductDetail
);

/**
 * * Create New Product
 */
productsRoutes.post(
  '/',
  authMiddleware,
  checkRol(['Admin']),
  productsValidator.isValidProduct,
  productsController.createProduct
);

/**
 * * Update Product
 */
productsRoutes.put(
  '/:id',
  authMiddleware,
  checkRol(['Admin']),
  productsValidator.isValidId,
  productsValidator.isValidProduct,
  productsController.updateProduct
);

/**
 * ! Delete Product
 */
productsRoutes.delete(
  '/:id',
  authMiddleware,
  checkRol(['Admin']),
  productsValidator.isValidId,
  productsController.deleteProduct
);
