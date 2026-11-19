/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
const WuYu_express = require('express');
const WuYu_dbController = require('../controllers/WuYu_dbController');
const WuYu_newsController = require('../controllers/WuYu_newsController');
const WuYu_galleryController = require('../controllers/WuYu_galleryController');

const WuYu_router = WuYu_express.Router();

WuYu_router.post('/db/test', WuYu_dbController.WuYu_testConnection);
WuYu_router.get('/news', WuYu_newsController.WuYu_getNewsList);
WuYu_router.get('/gallery', WuYu_galleryController.WuYu_getGalleryList);

module.exports = WuYu_router;
