/**
 * * Response
 * * Error message _optional
 * * Error code _optional
 * @param {*} res
 * @param {*} message
 * @param {*} code
 */
export const handleHttpError = (
  res,
  message = 'ERROR_HAPPENED',
  code = 403
) => {
  res.status(code);
  res.send({ error: message });
};
