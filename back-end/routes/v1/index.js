const express = require('express');

const router = express.Router();

const isAuth = require("../../middleware/is-auth");
const authRoutes = require('./auth.route');
const itemRoutes = require('./item.route');
const collectionRoutes = require('./collection.route');

router.use('/auth', authRoutes);

router.use('/items', isAuth, itemRoutes);

router.use('/collections', isAuth, collectionRoutes);

module.exports = router;
