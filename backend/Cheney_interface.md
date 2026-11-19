<!-- 姓名：吴宇 | 学号：24001010921 | 时间：2026-11-19 | 大模型：腾讯混元 Hy -->
# Cheney_interface.md · 接口变更记录

> 规则：每次创建或修改接口后**追加**记录，禁止覆盖已有内容。
> 统一响应格式：`{ "code": 0, "msg": "提示信息", "data": {...} }`，`code=0` 成功，非 0 失败。
> 服务端口：`8325`，接口前缀：`/api/`，支持所有跨域访问。

---

## 记录 1 · 修改时间：2026-11-19 14:22

| 项目 | 内容 |
| --- | --- |
| **接口路径** | `/api/db/test` |
| **HTTP 方法** | `POST` |
| **功能** | 用页面填写的用户名与密码实测 MySQL 连接，成功与失败均返回明确提示 |

**请求参数（含示例）**

```json
{
  "WuYu_username": "root",
  "WuYu_password": "123456"
}
```
`Content-Type: application/json`

**响应格式（含 JSON 示例）**

成功：
```json
{
  "code": 0,
  "msg": "数据库连接成功",
  "data": {
    "WuYu_connected": true,
    "WuYu_user": "root@localhost",
    "WuYu_version": "8.0.30",
    "WuYu_database": "WuYu_portal"
  }
}
```

失败（密码错误或用户名缺失）：
```json
{
  "code": 1,
  "msg": "数据库连接失败：Access denied for user 'root'@'localhost'",
  "data": {}
}
```

---

## 记录 2 · 修改时间：2026-11-19 14:22

| 项目 | 内容 |
| --- | --- |
| **接口路径** | `/api/news` |
| **HTTP 方法** | `GET` |
| **功能** | 查询 `WuYu_news` 表全部科技新闻，按发布时间倒序 |

**请求参数（含示例）**：无参数。示例请求 `GET http://localhost:8325/api/news`

**响应格式（含 JSON 示例）**

```json
{
  "code": 0,
  "msg": "科技新闻列表获取成功",
  "data": {
    "WuYu_total": 8,
    "WuYu_list": [
      {
        "WuYu_id": 1,
        "WuYu_title": "国产大模型端侧推理框架开源，手机可离线运行 7B 模型",
        "WuYu_summary": "新框架通过量化与算子融合把 7B 模型内存占用压到 4GB 以内……",
        "WuYu_source": "中国科学报",
        "WuYu_publish_time": "2026-11-18",
        "WuYu_image_url": "images/WuYu_01.svg"
      }
    ]
  }
}
```
失败时 `code` 为 1，`msg` 为具体错误，`data` 为 `{}`。

---

## 记录 3 · 修改时间：2026-11-19 14:22

| 项目 | 内容 |
| --- | --- |
| **接口路径** | `/api/gallery` |
| **HTTP 方法** | `GET` |
| **功能** | 查询 `WuYu_gallery` 表全部图文数据，按主键升序 |

**请求参数（含示例）**：无参数。示例请求 `GET http://localhost:8325/api/gallery`

**响应格式（含 JSON 示例）**

```json
{
  "code": 0,
  "msg": "图文列表获取成功",
  "data": {
    "WuYu_total": 8,
    "WuYu_list": [
      {
        "WuYu_id": 1,
        "WuYu_title": "液冷数据中心集群",
        "WuYu_image_url": "images/WuYu_01.svg",
        "WuYu_description": "单机柜功率密度提升至 40kW，浸没式液冷把 PUE 压到 1.15 以下。",
        "WuYu_category": "数据中心"
      }
    ]
  }
}
```
失败时 `code` 为 1，`msg` 为具体错误，`data` 为 `{}`。
