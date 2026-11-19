---
# 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy
name: wuyu-fullstack-portal
description: 吴宇（学号 24001010921）的 Vibe Coding 七阶段全栈课程作业「科技资讯门户」，包含 Node.js/Express + MySQL 8.0 后端、原生 HTML/CSS/JS 前端、RESTful 接口与可独立重建的建库 SQL。当需要查看或复用该作业的项目结构、接口设计、数据库脚本、前端页面与命名约定，或需要了解如何把它发布为 GitHub Pages 静态展示页时使用。
---

<!-- 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy -->

# 科技资讯门户 · 全栈项目 Skill

本仓库既是一个**可本地运行的完整全栈项目**，也是一个**可被 Agent 直接引用的 Skill 仓库**：根目录的 `SKILL.md` 描述了项目结构、启动方式、接口清单与约定，`Cheney_*.md` 三份记录文件保留了完整的提示词、接口与数据库演化过程。

| 项目信息 | 内容 |
| --- | --- |
| **姓名 / 学号** | 吴宇 / 24001010921 |
| **项目名称 / 类别** | 科技资讯门户 / 自选 |
| **开发模式** | Vibe Coding（提示词驱动，大模型：腾讯混元 Hy） |
| **技术栈** | 原生 HTML/CSS/JS + Node.js/Express + MySQL 8.0，无第三方前端库、无 CDN |
| **后端端口** | 8325，接口统一前缀 `/api/` |
| **GitHub 仓库** | https://github.com/yuyuedejing/wuyu |
| **在线展示页** | https://yuyuedejing.github.io/wuyu/ （GitHub Pages，main 分支 /docs） |

## 何时使用

- 需要查看或复用七阶段全栈作业的**目录结构、MVC 分层、统一响应格式**
- 需要查阅 `POST /api/db/test`、`GET /api/news`、`GET /api/gallery` 的**接口定义与字段**
- 需要在新机器上**重建数据库**（含 8+8 条测试数据）
- 需要了解如何把一个带后端的项目**发布为 GitHub Pages 静态展示页**

不适用：想要一个可直接联网使用的动态站点。GitHub Pages 只托管静态文件，在线展示页里的 `/api/` 接口不会工作；完整功能必须本地运行。

## 目录结构

```
├─ SKILL.md                  本文件（Skill 入口）
├─ AGENTS.md                 项目规则（AI 生成代码依据）
├─ Cheney_prompt.md          提示词记录（追加写入）
├─ readme.md                 项目说明
├─ 启动项目.bat              一键启动后端
├─ docs/index.html           GitHub Pages 纯静态展示页（零外部依赖）
├─ frontend/
│  ├─ index.html             首页（canvas 星空动画 + 导航）
│  ├─ database.html          数据库连接测试页
│  ├─ news.html              科技新闻列表页
│  ├─ gallery.html           图文列表页
│  └─ css/ js/ fonts/ images/（8 张自建 SVG 配图）
└─ backend/
   ├─ app.js                 服务入口（8325 + express.static + 跨域）
   ├─ .env                   数据库凭据（已 gitignore，不入库）
   ├─ config/               连接池与统一响应
   ├─ routes/ controllers/   MVC 路由层与控制层
   ├─ Cheney_interface.md   接口记录
   └─ Cheney_database.md    建库建表 SQL 记录
```

## 快速开始（本地运行完整功能）

1. 确认 MySQL 服务已启动，凭据见 `backend/.env`（不入库，不写死在代码里）。
2. 双击根目录 **`启动项目.bat`**，或在 `backend/` 下执行 `node app.js`。
3. 浏览器打开 **http://localhost:8325** ，首页可跳转三个功能页。

数据库可全新重建：按顺序执行 `backend/Cheney_database.md` 中的 SQL 代码块。

## 接口一览

| 接口 | 方法 | 说明 |
| --- | --- | --- |
| `/api/db/test` | POST | 用页面填写的用户名、密码测试数据库连接 |
| `/api/news` | GET | 科技新闻列表（`WuYu_news`） |
| `/api/gallery` | GET | 图文列表（`WuYu_gallery`） |

统一响应：`{ "code": 0, "msg": "提示信息", "data": {...} }`，`code=0` 成功、非 0 失败。

## GitHub 与 Pages

- 推送方式：SSH 公钥（comment `2068866526@qq.com`），本机 22 端口不通，走 `ssh.github.com:443`。
- 仓库为 **Public**，`.env`、`node_modules/`、`.workbuddy/`（含本地工作日志与数据库密码）均已被 `.gitignore` 排除。
- GitHub Pages：Source 选 **Deploy from a branch** → Branch **main**、Folder **/docs**。
- `docs/index.html` 是完全自包含的静态展示页：无外链、无脚本、无 fetch，页面里介绍项目与验收结果，**不会因接口不可用而报错**。

## 项目约定

- CSS 类名、JS 变量/函数名、数据库表名与字段一律以 **`WuYu_`** 开头。
- 每个文件头部含注释块「姓名：吴宇 | 学号：24001010921 | 时间：yyyy-mm-dd | 大模型：腾讯混元 Hy」。
- 三份 `Cheney_*.md` 记录文件一律**追加**写入，禁止覆盖。
- 前端把接口返回的数据与错误信息输出到浏览器控制台。
