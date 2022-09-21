const express = require('express');
const multer = require("multer");

const router = express.Router();

const itemController = require('../../controllers/item.controller');
const {configFilterFileUpload, renderImage} = require("../../util/helper");
const {s3Upload} = require("../../util/s3Service");

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: configFilterFileUpload()
})

//Get all items
router.get('/', itemController.getItems);

//Get item by id
router.get('/:id', itemController.getItem);

//Create new item
router.post('/', upload.fields([
    {
        name: 'feature_image', maxCount: 1
    },
    {
        name: 'images'
    }
]), async (req, res, next) => {
    try {
        const pathSaveFiles = `images/${req.collectorId}/items/original`;

        if (!req.files.feature_image) {
            return res.status(401).json({
                result: false,
                errorCode: 2
            });
        }

        const resultFeatureImage =  await s3Upload(pathSaveFiles, req.files.feature_image);
        res.locals.resultFeatureImage = resultFeatureImage;

        if (req.files.images) {
            const resultImages = await s3Upload(pathSaveFiles, req.files.images);
            res.locals.resultsImages = resultImages;
            let index = 0;
            for (const file of req.files.images) {
                await Promise.all([
                    renderImage(resultImages[index].key, file, 'small', 360),
                    renderImage(resultImages[index].key, file, 'medium', 640),
                    renderImage(resultImages[index].key, file, 'large', 1280)
                ]);
                index++;
            }
        }
        next();
    }catch (err) {
        console.log(err);
    }
}, itemController.createItem);

module.exports = router;
