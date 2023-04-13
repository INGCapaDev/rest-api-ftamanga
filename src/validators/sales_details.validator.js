import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

const isValidSaleDetail = [
  check('id_sale').exists().notEmpty().isInt({ min: 1 }),
  check('id_product').exists().notEmpty().isInt({ min: 1 }),
  check('quantity').exists().notEmpty().isInt({ min: 1 }),
  check('subtotal').exists().notEmpty().isNumeric(),
  (req, res, next) => validateResults(req, res, next),
];

const isValidId = [
  check('id').exists().notEmpty().isInt({ min: 1 }),
  (req, res, next) => validateResults(req, res, next),
];

export default { isValidId, isValidSaleDetail };
