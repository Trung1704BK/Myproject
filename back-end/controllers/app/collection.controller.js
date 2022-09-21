const Collection = require("../../models/collection");
const Collector = require("../../models/collector");
const Item = require('../../models/item');


exports.getCollections = async (req, res, next) => {
    try {
        let collections = await Collection.findAll({
            attributes: ['collection_id', 'title'],
            where: {
                status: 1
            },
            include: [
                {
                    model: Item,
                    attributes: ['item_id','name', 'feature_image'],
                    where: {
                        is_deleted: 0
                    },
                    through: {
                        attributes: []
                    },
                    include: {
                        model: Collector,
                        attributes: ['full_name']
                    }
                }
            ]
        });

        if (collections) {
            collections = JSON.parse(JSON.stringify(collections));
            collections.forEach(collection => {
                collection.items.forEach(item => {
                    item.feature_image  = process.env.MEDIA_HOST + item.feature_image;
                });
            });
            res.status(200).json({
                result: true,
                collections: collections
            });
        } else {
            res.status(404).json({
                result: false,
                errorCode: 1
            })
        }
    }catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getLatestCollections = async (req, res, next) => {
    try {
        let latestCollections = await Collection.findAll({
            where: {
                status: 1
            },
            attributes: ['collection_id', 'title', 'image'],
            include: [
                {
                    model: Collector,
                    attributes: ['collector_id', 'full_name', 'avatar']
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 4
        });

        if (latestCollections) {
            latestCollections = JSON.parse(JSON.stringify(latestCollections));
            latestCollections.forEach(collection => {
                collection.image = process.env.MEDIA_HOST + collection.image;
                collection.collector.avatar = process.env.MEDIA_HOST + collection.collector.avatar;
            });
            res.status(200).json({
                result: true,
                data: latestCollections
            });
        } else {
            res.status(404).json({
                result: false,
                errorCode: 1
            })
        }
    }catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getCollectionById = async (req, res, next) => {
    const collectionId = req.params.id;
    try {
        let collection = await Collection.findOne({
            attributes: ['collection_id', 'title'],
            where: {
                collection_id: collectionId,
                status: 1
            },
            include: [
                {
                    model: Item,
                    include: {
                        model: Collector,
                        attributes: ['full_name'],
                    },
                    attributes: ['item_id','name', 'feature_image'],
                    where: {
                        is_deleted: 0,
                        status: 1
                    },
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        if (collection) {
            collection = JSON.parse(JSON.stringify(collection));
            collection.items.forEach(item => {
                item.feature_image  = process.env.MEDIA_HOST + item.feature_image;
            });
            res.status(200).json({
                result: true,
                collection: collection
            });
        } else {
            res.status(404).json({
                result: false,
                errorCode: 1
            })
        }



    }catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
