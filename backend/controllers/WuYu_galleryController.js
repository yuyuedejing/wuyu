/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
const WuYu_pool = require('../config/WuYu_db');
const WuYu_response = require('../config/WuYu_response');

/* GET /api/gallery —— 图文列表 */
async function WuYu_getGalleryList(WuYu_req, WuYu_res) {
  try {
    const [WuYu_rows] = await WuYu_pool.query(
      'SELECT * FROM WuYu_gallery ORDER BY WuYu_id ASC'
    );
    console.log('[WuYu_gallery] 查询到', WuYu_rows.length, '条图文');
    return WuYu_response.WuYu_sendOk(WuYu_res, {
      WuYu_list: WuYu_rows,
      WuYu_total: WuYu_rows.length
    }, '图文列表获取成功');
  } catch (WuYu_error) {
    console.error('[WuYu_gallery] 查询失败:', WuYu_error.message);
    return WuYu_response.WuYu_sendFail(WuYu_res, '图文数据查询失败：' + WuYu_error.message, 1);
  }
}

module.exports = { WuYu_getGalleryList };
