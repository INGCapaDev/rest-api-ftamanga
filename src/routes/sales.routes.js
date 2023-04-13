import express from 'express';
export const salesRoutes = express.Router();
import salesController from '../controllers/sales.controller.js';

// TODO Middlewares and Validators
import salesValidator from '../validators/sales.validator.js';
import { authMiddleware } from '../middlewares/sessionMiddleware.js';

/**
 * * Get All Sales
 */
salesRoutes.get('/', authMiddleware, salesController.getSales);

/**
 * * Find One Sale
 */
salesRoutes.get(
  '/:id',
  authMiddleware,
  salesValidator.isValidId,
  salesController.searchSale
);

/**
 * * Create New Sale
 */
salesRoutes.post(
  '/',
  authMiddleware,
  salesValidator.isValidSale,
  salesController.createSale
);
