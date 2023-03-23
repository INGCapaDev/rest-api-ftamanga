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
    const data = await models.productsModel.findAll({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_PRODUCTS');
  }
};

/**
 * * Get Product Detail
 * @param {*} req
 * @param {*} res
 */
const getProductDetail = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.productsModel.findByPk(id);
    if (!data) {
      return handleHttpError(res, 'ERROR_PRODUCT_NOT_EXISTS');
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_PRODUCT_DETAIL');
  }
};

/**
 * * Create New Product
 * @param {*} req
 * @param {*} res
 */
const createProduct = async (req, res) => {
  try {
    const product = matchedData(req);
    const data = await models.productsModel.create(product);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_PRODUCT');
  }
};

export default {
  getProducts,
  getProductDetail,
  createProduct,
};
