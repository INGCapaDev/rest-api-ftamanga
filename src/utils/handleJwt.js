import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
/**
 * * user = The user object
 * @param {*} user
 * @returns
 */
export const tokenSign = (user) => {
  try {
    const sign = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: '2h',
    });

    return sign;
  } catch (error) {
    return null;
  }
};

export const verifyToken = (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};
