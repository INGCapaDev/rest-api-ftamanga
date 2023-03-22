import { matchedData } from 'express-validator';
import { models } from '../models/index.models.js';

// TODO Error Handler
import { handleHttpError } from '../utils/handleError.js';

/**
 * * Get All Products
 * @param {*} req
 * @param {*} res
 */
const getProducts = async (req, res) => {
  try {
    const products = await models.productsModel.findAll({});
    res.send({ products });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_PRODUCTS');
  }
};
