import { v2 as cloudinary } from 'cloudinary';

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, { folder: 'ftamanga' });
};

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
