/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
(function () {
  'use strict';

  const WuYu_apiPath = '/api/gallery';
  const WuYu_apiUrl = window.location.origin + WuYu_apiPath;
  const WuYu_urlLink = document.getElementById('WuYu_apiUrl');
  const WuYu_grid = document.getElementById('WuYu_galleryGrid');
  const WuYu_status = document.getElementById('WuYu_status');
  const WuYu_jsonBox = document.getElementById('WuYu_jsonBox');

  WuYu_urlLink.href = WuYu_apiUrl;
  WuYu_urlLink.textContent = WuYu_apiUrl;

  function WuYu_escapeHtml(WuYu_text) {
    return String(WuYu_text === undefined || WuYu_text === null ? '' : WuYu_text)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function WuYu_renderList(WuYu_list) {
    WuYu_grid.innerHTML = WuYu_list.map(function (WuYu_item) {
      return '<article class="WuYu_item">' +
        '<img class="WuYu_itemImg" src="' + WuYu_escapeHtml(WuYu_item.WuYu_image_url) + '" alt="图集配图">' +
        '<div class="WuYu_itemBody">' +
        '<h3 class="WuYu_itemTitle">' + WuYu_escapeHtml(WuYu_item.WuYu_title) + '</h3>' +
        '<p class="WuYu_itemDesc">' + WuYu_escapeHtml(WuYu_item.WuYu_description) + '</p>' +
        '<div class="WuYu_itemMeta"><span>分类：' + WuYu_escapeHtml(WuYu_item.WuYu_category) + '</span>' +
        '<span>编号 ' + WuYu_escapeHtml(WuYu_item.WuYu_id) + '</span></div>' +
        '</div></article>';
    }).join('');
  }

  async function WuYu_loadGallery() {
    try {
      const WuYu_res = await fetch(WuYu_apiPath);
      const WuYu_json = await WuYu_res.json();
      console.log('[WuYu_gallery] 服务器返回数据:', WuYu_json);
      WuYu_jsonBox.textContent = JSON.stringify(WuYu_json, null, 2);

      if (WuYu_json.code !== 0) {
        console.error('[WuYu_gallery] 接口返回失败:', WuYu_json.msg);
        WuYu_status.textContent = '加载失败：' + WuYu_json.msg;
        WuYu_status.className = 'WuYu_empty';
        return;
      }

      const WuYu_data = WuYu_json.data || {};
      const WuYu_list = WuYu_data.WuYu_list || [];
      WuYu_status.textContent = '已加载 ' + (WuYu_data.WuYu_total || WuYu_list.length) + ' 条图文数据（数据表 WuYu_gallery）';
      WuYu_renderList(WuYu_list);
    } catch (WuYu_error) {
      console.error('[WuYu_gallery] 请求异常:', WuYu_error);
      WuYu_status.textContent = '请求异常：' + WuYu_error.message + '（请确认后端已启动）';
      WuYu_status.className = 'WuYu_empty';
      WuYu_jsonBox.textContent = '请求异常：' + WuYu_error.message;
    }
  }

  WuYu_loadGallery();
})();
