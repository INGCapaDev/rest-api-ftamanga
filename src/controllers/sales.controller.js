import { matchedData } from 'express-validator';
import { models } from '../models/index.models.js';

// TODO Error Handler
import { handleHttpError } from '../utils/handleError.js';

/**
 * * Get All Sales
 * @param {*} req
 * @param {*} res
 */
const getSales = async (req, res) => {
  try {
    const data = await models.salesModel.findAll({
      include: [
        { model: models.usersModel },
        {
          model: models.salesDetailsModel,
          include: { model: models.productsModel },
        },
      ],
    });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_SALES');
  }
};

/**
 * * Search Sale
 * @param {*} req
 * @param {*} res
 */
const searchSale = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.salesModel.findOne({
      include: [
        {
          model: models.usersModel,
        },
        {
          model: models.salesDetailsModel,
        },
      ],
      where: { id: id },
    });
    if (!data) {
      return handleHttpError(res, 'ERROR_SALE_NOT_EXISTS');
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_SALE_DETAIL');
  }
};

/**
 * * Create New Sale
 * @param {*} req
 * @param {*} res
 */
const createSale = async (req, res) => {
  try {
    const sale = matchedData(req);
    const data = await models.salesModel.create(sale);
    res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_SALE');
  }
};

export default { createSale, getSales, searchSale };
