/* 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy */
(function () {
  'use strict';

  const WuYu_canvas = document.getElementById('WuYu_bgCanvas');
  const WuYu_ctx = WuYu_canvas.getContext('2d');
  const WuYu_particles = [];
  let WuYu_width = 0;
  let WuYu_height = 0;
  let WuYu_mouseX = -1000;
  let WuYu_mouseY = -1000;

  function WuYu_resize() {
    WuYu_width = window.innerWidth;
    WuYu_height = window.innerHeight;
    WuYu_canvas.width = WuYu_width;
    WuYu_canvas.height = WuYu_height;
  }

  function WuYu_createParticles() {
    WuYu_particles.length = 0;
    const WuYu_count = Math.min(110, Math.floor((WuYu_width * WuYu_height) / 14000));
    for (let WuYu_i = 0; WuYu_i < WuYu_count; WuYu_i++) {
      WuYu_particles.push({
        WuYu_x: Math.random() * WuYu_width,
        WuYu_y: Math.random() * WuYu_height,
        WuYu_vx: (Math.random() - 0.5) * 0.45,
        WuYu_vy: (Math.random() - 0.5) * 0.45,
        WuYu_r: Math.random() * 2 + 1
      });
    }
  }

  function WuYu_drawFrame() {
    WuYu_ctx.clearRect(0, 0, WuYu_width, WuYu_height);
    for (let WuYu_i = 0; WuYu_i < WuYu_particles.length; WuYu_i++) {
      const WuYu_p = WuYu_particles[WuYu_i];
      WuYu_p.WuYu_x += WuYu_p.WuYu_vx;
      WuYu_p.WuYu_y += WuYu_p.WuYu_vy;
      if (WuYu_p.WuYu_x < 0 || WuYu_p.WuYu_x > WuYu_width) WuYu_p.WuYu_vx *= -1;
      if (WuYu_p.WuYu_y < 0 || WuYu_p.WuYu_y > WuYu_height) WuYu_p.WuYu_vy *= -1;

      const WuYu_dx = WuYu_p.WuYu_x - WuYu_mouseX;
      const WuYu_dy = WuYu_p.WuYu_y - WuYu_mouseY;
      const WuYu_dist = Math.sqrt(WuYu_dx * WuYu_dx + WuYu_dy * WuYu_dy);
      if (WuYu_dist < 130) {
        WuYu_ctx.beginPath();
        WuYu_ctx.moveTo(WuYu_p.WuYu_x, WuYu_p.WuYu_y);
        WuYu_ctx.lineTo(WuYu_mouseX, WuYu_mouseY);
        WuYu_ctx.strokeStyle = 'rgba(74, 222, 128, ' + (0.35 * (1 - WuYu_dist / 130)) + ')';
        WuYu_ctx.lineWidth = 1;
        WuYu_ctx.stroke();
      }

      WuYu_ctx.beginPath();
      WuYu_ctx.arc(WuYu_p.WuYu_x, WuYu_p.WuYu_y, WuYu_p.WuYu_r, 0, Math.PI * 2);
      WuYu_ctx.fillStyle = 'rgba(191, 219, 254, 0.75)';
      WuYu_ctx.fill();
    }
    requestAnimationFrame(WuYu_drawFrame);
  }

  window.addEventListener('resize', function () {
    WuYu_resize();
    WuYu_createParticles();
  });

  window.addEventListener('mousemove', function (WuYu_event) {
    WuYu_mouseX = WuYu_event.clientX;
    WuYu_mouseY = WuYu_event.clientY;
  });

  WuYu_resize();
  WuYu_createParticles();
  WuYu_drawFrame();
})();
