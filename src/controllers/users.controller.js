import { matchedData } from 'express-validator';
import { models } from '../models/index.models.js';
import fs from 'fs-extra';

// TODO Error Handler
import { handleHttpError } from '../utils/handleError.js';

/**
 * * Get All Users
 * @param {*} req
 * @param {*} res
 */
const getUsers = async (req, res) => {
  try {
    const data = await models.usersModel.findAll({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_USERS');
  }
};

/**
 * * Get User Detail
 * @param {*} req
 * @param {*} res
 */
const getUserDetail = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.usersModel.findByPk(id);
    if (!data) {
      return handleHttpError(res, 'ERROR_USER_NOT_EXISTS', 404);
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_USER_DETAIL');
  }
};

export default {
  getUsers,
  getUserDetail,
};
