<!-- 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy -->
# 科技资讯门户 · 全栈课程项目

| 项目信息 | 内容 |
| --- | --- |
| **姓名** | 吴宇 |
| **学号** | 24001010921 |
| **项目名称** | 科技资讯门户 |
| **项目类别** | 自选 |
| **开发模式** | Vibe Coding（提示词驱动） |
| **技术栈** | 原生 HTML/CSS/JS + Node.js/Express + MySQL 8.0 |
| **后端端口** | 8325，接口统一前缀 `/api/` |

## 目录结构

```
├─ AGENTS.md                 项目规则（AI 生成代码依据）
├─ Cheney_prompt.md          提示词记录（追加写入）
├─ readme.md                 本文件
├─ 启动项目.bat              一键启动后端
├─ frontend/
│  ├─ index.html             首页（canvas 背景动画 + 页面导航）
│  ├─ database.html          数据库连接测试页
│  ├─ news.html              科技新闻列表页
│  ├─ gallery.html           图文列表页
│  ├─ css/ js/ fonts/ images/
└─ backend/
   ├─ app.js                 服务入口（8325 + 静态托管 + 跨域）
   ├─ .env                   数据库凭据（已 gitignore）
   ├─ config/               连接池与统一响应
   ├─ routes/               MVC 路由层
   ├─ controllers/          MVC 控制层
   ├─ Cheney_interface.md   接口记录（追加写入）
   └─ Cheney_database.md    建库建表 SQL 记录（追加写入）
```

## 启动方式

1. 确认 MySQL 服务已启动（本机为 `MySQL80`，root 密码见 `backend/.env`）。
2. 双击根目录 **`启动项目.bat`**，后端监听 8325 端口。
3. 浏览器打开 **http://localhost:8325** ，首页可跳转各功能页。

## 接口一览

| 接口 | 方法 | 说明 |
| --- | --- | --- |
| `/api/db/test` | POST | 用填写的用户名密码测试数据库连接 |
| `/api/news` | GET | 科技新闻列表 |
| `/api/gallery` | GET | 图文列表 |

统一响应格式：`{ "code": 0, "msg": "提示信息", "data": {...} }`，`code=0` 成功，非 0 失败。

## 数据库重建

按顺序执行 `backend/Cheney_database.md` 中的 SQL 即可在新机器完整重建数据库与测试数据。

## GitHub Skill 仓库与在线页面

| 项 | 内容 |
| --- | --- |
| **Skill 入口** | 根目录 `SKILL.md`（YAML frontmatter + 项目结构、接口、启动与约定） |
| **GitHub 仓库** | https://github.com/yuyuedejing/wuyu （Public，SSH 公钥推送，走 `ssh.github.com:443`） |
| **在线展示页** | https://yuyuedejing.github.io/wuyu/ |
| **Pages 设置** | Settings → Pages → Deploy from a branch → Branch `main`、Folder `/docs` |

`docs/index.html` 是**零外部依赖**的纯静态展示页（无外链、无脚本、无 fetch），打开即完整展示项目与验收结果。注意：**GitHub Pages 只托管静态文件**，在线页里的 `/api/` 接口不可用；完整功能请双击 `启动项目.bat` 在本地 `http://localhost:8325` 运行。

`.env`、`node_modules/`、`.workbuddy/`（含本地工作日志与数据库密码）均已被 `.gitignore` 排除，不会推到公开仓库。
