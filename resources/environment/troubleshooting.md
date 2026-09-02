# 环境排障手册（troubleshooting）

> **用法：** 每项按"现象 → 原因 → 检查 → 修复 → 验证"五段排查；修完必须跑 `environment-check.md` 的对应检查项验证。
> **信息截至：** 2026-08。

## 1. 安装失败

- **现象：** `pip install` 报错中断（网络超时、找不到包、编译失败）。
- **原因：** 源站慢/被墙、包名写错、依赖需要编译（如个别扩展包）。
- **检查：** 看报错第一段：是网络错误还是包不存在；确认包名与 Python 版本匹配。
- **修复：** 换国内镜像安装：`pip install -i https://pypi.tuna.tsinghua.edu.cn/simple <包名>`；如仍失败，用 `pip install --prefer-binary` 避免源码编译。
- **验证：** `pip show <包名>` 能看到版本；再跑最小运行测试。

## 2. 网络 / 代理

- **现象：** API 调用超时、`Connection error`、`SSL` 报错；Git clone 卡住。
- **原因：** 需要代理才能访问境外服务；或公司网络拦截。
- **检查：** `curl -I https://api.deepseek.com` 看是否通；查看系统代理设置是否生效于终端。
- **修复：** 在终端设置代理环境变量（HTTP_PROXY/HTTPS_PROXY）；Git 用 `ghfast` 类加速镜像；确认代理证书被信任（关闭 SSL 校验仅是临时手段）。
- **验证：** 重新执行最小 API 调用。

## 3. API 认证

- **现象：** `401 Unauthorized` / `AuthenticationError` / `Invalid API key`。
- **原因：** key 未设置、设置错变量名、key 无效或已过期、base_url 配错。
- **检查：** 用 1.4 的"只检查不打印"方式确认变量存在；核对 `base_url` 是否与所用服务商一致。
- **修复：** 重新配置 `DEEPSEEK_API_KEY`（不打印值）；确认 base_url 正确（如 DeepSeek 为 `https://api.deepseek.com`）。
- **验证：** 最小调用返回正常。

## 4. 依赖冲突

- **现象：** 安装 A 后 B 报 `ModuleNotFoundError` 或版本不兼容；`langgraph` 装了但 `openai` 缺失。
- **原因：** 混用全局环境、或只装了部分依赖（LangGraph 不自带 openai/pandas/streamlit）。
- **检查：** `pip list` 核对关键包；确认是否在正确的 venv 内（`which python`）。
- **修复：** 新建独立 venv，按 `requirements-lock.txt` 一次装齐；**不要**在全局环境里叠装。
- **验证：** `import` 每个关键包不报错。

## 5. Windows 路径与编码

- **现象：** 路径带中文报 `FileNotFoundError`；读取 CSV/文档乱码；`UnicodeDecodeError`。
- **原因：** Windows 默认编码（GBK）与 UTF-8 文件不匹配；路径分隔符/长路径问题。
- **检查：** 确认文件确实是 UTF-8；路径中是否有中文或空格。
- **修复：** 读写文件时显式 `encoding="utf-8"`；目录名尽量用英文；长路径可在 PowerShell 里 `New-Item -ItemType Directory` 建目录后进入。
- **验证：** 重新读取样本文件并打印前两行。

## 6. 模型限流和超时

- **现象：** `429` / `RateLimitError` / `Timeout` / 长任务中途失败。
- **原因：** QPS/TPM 超限；单次请求超时；并发过高。
- **检查：** 看报错码与重试建议；确认是否多进程并发调用。
- **修复：** 加退避重试（指数退避）；调小并发；单次请求设合理 `max_tokens` 与 `timeout`；长任务分段跑。
- **验证：** 连续 3 次调用全部成功。

## 7. 模型/API 版本不一致

- **现象：** 模型名报 `Model Not Found`；行为与教材描述不符。
- **原因：** 模型名已更新、或用了过期别名。
- **检查：** 对照各实验手册当前使用的模型名与 7.8 动态速查（信息截至 2026-08）。
- **修复：** 改用官方当前模型名；以厂商官方文档为准。
- **验证：** 最小调用返回正常。
