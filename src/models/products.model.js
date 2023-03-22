import { DataTypes, Transaction } from 'sequelize';
import { sequelize } from '../database/config.js';

// TODO Table SQL products
export const productsModel = sequelize.define('products', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  editorial: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING },
  year: { type: DataTypes.NUMBER, allowNull: false },
});
