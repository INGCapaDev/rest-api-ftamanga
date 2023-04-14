import { matchedData } from 'express-validator';
import { models } from '../models/index.models.js';

// TODO Error Handler
import { handleHttpError } from '../utils/handleError.js';

/**
 * * Get All Sales Details
 * @param {*} req
 * @param {*} res
 */
const getSalesDetails = async (req, res) => {
  try {
    const data = await models.salesDetailsModel.findAll({
      include: { model: models.productsModel },
    });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_SALES_DETAILS');
  }
};

/**
 * * Search Sale Detail
 * @param {*} req
 * @param {*} res
 */
const searchSaleDetail = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.salesDetailsModel.findOne({
      include: {
        model: models.productsModel,
      },

      where: { id: id },
    });
    if (!data) {
      return handleHttpError(res, 'ERROR_SALE_DETAIL_NOT_EXISTS');
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_SALE_DETAIL');
  }
};

/**
 * * Create New Sale Detail
 * @param {*} req
 * @param {*} res
 */
const createSaleDetail = async (req, res) => {
  try {
    const sale = matchedData(req);
    const data = await models.salesDetailsModel.create(sale);
    res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_SALE_DETAIL');
  }
};

export default { createSaleDetail, getSalesDetails, searchSaleDetail };
