import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

const isValidUser = [
  check('name')
    .exists()
    .notEmpty()
    .isLength({ max: 150 })
    .withMessage('The name is too long...'),
  check('user')
    .exists()
    .notEmpty()
    .isLength({ max: 150 })
    .withMessage('The user is too long...'),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ max: 30 })
    .withMessage('The password is too long...'),
  check('address').exists().notEmpty(),
  check('phone').exists().notEmpty(),
  check('email')
    .exists()
    .notEmpty()
    .isEmail()
    .withMessage('Choose a valid email...'),
  (req, res, next) => validateResults(req, res, next),
];

const isValidId = [
  check('id').exists().notEmpty().isInt({ min: 1 }),
  (req, res, next) => validateResults(req, res, next),
];

const isValidLogin = [
  check('user')
    .exists()
    .notEmpty()
    .isLength({ max: 150 })
    .withMessage('The user is too long...'),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ max: 30 })
    .withMessage('The password is too long...'),
  (req, res, next) => validateResults(req, res, next),
];

export default { isValidUser, isValidId, isValidLogin };
