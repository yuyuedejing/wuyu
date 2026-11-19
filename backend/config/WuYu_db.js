/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
const WuYu_path = require('path');
require('dotenv').config({ path: WuYu_path.join(__dirname, '../.env') });
const WuYu_mysql = require('mysql2/promise');

const WuYu_pool = WuYu_mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'WuYu_portal',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
});

module.exports = WuYu_pool;
