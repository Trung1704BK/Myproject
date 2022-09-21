const fs = require('fs');
const path = require('path');

const express = require('express');

const router = express.Router();

const Province = require('../../../models/province');

const collectionRoutes = require('./collection.route');
const itemRoutes = require('./item.route');

router.use('/collections', collectionRoutes);

router.use('/items', itemRoutes);

router.get('/permanent_exhibit', (req, res, next) => {
    fs.readFile(path.join(__dirname, '..', '..', '..', 'trung_bay_thuong_xuyen.txt'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(404).json({
                result: false,
                errorCode: 1
            });
        }
        res.status(200).json(JSON.parse(data));
    });
});

router.get('/province', async (req, res, next) => {
    const data1 = [
        {
            province_id: 1,
            title: 'An Giang',
            image: process.env.MEDIA_HOST + 'images/province/' + 'angiang.jpg',
        },
        {
            province_id: 2,
            title: 'Bắc Giang',
            image: process.env.MEDIA_HOST + 'images/province/' + 'bacgiang.jpeg',
        },
        {
            province_id: 3,
            title: 'Bắc Kạn',
            image: process.env.MEDIA_HOST + 'images/province/' + 'backan.jpg',
        },
        {
            province_id: 4,
            title: 'Bạc Liêu',
            image: process.env.MEDIA_HOST + 'images/province/' + 'baclieu.jpg',
        },
        {
            province_id: 5,
            title: 'Bắc Ninh',
            image: process.env.MEDIA_HOST + 'images/province/' + 'bacninh.jpg',
        },
        {
            province_id: 6,
            title: 'Bà Rịa Vũng Tàu',
            image: process.env.MEDIA_HOST + 'images/province/' + 'bariavungtau.jpg',
        },
        {
            province_id: 7,
            title: 'Bến Tre',
            image: process.env.MEDIA_HOST + 'images/province/' + 'bentre.jpg',
        },
        {
            province_id: 8,
            title: 'Bình Định',
            image: process.env.MEDIA_HOST + 'images/province/' + 'binhdinh.jpg',
        },
        {
            province_id: 9,
            title: 'Bình Dương',
            image: process.env.MEDIA_HOST + 'images/province/' + 'binhduong.jpg',
        },
        {
            province_id: 10,
            title: 'Bình Phước',
            image: process.env.MEDIA_HOST + 'images/province/' + 'binhphuoc.jpg',
        },
        {
            province_id: 11,
            title: 'Bình Thuận',
            image: process.env.MEDIA_HOST + 'images/province/' + 'binhthuan.jpg',
        },
        {
            province_id: 12,
            title: 'Cà Mau',
            image: process.env.MEDIA_HOST + 'images/province/' + 'camau.jpg',
        },
        {
            province_id: 13,
            title: 'Cần Thơ',
            image: process.env.MEDIA_HOST + 'images/province/' + 'cantho.jpg',
        },
        {
            province_id: 14,
            title: 'Cao Bằng',
            image: process.env.MEDIA_HOST + 'images/province/' + 'caobang.jpg',
        },
        {
            province_id: 15,
            title: 'Đắk Lắk',
            image: process.env.MEDIA_HOST + 'images/province/' + 'daklak.jpg',
        },
        {
            province_id: 16,
            title: 'Đắk Nông',
            image: process.env.MEDIA_HOST + 'images/province/' + 'daknong.jpg',
        },
        {
            province_id: 17,
            title: 'Đà Nẵng',
            image: process.env.MEDIA_HOST + 'images/province/' + 'danang.jpg',
        },
        {
            province_id: 18,
            title: 'Điện Biên',
            image: process.env.MEDIA_HOST + 'images/province/' + 'dienbien.jpg',
        },
        {
            province_id: 19,
            title: 'Đồng Nai',
            image: process.env.MEDIA_HOST + 'images/province/' + 'dongnai.jpg',
        },
        {
            province_id: 20,
            title: 'Đồng Tháp',
            image: process.env.MEDIA_HOST + 'images/province/' + 'dongthap.jpg',
        },
        {
            province_id: 21,
            title: 'Gia Lai',
            image: process.env.MEDIA_HOST + 'images/province/' + 'gialai.jpg',
        },
        {
            province_id: 22,
            title: 'Hà Giang',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hagiang.jpg',
        },
        {
            province_id: 23,
            title: 'Hải Dương',
            image: process.env.MEDIA_HOST + 'images/province/' + 'haiduong.jpg',
        },
        {
            province_id: 24,
            title: 'Hải Phòng',
            image: process.env.MEDIA_HOST + 'images/province/' + 'haiphong.jpg',
        },
        {
            province_id: 25,
            title: 'Hà Nam',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hanam.jpg',
        },
        {
            province_id: 26,
            title: 'Hà Nội',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hanoi.jpg',
        },
        {
            province_id: 27,
            title: 'Hà Tĩnh',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hatinh.jpg',
        },
        {
            province_id: 28,
            title: 'Hậu Giang',
            image: process.env.MEDIA_HOST + 'images/province/' + 'haugiang.jpg',
        },
        {
            province_id: 29,
            title: 'Hòa Bình',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hoabinh.jpg',
        },
        {
            province_id: 30,
            title: 'Hồ Chí Minh',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hochiminh.jpg',
        },
        {
            province_id: 31,
            title: 'Huế',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hue.jpg',
        },
        {
            province_id: 32,
            title: 'Hưng Yên',
            image: process.env.MEDIA_HOST + 'images/province/' + 'hungyen.jpg',
        },
        {
            province_id: 33,
            title: 'Khánh Hòa',
            image: process.env.MEDIA_HOST + 'images/province/' + 'khanhhoa.jpg',
        },
        {
            province_id: 34,
            title: 'Kiên Giang',
            image: process.env.MEDIA_HOST + 'images/province/' + 'kiengiang.jpg',
        },
        {
            province_id: 35,
            title: 'Kon Tum',
            image: process.env.MEDIA_HOST + 'images/province/' + 'kontum.jpg',
        },
        {
            province_id: 36,
            title: 'Lai Châu',
            image: process.env.MEDIA_HOST + 'images/province/' + 'laichau.jpg',
        },
        {
            province_id: 37,
            title: 'Lâm Đồng',
            image: process.env.MEDIA_HOST + 'images/province/' + 'lamdong.jpg',
        },
        {
            province_id: 38,
            title: 'Lạng Sơn',
            image: process.env.MEDIA_HOST + 'images/province/' + 'langson.jpg',
        },
        {
            province_id: 39,
            title: 'Lào Cai',
            image: process.env.MEDIA_HOST + 'images/province/' + 'laocai.jpg',
        },
        {
            province_id: 40,
            title: 'Long An',
            image: process.env.MEDIA_HOST + 'images/province/' + 'longan.jpg',
        },
        {
            province_id: 41,
            title: 'Nam Định',
            image: process.env.MEDIA_HOST + 'images/province/' + 'namdinh.jpg',
        },
        {
            province_id: 42,
            title: 'Nghệ An',
            image: process.env.MEDIA_HOST + 'images/province/' + 'nghean.jpg',
        },
        {
            province_id: 43,
            title: 'Ninh Bình',
            image: process.env.MEDIA_HOST + 'images/province/' + 'ninhbinh.jpg',
        },
        {
            province_id: 44,
            title: 'Ninh Thuận',
            image: process.env.MEDIA_HOST + 'images/province/' + 'ninhthuan.jpeg',
        },
        {
            province_id: 45,
            title: 'Phú Thọ',
            image: process.env.MEDIA_HOST + 'images/province/' + 'phutho.jpg',
        },
        {
            province_id: 46,
            title: 'Phú Yên',
            image: process.env.MEDIA_HOST + 'images/province/' + 'phuyen.jpg',
        },
        {
            province_id: 47,
            title: 'Quảng Bình',
            image: process.env.MEDIA_HOST + 'images/province/' + 'quangbinh.jpg',
        },
        {
            province_id: 48,
            title: 'Quảng Nam',
            image: process.env.MEDIA_HOST + 'images/province/' + 'quangnam.jpg',
        },
        {
            province_id: 49,
            title: 'Quảng Ngãi',
            image: process.env.MEDIA_HOST + 'images/province/' + 'quangngai.jpg',
        },
        {
            province_id: 50,
            title: 'Quảng Ninh',
            image: process.env.MEDIA_HOST + 'images/province/' + 'quangninh.jpg',
        },
        {
            province_id: 51,
            title: 'Quảng Trị',
            image: process.env.MEDIA_HOST + 'images/province/' + 'quangtri.jpg',
        },
        {
            province_id: 52,
            title: 'Sóc Trăng',
            image: process.env.MEDIA_HOST + 'images/province/' + 'soctrang.jpeg',
        },
        {
            province_id: 53,
            title: 'Sơn La',
            image: process.env.MEDIA_HOST + 'images/province/' + 'sonla.jpeg',
        },
        {
            province_id: 54,
            title: 'Tây Ninh',
            image: process.env.MEDIA_HOST + 'images/province/' + 'tayninh.jpg',
        },
        {
            province_id: 55,
            title: 'Thái Bình',
            image: process.env.MEDIA_HOST + 'images/province/' + 'thaibinh.jpg',
        },
        {
            province_id: 56,
            title: 'Thái Nguyên',
            image: process.env.MEDIA_HOST + 'images/province/' + 'thainguyen.jpg',
        },
        {
            province_id: 57,
            title: 'Thanh Hóa',
            image: process.env.MEDIA_HOST + 'images/province/' + 'thanhhoa.jpg',
        },
        {
            province_id: 58,
            title: 'Tiền Giang',
            image: process.env.MEDIA_HOST + 'images/province/' + 'tiengiang.jpg',
        },
        {
            province_id: 59,
            title: 'Trà Vinh',
            image: process.env.MEDIA_HOST + 'images/province/' + 'travinh.jpg',
        },
        {
            province_id: 60,
            title: 'Tuyên Quang',
            image: process.env.MEDIA_HOST + 'images/province/' + 'tuyenquang.jpg',
        },
        {
            province_id: 61,
            title: 'Vĩnh Long',
            image: process.env.MEDIA_HOST + 'images/province/' + 'vinhlong.jpg',
        },
        {
            province_id: 62,
            title: 'Vĩnh Phúc',
            image: process.env.MEDIA_HOST + 'images/province/' + 'vinhphuc.jpg',
        },
        {
            province_id: 63,
            title: 'Yên Bái',
            image: process.env.MEDIA_HOST + 'images/province/' + 'yenbai.jpg',
        },
    ];

    let provinces = await Province.findAll({
        where: {
            is_deleted: 0
        },
        attributes: [['province_code', 'province_id'], ['name', 'title'], 'image'],
        order: [
            ['order_number', 'ASC']
        ],
        limit: 6
    });

    provinces.forEach(province => {
        province.image = process.env.MEDIA_HOST + 'images/province/' + province.image;
    });

    res.status(200).json({
        result: true,
        data: provinces
    })
})

module.exports = router;
