# 环境自检清单（environment-check）

> **用途：** 开课前 30–45 分钟完成一次环境自检，确保第 8/10/12 章实操的最小启动条件成立。
> **配套：** 依赖清单见 `requirements-lock.txt`（已由实测环境导出锁定）；报错排查见 `troubleshooting.md`。
> **信息截至：** 2026-08（随版本维护）。
> **实测记录（2026-08）：** 已在 Windows 10/11 + PowerShell + Python 3.11.15 实测通过——7 个核心包 import、chromadb 检索链路、langgraph 路由图（咨询/跨部门/敏感三路）与 interrupt() 恢复语义（前序节点不重跑、中断节点从头重跑、其前副作用重复）均已跑通；opencode 已装（scoop）；**API 连通已实测**（deepseek-chat 正常调用，约 1.4s）。实测发现：chromadb 默认 embedding（英文 MiniLM）对中文政策文档**检索召回差**（"外地户口参保"未召回第十五条），印证第 10 章纪律——**必须用中文 embedding（如 bge-m3）并做"建索引后抽查"**。本机代理 127.0.0.1:17025 未运行时需按 2.2 绕过。

## 0. 通过标准（全部 ✅ 才算环境可用）

| # | 检查项 | 通过判据 |
|---|--------|---------|
| 1 | 操作系统与终端 | 见下表 1.1，至少一种受支持组合可用 |
| 2 | Python 版本 | `python --version` 输出 **3.11 或更高**（全书统一口径） |
| 3 | Git | `git --version` 正常输出 |
| 4 | Node（可选） | `node --version` 正常输出（部分工具链需要） |
| 5 | AI Coding 工具 | `opencode --version`（或所用工具等价命令）正常输出 |
| 6 | API 连通性 | 能完成一次真实 LLM API 调用（见 1.5 最小运行测试） |
| 7 | 环境变量 | `DEEPSEEK_API_KEY` 已设置且**不打印密钥本体**（见 1.4） |
| 8 | 最小运行测试 | 8 章最小 RAG/分类脚本能跑通（见 1.6） |

## 1. 分项检查

### 1.1 操作系统与终端（受支持组合）

| 系统 | 终端 | 支持情况 |
|------|------|---------|
| Windows 10/11 | PowerShell / Windows Terminal | ✅ 推荐（注意路径与编码，见 troubleshooting） |
| macOS | Terminal / iTerm2 | ✅ |
| Linux（Ubuntu/Debian 系） | bash / zsh | ✅ |

> 若使用 Windows，**建议全程用 PowerShell**；避免在 cmd 与 PowerShell 之间混用命令。

### 1.2 检查命令速查

```bash
python --version          # 期望 3.11+
git --version             # 期望 2.x+
node --version            # （可选）期望 18+
opencode --version        # 或所用 AI Coding 工具的等价命令
pip --version             # 期望随 Python 3.11+ 安装
```

### 1.3 Python 版本不符怎么办

- 若为 3.10 及以下：安装 Python 3.11+（官方安装包或 `py -3.11`），**不要**为了本项目降级；
- 多版本并存时，用 `python -m venv .venv` 建独立虚拟环境，并确认 `python` 指向 3.11+（`python --version` 验证）。

### 1.4 环境变量检查（不打印密钥）

```bash
# 正确：只检查是否存在，不打印值
python -c "import os; print('DEEPSEEK_API_KEY', '已设置' if os.environ.get('DEEPSEEK_API_KEY') else '未设置')"
```

> [!CAUTION]
> **禁止** `echo $env:DEEPSEEK_API_KEY` / `print(os.environ['DEEPSEEK_API_KEY'])` 这类打印密钥本体的操作；提交、展示或日志中出现密钥即视为事故。

### 1.5 API 连通性（最小真实调用）

```python
# quick_check.py
import os
from openai import OpenAI

client = OpenAI(api_key=os.environ["DEEPSEEK_API_KEY"], base_url="https://api.deepseek.com")
resp = client.chat.completions.create(
    model="deepseek-chat",
    messages=[{"role": "user", "content": "只回复两个字：正常"}],
    max_tokens=10,
)
print(resp.choices[0].message.content)
```

运行 `python quick_check.py`，期望输出"正常"。若报错，按 `troubleshooting.md` 的"API 认证 / 网络代理 / 限流超时"排查。

### 1.6 最小运行测试（第 8 章最小启动）

在虚拟环境中安装 `requirements-lock.txt` 后，跑通以下最小链路即视为第 8 章启动条件成立：

```python
# min_start.py
from openai import OpenAI
import os

client = OpenAI(api_key=os.environ["DEEPSEEK_API_KEY"], base_url="https://api.deepseek.com")
r = client.chat.completions.create(
    model="deepseek-chat",
    messages=[{"role": "user", "content": "把这句话分为一类：投诉物业不处理。只输出类别名。"}],
    max_tokens=20,
)
print("分类结果：", r.choices[0].message.content)
```

> 第 10 章额外需要向量库（chromadb）与 embedding API 连通性；第 12 章额外需要 langgraph。各实操的具体安装与验证见对应实验手册。

## 2. 环境变量清单（均不提交、不打印值）

| 变量 | 用途 | 必填 |
|------|------|------|
| `DEEPSEEK_API_KEY` | 主 LLM API | ✅ |
| `EMBEDDING_API_KEY` | 第 10 章 embedding API（如硅基流动） | 第 10 章起 |
| `EMBEDDING_BASE_URL` | embedding 服务地址 | 第 10 章起 |

## 3. 完成后登记

```text
操作系统：____  终端：____
Python：____（>=3.11）  Git：____  opencode：____
DEEPSEEK_API_KEY：已设置/未设置
最小运行测试：通过/未通过（原因：____）
```
