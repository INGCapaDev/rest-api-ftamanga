import express from 'express';
export const router = express.Router();

// TODO All Routes
import { productsRoutes } from './products.routes.js';
import { authRoutes } from './auth.routes.js';
import { userRoutes } from './users.routes.js';

router.use('/products', productsRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
