import express from 'express';
export const userRoutes = express.Router();
import usersController from '../controllers/users.controller.js';

// TODO Middlewares and Validators
import usersValidator from '../validators/users.validator.js';

/**
 * * Get All Users
 */
userRoutes.get('/', usersController.getUsers);

/**
 * * Get User Detail
 */
userRoutes.get('/:id', usersValidator.isValidId, usersController.getUserDetail);

/**
 * * Create New User
 */
userRoutes.post('/', usersValidator.isValidUser, usersController.registerUser);

/**
 * * Update User
 */
userRoutes.put(
  '/:id',
  usersValidator.isValidId,
  usersValidator.isValidUser,
  usersController.updateUser
);

/**
 * ! Delete User
 */
userRoutes.delete('/:id', usersValidator.isValidId, usersController.deleteUser);
