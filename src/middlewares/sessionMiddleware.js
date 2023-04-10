import { handleHttpError } from '../utils/handleError.js';
import { verifyToken } from '../utils/handleJwt.js';
import { models } from '../models/index.models.js';

/**
 * * Middleware for check JWT and auth the user or decline the request.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return handleHttpError(res, 'ERROR_NEED_SESSION', 401);
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = verifyToken(token);

    if (!dataToken) {
      return handleHttpError(res, 'ERROR_NOT_PAYLOAD_DATA', 401);
    }

    const user = await models.usersModel.findOne({
      where: { id: dataToken.id },
    });
    req.user = user;

    next();
  } catch (error) {
    handleHttpError(res, 'ERROR_NOT_SESSION', 401);
  }
};
