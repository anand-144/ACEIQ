const multer = require('multer');

//Configure multer for file storage

const storage = multer.diskStorage({
    destination: (req, file , cb) => {
        cb(null ,'uploads/');
    },
    filename: (req, file ,cb) => {
        cb(null , `${Date.now()}-${file.originalname}`)
    },
});

//file filter to allow only images

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null , true);
    }else{
        cb(new Error('Only images are allowed'), false);
    }
};

const upload = multer({ storage , fileFilter});

module.exports = upload;