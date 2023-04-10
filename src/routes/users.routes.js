import express from 'express';
export const userRoutes = express.Router();
import usersController from '../controllers/users.controller.js';

// TODO Middlewares and Validators
import usersValidator from '../validators/users.validator.js';
import { authMiddleware } from '../middlewares/sessionMiddleware.js';
import { checkRol } from '../middlewares/rolMiddleware.js';

/**
 * * Get All Users
 */
userRoutes.get(
  '/',
  authMiddleware,
  checkRol(['Admin']),
  usersController.getUsers
);

/**
 * * Get User Detail
 */
userRoutes.get(
  '/:id',
  authMiddleware,
  checkRol(['Admin']),
  usersValidator.isValidId,
  usersController.getUserDetail
);

/**
 * * Create New User
 */
userRoutes.post(
  '/',
  authMiddleware,
  checkRol(['Admin']),
  usersValidator.isValidUser,
  usersController.registerUser
);

/**
 * * Update User
 */
userRoutes.put(
  '/:id',
  authMiddleware,
  checkRol(['Admin']),
  usersValidator.isValidId,
  usersValidator.isValidUser,
  usersController.updateUser
);

/**
 * ! Delete User
 */
userRoutes.delete(
  '/:id',
  authMiddleware,
  checkRol(['Admin']),
  usersValidator.isValidId,
  usersController.deleteUser
);
