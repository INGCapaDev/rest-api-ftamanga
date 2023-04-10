import { handleHttpError } from '../utils/handleError.js';

export const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const userRole = user.role; // TODO default = ['User']

    const checkRolValue = roles.some((rolSingle) =>
      userRole.includes(rolSingle)
    );

    if (!checkRolValue) {
      return handleHttpError(res, 'ERROR_UNAUTHORIZED_USER', 401);
    }

    next();
  } catch (error) {
    handleHttpError('ERROR_PERMISSIONS');
  }
};
