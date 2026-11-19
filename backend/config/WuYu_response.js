/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
/* 统一 JSON 响应格式：{ code, msg, data }，code=0 成功，非 0 失败 */

function WuYu_sendOk(WuYu_res, WuYu_data, WuYu_msg) {
  return WuYu_res.json({
    code: 0,
    msg: WuYu_msg || '操作成功',
    data: WuYu_data === undefined ? {} : WuYu_data
  });
}

function WuYu_sendFail(WuYu_res, WuYu_msg, WuYu_code) {
  return WuYu_res.json({
    code: WuYu_code || 1,
    msg: WuYu_msg || '操作失败',
    data: {}
  });
}

module.exports = { WuYu_sendOk, WuYu_sendFail };
