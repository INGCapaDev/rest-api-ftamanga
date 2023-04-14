import express from 'express';
export const salesDetailsRoutes = express.Router();
import salesDetailsController from '../controllers/sales_details.controller.js';

// TODO Middlewares and Validators
import salesDetailsValidator from '../validators/sales_details.validator.js';
import { authMiddleware } from '../middlewares/sessionMiddleware.js';
import { checkRol } from '../middlewares/rolMiddleware.js';

/**
 * * Get All Sales Details
 */
salesDetailsRoutes.get(
  '/',
  authMiddleware,
  checkRol(['Admin']),
  salesDetailsController.getSalesDetails
);

/**
 * * Find One Sale Detail
 */
salesDetailsRoutes.get(
  '/:id',
  authMiddleware,
  checkRol(['Admin']),
  salesDetailsValidator.isValidId,
  salesDetailsController.searchSaleDetail
);

/**
 * * Create New Sale Detail
 */
salesDetailsRoutes.post(
  '/',
  authMiddleware,
  salesDetailsValidator.isValidSaleDetail,
  salesDetailsController.createSaleDetail
);
