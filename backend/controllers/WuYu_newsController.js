/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
const WuYu_pool = require('../config/WuYu_db');
const WuYu_response = require('../config/WuYu_response');

/* GET /api/news —— 科技新闻列表 */
async function WuYu_getNewsList(WuYu_req, WuYu_res) {
  try {
    const [WuYu_rows] = await WuYu_pool.query(
      'SELECT * FROM WuYu_news ORDER BY WuYu_publish_time DESC, WuYu_id DESC'
    );
    console.log('[WuYu_news] 查询到', WuYu_rows.length, '条新闻');
    return WuYu_response.WuYu_sendOk(WuYu_res, {
      WuYu_list: WuYu_rows,
      WuYu_total: WuYu_rows.length
    }, '科技新闻列表获取成功');
  } catch (WuYu_error) {
    console.error('[WuYu_news] 查询失败:', WuYu_error.message);
    return WuYu_response.WuYu_sendFail(WuYu_res, '新闻数据查询失败：' + WuYu_error.message, 1);
  }
}

module.exports = { WuYu_getNewsList };
