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

/**
 * * Login user
 * @param {*} req
 * @param {*} res
 * @returns
 */
const loginUser = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await models.usersModel.findOne({ user: req.user });
    if (!user) return handleHttpError(res, 'ERROR_USER_NOT_EXISTS', 404);

    const hashPassword = user.get('password');
    const check = await comparePassword(req.password, hashPassword);
    if (!check) return handleHttpError(res, 'ERROR_INVALID_PASSWORD', 401);

    user.set('password', undefined, { strict: false });

    const data = {
      token: tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_LOGIN_USER');
  }
};

/**
 * * Update User
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateUser = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const user = await models.usersModel.findByPk(id);
    if (!user) {
      return handleHttpError(res, 'ERROR_USER_NOT_EXISTS', 404);
    }

    await models.usersModel.update(body, { where: { id: id } });
    res.send({ data: body, message: `USER_UPDATE_SUCCESSFULLY_ID_${id}` });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_USER');
  }
};

/**
 * ! Delete User
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteUser = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const user = await models.productsModel.findByPk(id);

    if (!user) {
      return handleHttpError(res, 'ERROR_USER_NOT_EXISTS', 404);
    }
    await models.usersModel.destroy({ where: { id: id } });

    res.send({ message: `USER_DELETE_SUCCESSFULLY_ID_${id}` });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_USER');
  }
};

export default {
  getUsers,
  getUserDetail,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
