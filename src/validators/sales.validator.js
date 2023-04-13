import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

const isValidSale = [
  check('id_user').exists().notEmpty().isInt({ min: 1 }),
  check('pay').exists().notEmpty(),
  check('total').exists().notEmpty().isNumeric(),
  (req, res, next) => validateResults(req, res, next),
];

const isValidId = [
  check('id').exists().notEmpty().isInt({ min: 1 }),
  (req, res, next) => validateResults(req, res, next),
];

export default { isValidId, isValidSale };
