import { productsModel } from './products.model.js';
import { usersModel } from './user.model.js';
import { salesModel } from './sales.model.js';
import { salesDetailsModel } from './sales_details.model.js';

salesModel.belongsTo(usersModel, {
  foreignKey: 'id_user',
  targetKey: 'id',
});
salesModel.hasMany(salesDetailsModel, {
  foreignKey: 'id_sale',
});
salesDetailsModel.belongsTo(productsModel, {
  foreignKey: 'id_product',
  targetKey: 'id',
});

// TODO All SQL models
export const models = {
  productsModel,
  usersModel,
  salesModel,
  salesDetailsModel,
};
