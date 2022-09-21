const Collection = require('../models/collection');


//Create a new collection
exports.createCollection = async (req, res, next) => {
    try {
        const {title} = req.body;

        const image = res.locals.image;

        const collection = await Collection.create({
            title: title,
            image: image,
            collectorId: req.collectorId
        });

        res.status(200).json({
            result: true,
            collection
        });
    }catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
