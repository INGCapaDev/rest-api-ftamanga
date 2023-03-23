import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

const isValidProduct = [
  check('name')
    .exists()
    .notEmpty()
    .isLength({ max: 99 })
    .withMessage('The product name is too long...'),
  check('price')
    .exists()
    .notEmpty()
    .isFloat({ min: 0, max: 999999 })
    .withMessage('The product price only accept positive numeric values...'),
  check('editorial')
    .exists()
    .notEmpty()
    .isLength({ max: 99 })
    .withMessage('The product editorial name is too long...'),
  check('img').exists().notEmpty(),
  check('year')
    .exists()
    .notEmpty()
    .isInt({ min: 1900, max: 2030 })
    .withMessage(
      'The product year only accept numeric intenger values between 1900 and 2030'
    ),

  (req, res, next) => validateResults(req, res, next),
];

export default { isValidProduct };
