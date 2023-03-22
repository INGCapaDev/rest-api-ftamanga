import { Sequelize } from 'sequelize';

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

export const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

/**
 * * Database Connection
 */
export const dbConnectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log('**** SUCCESS_MYSQL_CONNECTION ****');
  } catch (error) {
    console.log('**** ERROR_MYSQL_CONNECTION ****');
  }
};
