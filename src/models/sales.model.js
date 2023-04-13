import { sequelize } from '../database/config.js';
import { DataTypes } from 'sequelize';

// TODO SQL Table sales
export const salesModel = sequelize.define(
  'sales',
  {
    id_user: { type: DataTypes.INTEGER, allowNull: false },
    pay: { type: DataTypes.ENUM(['Credit', 'Debit']), allowNull: false },
    total: { type: DataTypes.DOUBLE, allowNull: false, unique: true },
  },
  {
    timestamps: true, // TODO createdAt, updatedAt
  }
);
