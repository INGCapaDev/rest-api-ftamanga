import { matchedData } from 'express-validator';
import { models } from '../models/index.models.js';
import fs from 'fs-extra';

// TODO Error Handler
import { handleHttpError } from '../utils/handleError.js';

// TODO upload files to cloudinary
import { uploadImage, deleteImage } from '../utils/cloudinary.js';

/**
 * * Get All Products
 * @param {*} req
 * @param {*} res
 */
const getProducts = async (req, res) => {
  try {
    const data = await models.productsModel.findAll({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_PRODUCTS');
  }
};

/**
 * * Get Product Detail
 * @param {*} req
 * @param {*} res
 */
const getProductDetail = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.productsModel.findByPk(id);
    if (!data) {
      return handleHttpError(res, 'ERROR_PRODUCT_NOT_EXISTS');
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_PRODUCT_DETAIL');
  }
};

/**
 * * Create New Product
 * @param {*} req
 * @param {*} res
 */
const createProduct = async (req, res) => {
  try {
    const product = matchedData(req);
    if (req.files?.img.tempFilePath) {
      const img = await uploadImage(req.files.img.tempFilePath);
      product.img = img.secure_url;
      product.img_id = img.public_id;
      await fs.unlink(req.files.img.tempFilePath);
    }
    const data = await models.productsModel.create(product);
    res.json(data);
  } catch (error) {
    if (product.img_id) {
      await deleteImage(product.img_id);
    }
    handleHttpError(res, 'ERROR_CREATE_PRODUCT');
  }
};

/**
 * * Update Product
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateProduct = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const product = await models.productsModel.findByPk(id);
    if (!product) {
      return handleHttpError(res, 'ERROR_PRODUCT_NOT_EXISTS');
    }

    if (req.files?.img.tempFilePath) {
      const img = await uploadImage(req.files.img.tempFilePath);
      body.img = img.secure_url;
      body.img_id = img.public_id;

      if (product.img_id) {
        await deleteImage(product.img_id);
      }
      await fs.unlink(req.files.img.tempFilePath);
    }

    await models.productsModel.update(body, { where: { id: id } });
    res.send({ data: body, message: `PRODUCT_UPDATE_SUCCESSFULLY_ID_${id}` });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_PRODUCT');
  }
};

/**
 * ! Delete Product
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteProduct = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const product = await models.productsModel.findByPk(id);

    if (!product) {
      return handleHttpError(res, 'ERROR_PRODUCT_NOT_EXISTS');
    }
    await models.productsModel.destroy({ where: { id: id } });
    if (product.img_id) {
      await deleteImage(product.img_id);
    }

    res.send({ message: `PRODUCT_DELETE_SUCCESSFULLY_ID_${id}` });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_PRODUCT');
  }
};

export default {
  getProducts,
  getProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
};
