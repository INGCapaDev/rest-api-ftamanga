import { sequelize } from '../database/config.js';
import { DataTypes } from 'sequelize';

// TODO SQL Table sales_details
export const salesDetailsModel = sequelize.define(
  'sales_details',
  {
    id_sale: { type: DataTypes.INTEGER, allowNull: false },
    id_product: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    subtotal: { type: DataTypes.DOUBLE, allowNull: false, unique: true },
  },
  {
    timestamps: true, // TODO createdAt, updatedAt
  }
);
