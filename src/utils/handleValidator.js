import { validationResult } from 'express-validator';

/**
 * * Validate Models Specifications
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send(error);
  }
};
