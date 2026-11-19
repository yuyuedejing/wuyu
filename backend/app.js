/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
const WuYu_path = require('path');
const WuYu_express = require('express');
const WuYu_cors = require('cors');
require('dotenv').config({ path: WuYu_path.join(__dirname, '.env') });

const WuYu_apiRouter = require('./routes/WuYu_api');

const WuYu_app = WuYu_express();
const WuYu_port = 8325;

/* 支持所有跨域访问 */
WuYu_app.use(WuYu_cors());
WuYu_app.use(function (WuYu_req, WuYu_res, WuYu_next) {
  WuYu_res.setHeader('Access-Control-Allow-Origin', '*');
  WuYu_res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  WuYu_res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (WuYu_req.method === 'OPTIONS') return WuYu_res.sendStatus(204);
  WuYu_next();
});

WuYu_app.use(WuYu_express.json());
WuYu_app.use(WuYu_express.urlencoded({ extended: true }));

/* express.static 托管 frontend 目录，首页可直接访问 http://localhost:8325 */
WuYu_app.use(WuYu_express.static(WuYu_path.join(__dirname, '../frontend')));

/* 所有接口统一 /api/ 前缀，RESTful + MVC */
WuYu_app.use('/api', WuYu_apiRouter);

/* 统一 404 响应 */
WuYu_app.use(function (WuYu_req, WuYu_res) {
  WuYu_res.status(404).json({ code: 404, msg: '接口不存在：' + WuYu_req.originalUrl, data: {} });
});

WuYu_app.listen(WuYu_port, function () {
  console.log('============================================');
  console.log('  WuYu Portal backend running on port ' + WuYu_port);
  console.log('  Open: http://localhost:' + WuYu_port);
  console.log('============================================');
});

module.exports = WuYu_app;
