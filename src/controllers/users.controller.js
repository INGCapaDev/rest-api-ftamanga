import { matchedData } from 'express-validator';
import { models } from '../models/index.models.js';

// TODO Error Handler
import { handleHttpError } from '../utils/handleError.js';
import { encryptPassword, comparePassword } from '../utils/handlePassword.js';
import { tokenSign } from '../utils/handleJwt.js';

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

/**
 * * Register User
 * @param {*} req
 * @param {*} res
 */
const registerUser = async (req, res) => {
  try {
    req = matchedData(req);
    const passwordHash = await encryptPassword(req.password);
    const body = { ...req, password: passwordHash };
    const userData = await models.usersModel.create(body);
    userData.set('password', undefined, { strict: false });

    const data = {
      token: tokenSign(userData),
      user: userData,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER_USER');
  }
};

export default {
  getUsers,
  getUserDetail,
  registerUser,
};
