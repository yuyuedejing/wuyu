/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
const WuYu_mysql = require('mysql2/promise');
const WuYu_response = require('../config/WuYu_response');

/* POST /api/db/test —— 用页面填写的用户名密码实测数据库连接 */
async function WuYu_testConnection(WuYu_req, WuYu_res) {
  const WuYu_body = WuYu_req.body || {};
  const WuYu_username = WuYu_body.WuYu_username;
  const WuYu_password = WuYu_body.WuYu_password;
  let WuYu_conn = null;

  if (!WuYu_username || WuYu_password === undefined) {
    return WuYu_response.WuYu_sendFail(WuYu_res, '用户名和密码不能为空', 2);
  }

  try {
    WuYu_conn = await WuYu_mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: WuYu_username,
      password: WuYu_password,
      database: process.env.DB_NAME || 'WuYu_portal',
      port: 3306
    });
    const [WuYu_rows] = await WuYu_conn.query(
      'SELECT VERSION() AS WuYu_version, DATABASE() AS WuYu_database, CURRENT_USER() AS WuYu_user'
    );
    const WuYu_row = WuYu_rows[0];
    console.log('[WuYu_db_test] 连接成功:', WuYu_row);
    return WuYu_response.WuYu_sendOk(WuYu_res, {
      WuYu_connected: true,
      WuYu_user: WuYu_row.WuYu_user,
      WuYu_version: WuYu_row.WuYu_version,
      WuYu_database: WuYu_row.WuYu_database
    }, '数据库连接成功');
  } catch (WuYu_error) {
    console.error('[WuYu_db_test] 连接失败:', WuYu_error.message);
    return WuYu_response.WuYu_sendFail(WuYu_res, '数据库连接失败：' + WuYu_error.message, 1);
  } finally {
    if (WuYu_conn) {
      try { await WuYu_conn.end(); } catch (WuYu_err) { console.error('[WuYu_db_test] 关闭连接异常:', WuYu_err.message); }
    }
  }
}

module.exports = { WuYu_testConnection };
