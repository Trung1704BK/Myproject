const express = require('express');
const multer = require("multer");

const router = express.Router();

const collectionController = require('../../controllers/collection.controller');
const {configFilterFileUpload} = require("../../util/helper");
const {s3Upload} = require("../../util/s3Service");

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: configFilterFileUpload()
});

//Create new collection
router.post('/', upload.array('image', 1), async (req, res, next) => {
    try {
        const {title} = req.body;
        if (!title) {
            const error = new Error('Tên bộ sưu tập không được để trống!');
            error.statusCode = 422;
            throw error;
        }

        const pathSaveFiles = `images/${req.collectorId}/collections`;

        if (req.files.length === 0) {
            return res.status(401).json({
                result: false,
                errorCode: 2
            });
        }
        const result =  await s3Upload(pathSaveFiles, req.files);
        res.locals.image = result[0].key;
        next();
    }catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}, collectionController.createCollection);

module.exports = router;
