import express from 'express';
export const router = express.Router();

// TODO All Routes
import { productsRoutes } from './products.routes.js';
import { authRoutes } from './auth.routes.js';
import { userRoutes } from './users.routes.js';
import { salesRoutes } from './sales.routes.js';
import { salesDetailsRoutes } from './sales_details.routes.js';

router.use('/products', productsRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/sales', salesRoutes);
router.use('/sale/details', salesDetailsRoutes);
