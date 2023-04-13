import { sequelize } from '../database/config.js';
import { DataTypes } from 'sequelize';

// TODO SQL Table sales_details
export const salesDetailsModel = sequelize.define(
  'sales_details',
  {
    id_sale: { type: DataTypes.INTENGER, allowNull: false },
    id_product: { type: DataTypes.INTENGER, allowNull: false },
    quantity: { type: DataTypes.INTENGER, allowNull: false },
    subtotal: { type: DataTypes.DOUBLE, allowNull: false, unique: true },
  },
  {
    timestamps: true, // TODO createdAt, updatedAt
  }
);
