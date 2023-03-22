import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

const isValidProduct = [check('name').exists().notEmpty()];

export default {};
