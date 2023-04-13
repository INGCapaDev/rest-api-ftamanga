import { productsModel } from './products.model.js';
import { usersModel } from './user.model.js';
import { salesModel } from './sales.model.js';
import { salesDetailsModel } from './sales_details.model.js';

salesModel.hasOne(usersModel, { foreignKey: 'id_user' });
salesModel.hasMany(salesDetailsModel, { foreignKey: 'id_sale' });
salesDetailsModel.hasOne(productsModel, { foreignKey: 'id_product' });

// TODO All SQL models
export const models = {
  productsModel,
  usersModel,
  salesModel,
  salesDetailsModel,
};
