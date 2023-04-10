import { sequelize } from '../database/config.js';
import { DataTypes } from 'sequelize';

// TODO SQL Table users
export const usersModel = sequelize.define(
  'users',
  {
    name: { type: DataTypes.STRING, allowNull: false },
    user: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.ENUM(['User', 'Admin']) },
  },
  {
    timestamps: true, // TODO createdAt, updatedAt
  }
);
