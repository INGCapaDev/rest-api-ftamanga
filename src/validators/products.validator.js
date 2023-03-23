import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

const isValidProduct = [
  check('name').exists().notEmpty().isAlpha().isLength({ min: 1, max: 99 }),
  check('price')
    .exists()
    .notEmpty()
    .isDecimal({ force_decimal: true, decimal_digits: 2 })
    .isFloat({ min: 0, max: 999999 }),
  (req, res, next) => validateResults(req, res, next),
];

export default { isValidProduct };
