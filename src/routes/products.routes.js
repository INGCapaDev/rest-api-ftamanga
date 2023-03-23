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
  productsValidator.isValidProduct,
  productsController.createProduct
);

/**
 * * Update Product
 */
productsRoutes.put(
  '/:id',
  productsValidator.isValidId,
  productsValidator.isValidProduct,
  productsController.updateProduct
);

/**
 * ! Delete Product
 */
productsRoutes.delete(
  '/:id',
  productsValidator.isValidId,
  productsController.deleteProduct
);
