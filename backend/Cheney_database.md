<!-- 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy -->
# Cheney_database.md · 数据库变更记录

> 规则：每次建表、改表或插入数据后，**按执行顺序追加**对应 SQL（含测试数据 INSERT），禁止覆盖已有内容。
> 仅凭本文件中的所有 SQL 代码块，即可在新机器上完整重建数据库与测试数据。
> 环境：MySQL 8.0.30，数据库 `WuYu_portal`，字符集 `utf8mb4`。

---

## 第 1 次执行 · 2026-11-19 14:20 · 创建数据库

```sql
CREATE DATABASE IF NOT EXISTS WuYu_portal
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_general_ci;
USE WuYu_portal;
```

## 第 2 次执行 · 2026-11-19 14:20 · 创建科技新闻表 WuYu_news

```sql
CREATE TABLE IF NOT EXISTS WuYu_news (
  WuYu_id            INT UNSIGNED  NOT NULL AUTO_INCREMENT COMMENT '新闻主键',
  WuYu_title         VARCHAR(120)  NOT NULL COMMENT '新闻标题',
  WuYu_summary       VARCHAR(300)  NOT NULL COMMENT '新闻摘要',
  WuYu_source        VARCHAR(60)   NOT NULL COMMENT '新闻来源',
  WuYu_publish_time  DATE          NOT NULL COMMENT '发布时间',
  WuYu_image_url     VARCHAR(160)  NOT NULL COMMENT '配图地址（frontend/images 下）',
  PRIMARY KEY (WuYu_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='科技新闻表';
```

## 第 3 次执行 · 2026-11-19 14:20 · 插入 8 条科技新闻测试数据

```sql
INSERT INTO WuYu_news
  (WuYu_title, WuYu_summary, WuYu_source, WuYu_publish_time, WuYu_image_url) VALUES
('国产大模型端侧推理框架开源，手机可离线运行 7B 模型', '新框架通过量化与算子融合把 7B 模型内存占用压到 4GB 以内，中端手机离线即可完成摘要与问答。', '中国科学报', '2026-11-18', 'images/WuYu_01.svg'),
('72 比特超导量子原型机完成可编程逻辑门校准', '研究团队公布新一代量子处理器，单比特与双比特门保真度分别达 99.95% 与 99.2%，支持 100 层以上线路。', '科技日报', '2026-11-17', 'images/WuYu_08.svg'),
('固态电池中试线能量密度突破 400Wh/kg', '硫化物电解质体系样品通过 1000 次循环测试，容量保持率 88%，计划明年进入装车验证阶段。', '财新科技', '2026-11-16', 'images/WuYu_05.svg'),
('RISC-V 架构芯片全球累计出货突破百亿颗', 'MCU 与物联网终端为主力场景，国内厂商贡献超四成出货量，工具链与操作系统适配趋于完善。', '半导体行业观察', '2026-11-15', 'images/WuYu_02.svg'),
('低轨卫星互联网完成首次普通手机直连双向通话', '无外接天线条件下实现语音与短报文业务，下行速率约 12Mbps，面向应急通信与海洋作业场景。', '新华社', '2026-11-14', 'images/WuYu_06.svg'),
('脑机接口临床试验帮助瘫痪受试者恢复手部抓握', '植入式电极配合实时解码算法，受试者可完成握杯、写字等精细动作，信号端到端延迟低于 80ms。', '健康报', '2026-11-13', 'images/WuYu_04.svg'),
('6G 太赫兹外场实验实现 1Tbps 峰值传输', '在 300GHz 频段、200 米距离完成样机验证，为全息通信与通信感知一体化提供链路基础。', '人民邮电报', '2026-11-12', 'images/WuYu_07.svg'),
('AI 蛋白质设计平台开源，先导化合物筛选提速', '平台开放 20 万组结构预测模型，把候选分子初筛周期从数周压缩到 48 小时以内。', '生物世界', '2026-11-11', 'images/WuYu_03.svg');
```

## 第 4 次执行 · 2026-11-19 14:21 · 创建图文表 WuYu_gallery

```sql
CREATE TABLE IF NOT EXISTS WuYu_gallery (
  WuYu_id           INT UNSIGNED  NOT NULL AUTO_INCREMENT COMMENT '图文主键',
  WuYu_title        VARCHAR(120)  NOT NULL COMMENT '图文标题',
  WuYu_image_url    VARCHAR(160)  NOT NULL COMMENT '图片地址（本地自建 SVG）',
  WuYu_description  VARCHAR(300)  NOT NULL COMMENT '图文简介',
  WuYu_category     VARCHAR(60)   NOT NULL COMMENT '分类',
  PRIMARY KEY (WuYu_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='图文列表表';
```

## 第 5 次执行 · 2026-11-19 14:21 · 插入 8 条图文测试数据

```sql
INSERT INTO WuYu_gallery
  (WuYu_title, WuYu_image_url, WuYu_description, WuYu_category) VALUES
('液冷数据中心集群', 'images/WuYu_01.svg', '单机柜功率密度提升至 40kW，浸没式液冷把 PUE 压到 1.15 以下。', '数据中心'),
('12 英寸晶圆光刻车间', 'images/WuYu_02.svg', '光刻、量测与清洗工序在洁净室内联动，良率数据实时回传 MES 系统。', '芯片制造'),
('可回收火箭发射现场', 'images/WuYu_03.svg', '一级火箭完成垂直着陆回收，复用周转周期缩短至 21 天。', '航天工程'),
('具身智能机器人产线', 'images/WuYu_04.svg', '多机协同完成装配与质检，视觉引导定位误差小于 0.2 毫米。', '机器人'),
('光伏储能一体化电站', 'images/WuYu_05.svg', '源网荷储协同调度，晚高峰放电可覆盖园区 3 小时用电。', '新能源'),
('海底光缆铺设作业', 'images/WuYu_06.svg', '跨洋骨干链路施工，单纤容量达 24Tbps，埋设深度按海况动态调整。', '通信网络'),
('MicroLED 巨幕显示墙', 'images/WuYu_07.svg', '像素级自发光无缝拼接，峰值亮度 2000nit，支持 HDR10+。', '显示技术'),
('稀释制冷机中的量子芯片', 'images/WuYu_08.svg', '10mK 极低温环境与多层屏蔽，保障超导量子比特相干时间。', '量子计算');
```

---

> 重建方式：按顺序执行以上 5 个 SQL 代码块即可（本机已用同一份 SQL 实际执行验证）。
