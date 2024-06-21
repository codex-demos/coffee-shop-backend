const cloudinary = require('cloudinary').vs;

const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'coffee',
    allowedFormats: ['jpg', 'png', 'jpeg'],
  },
});

module.exports = { cloudinary, storage };