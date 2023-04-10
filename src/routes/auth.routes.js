import express from 'express';
export const authRoutes = express.Router();
import usersController from '../controllers/users.controller.js';

// TODO Middlewares and Validators
import usersValidator from '../validators/users.validator.js';

// TODO https://localhost/api/auth/register
/**
 * * Register User
 */
authRoutes.post(
  '/register',
  usersValidator.isValidUser,
  usersController.registerUser
);

// TODO https://localhost/api/auth/login
/**
 * * Login User
 */
authRoutes.post(
  '/login',
  usersValidator.isValidLogin,
  usersController.loginUser
);
