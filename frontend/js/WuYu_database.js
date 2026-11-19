/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
(function () {
  'use strict';

  const WuYu_apiPath = '/api/db/test';
  const WuYu_apiUrl = window.location.origin + WuYu_apiPath;
  const WuYu_urlLink = document.getElementById('WuYu_apiUrl');
  const WuYu_form = document.getElementById('WuYu_form');
  const WuYu_msg = document.getElementById('WuYu_msg');
  const WuYu_jsonBox = document.getElementById('WuYu_jsonBox');

  WuYu_urlLink.href = WuYu_apiUrl;
  WuYu_urlLink.textContent = WuYu_apiUrl + '  （POST，需带用户名密码）';

  function WuYu_showMsg(WuYu_text, WuYu_isOk) {
    WuYu_msg.textContent = WuYu_text;
    WuYu_msg.className = 'WuYu_msg ' + (WuYu_isOk ? 'WuYu_msgOk' : 'WuYu_msgErr');
  }

  async function WuYu_testDatabase(WuYu_event) {
    WuYu_event.preventDefault();
    const WuYu_payload = {
      WuYu_username: document.getElementById('WuYu_username').value.trim(),
      WuYu_password: document.getElementById('WuYu_password').value
    };

    try {
      WuYu_showMsg('正在连接数据库...', true);
      const WuYu_res = await fetch(WuYu_apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(WuYu_payload)
      });
      const WuYu_json = await WuYu_res.json();
      console.log('[WuYu_database] 服务器返回数据:', WuYu_json);
      WuYu_jsonBox.textContent = JSON.stringify(WuYu_json, null, 2);

      if (WuYu_json.code === 0) {
        const WuYu_data = WuYu_json.data || {};
        WuYu_showMsg('✓ 连接成功！MySQL ' + WuYu_data.WuYu_version + ' | 用户 ' + WuYu_data.WuYu_user + ' | 数据库 ' + WuYu_data.WuYu_database, true);
      } else {
        console.error('[WuYu_database] 接口返回失败:', WuYu_json.msg);
        WuYu_showMsg('✗ ' + WuYu_json.msg, false);
      }
    } catch (WuYu_error) {
      console.error('[WuYu_database] 请求异常:', WuYu_error);
      WuYu_showMsg('✗ 请求异常：' + WuYu_error.message + '（请确认后端已启动）', false);
      WuYu_jsonBox.textContent = '请求异常：' + WuYu_error.message;
    }
  }

  WuYu_form.addEventListener('submit', WuYu_testDatabase);
})();
