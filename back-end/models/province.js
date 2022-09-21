const {DataTypes} = require('sequelize');

const sequelize = require('../util/database');

const Province = sequelize.define('province', {
    province_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    prefix_name: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    region_id: {
        type: DataTypes.INTEGER
    },
    slug: {
        type: DataTypes.STRING
    },
    order_number: {
        type: DataTypes.INTEGER
    },
    is_deleted: {
        type: DataTypes.INTEGER
    }
})

module.exports = Province;
