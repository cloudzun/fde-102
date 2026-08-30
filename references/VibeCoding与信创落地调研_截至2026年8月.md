# Vibe Coding / AI Coding 工具与信创私有化落地调研（截至 2026 年 8 月）

> 调研性质：为 FDE 教科书收集的一手事实材料（两块：A. Vibe Coding 与 AI Coding 工具现状；B. 中国信创/私有化落地现状）。
> 调研口径：当前日期 2026-08-30，数据截至 2026 年 8 月。仅做事实收集，不做教学建议。
> 可信度标注：✅官方（厂商/官方文档/官方发布页）｜⚠️待核验（媒体转述/第三方解读/未能直接核对原文）｜🔶教材提炼（基于公开资料的归纳，非引用原文）。
> 说明：本报告基于搜索引擎返回的标题、摘要与可确认的官方页面整理；个别精确数值未能从摘要直接核验，已逐条标注"待核验"，落地前请按官方页面核对。引用经验帖时已标注"经验表述"。

---

## 0. 关键时间线速览（2025-02 ~ 2026-08）

| 时间 | 事件 | 可信度与来源 |
| :--- | :--- | :--- |
| 2025-02-02 | Andrej Karpathy 在 X 发推提出 "vibe coding" 一词（原推已被广泛引用） | ✅/⚠️ [knowyourmeme 收录（Feb 2, 2025）](https://knowyourmeme.com/photos/3029656-vibe-coding)；⚠️ [HN 讨论（提及推文日期 2025-02-02）](https://news.ycombinator.com/item?id=44433218)；个别资料写 2025-02-09，⚠️待核验 |
| 2025-02-24 | Anthropic 发布 Claude 3.7 Sonnet 并同步推出 Claude Code（命令行 Agent 编程工具） | ✅ [Anthropic 官方新闻《Claude 3.7 Sonnet and Claude Code》](https://www.anthropic.com/news/claude-3-7-sonnet)；✅ [PingWest 中文报道](https://www.pingwest.com/w/302568) |
| 2025-04-16 | OpenAI 开源 Codex CLI（终端编程 agent） | ✅ [TechCrunch](https://techcrunch.com/2025/04/16/openai-debuts-codex-cli-an-open-source-coding-tool-for-terminals/) |
| 2025-05-19 | GitHub Copilot coding agent 进入公开预览（Agent Mode 前身） | ✅ [GitHub Changelog](https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/) |
| 2025-10 前后 | Cursor 发布自研模型 Composer（后续 2.0 转向多智能体、8 个 Agent 并行） | ⚠️ [百度百科 Composer 词条](https://baike.baidu.com/item/Composer/67486402)；⚠️ [计算机世界/中国网报道 Cursor 2.0](https://m.chinaz.com/ainews/22375.shtml)；具体发布日待核验 |
| 2025-11 | Collins 词典将 "vibe coding" 评为 2025 年度词汇 | ✅ [IT之家（2025-11）](https://m.ithome.com/html/895432.htm)；✅ [BBC](https://www.bbc.com/news/articles/cpd2y053nleo)；✅ [TASS](https://tass.com/society/2040125) |
| 2025（下半年） | Garry Tan（YC CEO）开源 gstack（Claude Code 技能套件），后破 10 万 star | ✅ [GitHub garrytan/gstack](https://github.com/garrytan/gstack)（官方仓库）；⚠️ 开源具体日期待核验；✅ [Digg 报道 star 破 10 万](https://digg.com/tech/dcydrrck?rank=28) |
| 2026-02 | Karpathy 提出接续 vibe coding 的新提法（"Agentic Engineering" 等，报道标题），被解读为 vibe coding 进入下一阶段 | ⚠️ [Observer（2026-02）](https://observer.com/2026/02/andrej-karpathy-new-term-ai-coding/) |
| 2026-04-24 | DeepSeek V4 预览版发布并开源；后续报道称昇腾超节点等国产芯片同步适配 | ✅ [广州日报大洋网（2026-04-24）](https://news.dayoo.com/finance/202604/24/171077_54952016.htm)；✅ [澎湃：昇腾超节点支持 DeepSeek V4](https://m.thepaper.cn/newsDetail_forward_33044189) |
| 2026-05-12 | 北京数据出境负面清单拓展至全市域（"数据跨境 3.0"，九大领域） | ✅ [新京报](http://www.bjnews.com.cn/detail/1778512115129552.html)；✅ [北京市政府（2026-05-12）](https://www.beijing.gov.cn/ywdt/gzdt/202605/t20260512_4646632.html) |
| 2026-06-16 | 达梦数据库 DM9 发布七款核心产品（含向量/AI 能力） | ⚠️ [同花顺财经（2026-06-16）](http://stock.10jqka.com.cn/20260616/c677504412.shtml)；✅ [达梦官网 DM9 产品页/文档（向量数据类型手册）](https://eco.dameng.com/community/article/20260316114022A1XPX9ZSU3Z43HEN6B) |
| 2026-07-26 | 开源终端编程 agent opencode（sst/opencode）改名 Anomaly 并发布 v1.18.5 | ⚠️ [oday-bakkour 博客（2026-07-26）](https://oday-bakkour.com/blog/ai-coding-news-july-26-2026) |
| 2026-08 | Claude Code 新增 Auto Mode（2026-08-14 起面向 Pro/Max/Team 用户）等更新 | ⚠️ [IT-BOLTWISE（2026-08）](https://www.it-boltwise.de/claude-auto-mode-und-cross-session-kommunikation-ab-august-ki-agenten-tauschen-befehle-nur-als-text.html)；✅ [Claude Code Docs What's New（2026 W20 等）](https://code.claude.com/docs/en/whats-new/2026-w20) |

---

# A 部分：Vibe Coding / AI Coding 工具现状（截至 2026-08）

## A1. "Vibe Coding" 概念来源与含义

| 要点 | 事实 | 可信度与来源 |
| :--- | :--- | :--- |
| 概念提出者与时间 | Andrej Karpathy（OpenAI 联合创始人）2025 年 2 月初在 X 提出 "vibe coding"：让 AI 顺着"氛围/感觉"写代码，人类大致了解在发生什么即可 | ✅/⚠️ [knowyourmeme 收录（2025-02-02）](https://knowyourmeme.com/photos/3029656-vibe-coding)；⚠️ [HN](https://news.ycombinator.com/item?id=44433218)；⚠️ [Snyk 术语传播研究](https://snyk.io/fr/articles/is-vibe-coding-secure/) |
| 年度词汇 | Collins 词典评 "vibe coding" 为 2025 年度词汇（2025-11 公布） | ✅ [IT之家](https://m.ithome.com/html/895432.htm)；✅ [BBC](https://www.bbc.com/news/articles/cpd2y053nleo)；✅ [Mashable](https://mashable.com/article/vibe-coding-word-of-the-year) |
| 工程角色转变（🔶教材提炼） | 工程师从"手写每一行代码"转向"描述意图 + 审查判断"：写提示/描述期望行为 → 让模型生成 → 人审阅、测试、把关。IBM/Cloudflare 等厂商百科页均有类似表述 | ✅ [IBM 什么是 vibe coding](https://www.ibm.com/cn-zh/think/topics/vibe-coding)；✅ [Cloudflare learning](https://www.cloudflare.com/learning/ai/ai-vibe-coding/) |
| 后续演进（2026） | Karpathy 2026-02 提出接续概念（报道标题为 "Agentic Engineering"/新词），被解读为 vibe coding 正与专业的 Agent 工程走向融合 | ⚠️ [Observer（2026-02）](https://observer.com/2026/02/andrej-karpathy-new-term-ai-coding/)；⚠️ [InfoQ 中文：外行式 vibe coding 与专业 Agent 工程融合](https://www.infoq.cn/article/uLLYdtZdZu9sCQSyUcst)；⚠️ [腾讯云《Vibe Coding 2.0时代的编程实践》](https://cloud.tencent.cn/developer/article/2574887) |

> [!NOTE] 事实结论：vibe coding 作为词条（2025-02 提出、2025-11 入选词典年度词汇）与作为工程范式的演进（2026 与 Agent 工程融合）均有公开记录；"描述意图 + 审查判断"是对该范式的教材化概括（🔶教材提炼），不是 Karpathy 原话逐字引用。

## A2. 主流 AI Coding 工具对比（2026-08 当前状态）

> 说明：以下"当前状态"基于 2026 年上半年~8 月的公开资料；厂商产品迭代极快，精确版本/定价以官方页为准（逐条标注）。

| 工具 | 形态/载体 | 定位 | 代表命令/用法 | 2026-08 现状 | 可信度 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cline** | VS Code 扩展 + CLI（开源） | 开源自主编码 Agent，模型自由选择（可接任意 API） | VS Code 对话面板、CLI headless 模式 | 2026 年仍是主流开源 harness 之一；有 headless/CI 模式；与 Claude Code 常被对比（终端 Agent vs VS Code 扩展） | ✅ [Cline 官方文档 headless mode](https://mintlify.wiki/cline/cline/cline-cli/headless-mode)；⚠️ [Morph 对比（2026）](https://www.morphllm.com/comparisons/cline-vs-claude-code) |
| **Cursor（Composer）** | 桌面 IDE（VS Code 分支） | 智能 IDE：内联补全 + Agent（Composer/多 Agent） | IDE 内 Cmd+K、Agent 面板 | Cursor 2.0 转向多智能体并发布自研模型 Composer（后续 Composer 2.5 等版本迭代）；"Composer" 既指产品面板也指其自研编码模型 | ⚠️ [腾讯云：Cursor 2.0 多智能体 + Composer 模型](https://cloud.tencent.com.cn/developer/article/2720944)；⚠️ [极客公园：Cursor 集成 K3 背后模型与工具变局（2026）](https://www.geekpark.net/news/368840)；⚠️ [36氪：Cursor 用 Composer 2.5 反击 Claude Code](https://www.36kr.com/p/3815548495142404)；✅/⚠️ [品玩 Composer 2.5 报道](https://www.pingwest.com/w/313827) |
| **GitHub Copilot（Agent Mode / coding agent）** | IDE 内（VS Code/VS/JetBrains）+ CLI | 编码助手 → Agent 模式（自动读代码、改、跑测试） | Agent Mode、Copilot CLI agent | 2025-05-19 coding agent 公开预览；2025-05-13 起 JetBrains 引入 Copilot CLI agent 与统一会话视图；2026 持续月度更新（VS 4 月/7 月更新）；GitHub 推出 Agent HQ 平台 | ✅ [GitHub Changelog：coding agent 公开预览（2025-05-19）](https://github.blog/changelog/2025-05-19-github-copilot-coding-agent-in-public-preview/)；✅ [GitHub Changelog：JetBrains Copilot CLI agent（2026-05-13）](https://github.blog/changelog/2026-05-13-introducing-copilot-cli-agent-and-unified-sessions-view-in-github-copilot-for-jetbrains-ides/)；✅ [GitHub 新闻稿：Coding Agent](https://github.com/newsroom/press-releases/coding-agent-for-github-copilot)；⚠️ [SDTimes：GitHub Agent HQ](https://sdtimes.com/ai/github-unveils-agent-hq-the-next-evolution-of-its-platform-that-focuses-on-agent-based-development/) |
| **Claude Code** | 终端 CLI（官方） | Anthropic 官方 Agent 编程工具：终端内读库、改码、跑命令、提交；支持 Skills/Subagents/hooks | `claude` 命令、`/skills`、slash 命令、Auto Mode | 2025-02-24 随 Claude 3.7 推出；2025-10 发布 Skills 机制；2026 持续迭代（What's New 周更，Auto Mode 2026-08 推出）；MIT 2025 AI Agent Index 收录 | ✅ [Anthropic 官方新闻](https://www.anthropic.com/news/claude-3-7-sonnet)；✅ [Claude Code Docs What's New](https://code.claude.com/docs/en/whats-new/2026-w20)；✅ [Claude 官方博客 Introducing Agent Skills（2025-10）](https://claude.com/blog/skills)；⚠️ [Taskade 历史时间线（2026）](https://www.taskade.com/blog/claude-code-history)；⚠️ [IT-BOLTWISE：Auto Mode（2026-08）](https://www.it-boltwise.de/claude-auto-mode-und-cross-session-kommunikation-ab-august-ki-agenten-tauschen-befehle-nur-als-text.html) |
| **OpenAI Codex** | 云端平台 + CLI（开源） | OpenAI 编程 Agent：云端沙箱自动改代码、跑测试、提 PR；CLI 面向终端 | Codex CLI（`codex`）、云端任务 | 2025-04-16 开源 Codex CLI；2025-05 前后上线云端平台（"AI 程序员"）；2026 持续更新（2026-04 平台更新；报道称 Codex 开始"反杀"Claude Code） | ✅ [TechCrunch（2025-04-16）](https://techcrunch.com/2025/04/16/openai-debuts-codex-cli-an-open-source-coding-tool-for-terminals/)；⚠️ [36氪：Codex 是否反超 Claude Code](https://eu.36kr.com/zh/p/3950425889019785)；⚠️ [钛媒体同题报道](https://www.tmtpost.com/8112879.html)；⚠️ [知乎专栏 Codex CLI 深度分析](https://grapecity.csdn.net/6a9302442b83d06f0ec98f9d.html)；⚠️ [澎湃：Codex 非码农也能用（2026）](https://m.thepaper.cn/newsdetail_forward_33296711) |
| **OpenHands** | 开源平台（前身 OpenDevin） | 自主软件开发 Agent：面向任务的自动编码（非 IDE 绑定） | 平台任务、CLI、Docker 环境 | 2026 年仍在迭代（6.4 万 star 重构报道）；社区评价"免费自主编码" | ⚠️ [AI Agent Index Review（2026）](https://theaiagentindex.com/blog/openhands-review-2026)；⚠️ [网易：OpenHands 重大升级](https://www.163.com/dy/article/KE0EBOCL05568W0A.html)；⚠️ [aiwiki 词条](https://aiwiki.ai/wiki/openhands) |
| **opencode（sst/opencode → Anomaly）** | 终端 CLI（开源） | 终端开源 AI 编码 Agent，模型无关（可接任意 provider） | `opencode` 终端命令 | 2025 年由 SST 团队开源走红；2026-07-26 改名 Anomaly 并发 v1.18.5 | ✅/⚠️ [oday-bakkour 报道（2026-07-26）](https://oday-bakkour.com/blog/ai-coding-news-july-26-2026)；⚠️ [阿里云开发者社区：OpenCode 解读](https://developer.aliyun.com/article/1742434)；⚠️ [知乎：OpenCode 从 0 到 100K Star](https://zhuanlan.zhihu.com/p/2008691009807201171)；⚠️ [CSDN：OpenCode（sst/opencode）完整详解](https://blog.csdn.net/tongbowen_123/article/details/162051321) |
| **Kimi Code / 国产替代** | IDE/CLI（月之暗面） | 国内可用 AI 编程工具（因 Claude Code/Cursor 等海外工具对国内访问受限） | 国内 IDE 插件/CLI | 2026 年国内出现"Claude Code 替代方案"话题；Kimi Code、通义/文心等厂商跟进 | ⚠️ [极客公园（2026）](https://www.geekpark.net/news/368943)；⚠️ [ZOL：2026 国内 Claude Code 替代方案观察](https://news.zol.com.cn/1230/12302786.html)；⚠️ [ZOL：Claude Code 国内无法使用三类解决办法](https://news.zol.com.cn/1238/12389138.html) |

> [!NOTE] 读法指引：上表 7 个国际主流工具 + 1 行国产替代。横向维度可归纳为 **IDE 内 Agent（Cursor/Copilot）vs 终端 Agent（Claude Code/Codex CLI/opencode）vs 开源自托管平台（Cline/OpenHands）**；2026 年趋势是 harness（工具外壳）与模型解耦、模型可自由替换，以及 Agent 从"单任务助手"走向"多 Agent 编排"（Cursor 2.0 多智能体、Claude Code Subagents/Skills、Copilot Agent HQ）。此归纳为🔶教材提炼。

## A3. gstack 工作流框架（Garry Tan / YC）

### A3.1 基本事实

| 要点 | 事实 | 可信度与来源 |
| :--- | :--- | :--- |
| 作者与载体 | Y Combinator CEO Garry Tan 开源的 Claude Code 技能套件（SKILL.md 集合），把他的个人工作流固化为可复用技能 | ✅ [GitHub garrytan/gstack（官方仓库）](https://github.com/garrytan/gstack)；⚠️ [Sitepoint：Garry Tan 的 gstack 教程](https://www.sitepoint.com/gstack-garry-tan-claude-code/) |
| 当前规模 | 10 万+ star（2026）；有报道称 3 个月破 11.3 万 star | ✅ [Digg（2026）](https://digg.com/tech/dcydrrck?rank=28)；⚠️ [腾讯云：gstack 3 个月破 113k stars](https://cloud.tencent.com.cn/developer/article/2699048) |
| 载体机制 | 基于 Claude Code Skills / Agent Skills（官方 2025-10 发布），也适配 Codex、OpenCode 等支持 Agent Skills 的运行时（有社区移植 gstack-codex） | ✅ [Claude 官方博客 Introducing Agent Skills](https://claude.com/blog/skills)；⚠️ [GitHub phd-peter/gstack-codex](https://github.com/phd-peter/gstack-codex) |

### A3.2 "八环节工作流" vs "七环节"：口径辨析

| 说法 | 内容 | 可信度 |
| :--- | :--- | :--- |
| 八环节（用户方口径） | office-hours → spec → autoplan → build → review → qa → ship → retro，每个环节对应一个 skill/命令 | 🔶教材提炼（基于 gstack 仓库技能名归纳；官方仓库未给出固定编号的"八环节"总表，需按官方 skills.md 核对） |
| 官方核心闭环 | gstack 官方 SKILL.md 自述："gstack pays off when you complete one loop — **plan → review → ship**"（完成一轮 plan→review→ship 才见效） | ✅ [garrytan/gstack plan-ceo-review/SKILL.md](https://raw.githubusercontent.com/garrytan/gstack/main/plan-ceo-review/SKILL.md) |
| 官方技能数量 | GitHub 仓库自述为 "23 opinionated tools"（23 个技能，充当 CEO/设计/工程经理/发布经理/文档工程师/QA 等角色） | ✅ [GitHub garrytan/gstack README](https://github.com/garrytan/gstack) |
| 七环节说法 | 部分中文技术文章概括为"23 个 AI 技能、7 步工作流"（把核心循环提炼成 7 步） | ⚠️ [腾讯云：gstack 最佳实战 23 技能 7 步工作流](https://cloud.tencent.cn/developer/article/2658135)；⚠️ 经验表述 |
| "八环节"是否官方 | 未见 gstack 官方给出"八环节"的权威编号；第三方文档有 "8 Power Tools" / "8 个专家技能" 表述（对应 plan-ceo-review、plan-devex-review、office-hours、spec、autoplan、build、review、qa、ship、retro 等技能子集，各家取数口径不一） | ⚠️ [tryhamster：Orchestrating gstack's 8 Power Tools](https://tryhamster.com/skills/orchestrating-power-tools-in-gstack-workflows)；⚠️ [subagentic：8 个专家 Agent](https://subagentic.ai/howtos/garry-tan-gstack-claude-code-multi-agent-team/)；⚠️ [aitoolly：Eight Opinionated Specialist Skills](https://aitoolly.com/product/gstack) |

> [!IMPORTANT] 事实结论：**"八环节"（office-hours→spec→autoplan→build→review→qa→ship→retro）是教材/媒体对 gstack 技能集的归纳提炼（🔶），不是官方总表**；官方仓库的稳定口径是"23 个 opinionated tools"与核心闭环"plan → review → ship"。"七环节"说法同样为传播提炼（⚠️第三方文章），两者只是对同一技能集的不同切分。教材若引用，应写"gstack 技能套件（官方 23 个技能）"并给出官方仓库链接，八环节作为教材归纳展示。

### A3.3 已确认存在于官方仓库的核心技能（可按名核对）

| 技能（目录名） | 作用（据 SKILL.md 标题/摘要） | 可信度 |
| :--- | :--- | :--- |
| office-hours | 会话启动检查：是否激活、首轮提示等（YC 式强制问题重构方向，据中文解读） | ✅ [office-hours/SKILL.md](https://github.com/garrytan/gstack/blob/main/office-hours/SKILL.md)；⚠️ [UML 中文解读：六个强制性问题](http://www.uml.org.cn/ai/202607134.asp) |
| spec | 编写 backlog-ready 的 spec（据中文解读） | ⚠️ [UML 中文解读](http://www.uml.org.cn/ai/202607134.asp)；⚠️ 官方目录待核对 |
| autoplan | 计划生成/审查（中文解读："计划通过 autoplan 审查"） | ⚠️ [cnblogs 实践文](https://www.cnblogs.com/jockming/p/20797655)；⚠️ 官方目录待核对 |
| plan-ceo-review | 策略/范围审查（"Strategy/scope → invoke /plan-ceo-review"） | ✅ [plan-ceo-review/SKILL.md](https://github.com/garrytan/gstack/blob/main/plan-ceo-review/SKILL.md) |
| plan-devex-review | 开发者体验审查（"Strategy/scope → invoke /plan-devex-review"） | ✅ [plan-devex-review/SKILL.md](https://github.com/garrytan/gstack/blob/main/plan-devex-review/SKILL.md) |
| review | 代码审查/差异检查（"Code review/diff check → invoke /review"） | ✅ [setup-deploy/SKILL.md 转述](https://github.com/garrytan/gstack/blob/main/setup-deploy/SKILL.md)；⚠️ 官方目录待核对 |
| retro | 复盘（"Full review pipeline → invoke /autoplan"，即复盘后回到规划） | ✅ [retro/SKILL.md](https://github.com/garrytan/gstack/blob/main/retro/SKILL.md) |
| setup-deploy | 部署/上线（"Code review/diff check → invoke /review"） | ✅ [setup-deploy/SKILL.md](https://github.com/garrytan/gstack/blob/main/setup-deploy/SKILL.md) |
| 其他（plan-tune、make-pdf、learn 等） | 调优、PDF 生成、跨会话学习等辅助技能 | ✅ [官方 docs/skills.md](https://github.com/garrytan/gstack/blob/main/docs/skills.md)；✅ [plan-tune/SKILL.md](https://github.com/garrytan/gstack/blob/main/plan-tune/SKILL.md) |

> 注：build / qa / ship 三个目录名在检索摘要中未逐一独立出现，可能包含在 autoplan→review→setup-deploy 等环节或社区版本中，**落地前请在官方仓库目录逐项核对**（⚠️待核验）。

## A4. AI 原生开发纪律（前沿方法论，2025-2026）

| 纪律（用户口径） | 公开方法论佐证 | 可信度与来源 |
| :--- | :--- | :--- |
| 先写 SPEC 再动手（SPEC-driven） | SpecOps：sanmak/specops（spec-driven development 开源方法/CLI，GitHub 仓库 + speckit-specops PyPI 包）；社区 spec-driven-development 指南（Anioko，含成熟度分级、PRD-to-app demo）；spec-ops-action（GitHub Action 支持 SpecOps 方法论） | ✅ [GitHub sanmak/specops](https://github.com/sanmak/specops)；✅ [PyPI speckit-specops](https://pypi.org/project/speckit-specops/0.5.0/)；⚠️ [GitHub Anioko/spec-driven-development](https://github.com/Anioko/spec-driven-development)；✅ [GitHub spec-ops-method/spec-ops-action](https://github.com/spec-ops-method/spec-ops-action) |
| 测试数据必须外部给定、规格冻结（frozen spec） | make-no-mistakes：官方 README 明确"frozen specs, tamper-detected tests, an independent blind verifier, hard-blocking gates……No unverified work passes"（冻结规格、防篡改测试、独立盲验证、硬阻断门禁）；有中文实战教程 | ✅ [GitHub momomuchu/make-no-mistakes](https://github.com/momomuchu/make-no-mistakes)；✅ [jonathanong/no-mistakes CLAUDE.md](https://github.com/jonathanong/no-mistakes/blob/main/CLAUDE.md)；⚠️ [tinyash 中文实战教程](https://www.tinyash.com/blog/make-no-mistakes-verification-harness-tutorial/) |
| 启动提示词写全信息块 | 属于 gstack/Claude Code Skills 实践的一部分（office-hours 首轮检查、AGENTS.md 角色设定）；SpecOps 亦要求 spec 元数据完整 | 🔶教材提炼（gstack、specops 资料均体现"启动即提供完整上下文/规格"的实践）；✅ 佐证见 [garrytan/gstack office-hours](https://github.com/garrytan/gstack/blob/main/office-hours/SKILL.md) |
| 禁止全自动一把梭（人审门禁） | make-no-mistakes 的"独立盲验证 + 硬阻断门禁"、TDD 类 specmint-tdd（严格 red-green-refactor、TEST-IMPL 任务对、TDD Log 审计）；"maker != checker"（Looptimal 等工具） | ✅ [GitHub make-no-mistakes](https://github.com/momomuchu/make-no-mistakes)；⚠️ [GitHub ngvoicu/specmint-tdd](https://github.com/ngvoicu/specmint-tdd)；⚠️ [GitHub Renn-Labs/Looptimal](https://github.com/Renn-Labs/Looptimal) |
| 其他前沿框架（供横向） | OpenSpec、Superpowers（obra）、RalphLoop 等 2026 年常被并列讨论的 AI 编程工作流框架 | ⚠️ [UML 中文：四大框架（2026-07-13）](http://www.uml.org.cn/ai/202607134.asp)；⚠️ 经验表述 |

> [!NOTE] 事实结论：2025-2026 年出现了一批以"规格先行 + 强制验证 + 人审门禁"为共同内核的开源方法论（SpecOps、make-no-mistakes、specmint-tdd 等），与"先写 SPEC 再动手、测试数据外部给定、规格冻结、禁止全自动一把梭"的教材纪律方向一致。这些是社区开源项目（非大厂官方标准），引用时应以"社区方法论"定位。

---

# B 部分：中国信创 / 私有化落地现状（截至 2026-08）

## B1. 数据不出域的合规驱动

| 要点 | 事实 | 可信度与来源 |
| :--- | :--- | :--- |
| PIPL（《个人信息保护法》） | 2021-11-01 施行，确立个人信息出境三路径：安全评估、标准合同（个人信息出境标准合同办法 2023-11 公布）、保护认证 | ✅ [中国政府网：个人信息出境标准合同办法](https://www.gov.cn/zhengce/202311/content_6917770.htm)；⚠️ [京师深圳律所：出境三路径](http://www.jingshsz.com/show-19-361-1.html) |
| 《促进和规范数据跨境流动规定》 | 国家网信办令第 16 号，2024-03-22 公布（同日施行）；规定六种豁免个人信息出境事前监管的情形（含必要情形下员工信息、合同履约必要等）；纳入国务院公报 | ✅ [中国政府网：国家网信办令第 16 号全文](https://www.gov.cn/gongbao/2024/issue_11366/202405/content_6954192.html)；✅ [网信办官网发布页（2024-03-22）](https://www.cac.gov.cn/2024-03/22/c_1712776611775634.htm)；⚠️ [中央财经大学法学评论解读：六种豁免](http://cjfx.cufe.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1537964865&wbfileid=9B8E1CB71D9F16675F29E592BC88FA85) |
| 数据出境安全评估进度 | 网信办披露已完成数据出境安全评估项目 298 个（2025-04 数字中国建设峰会口径）；另一报道口径为 285 个、超九成通过；2025-03 报道"评估用时大幅缩减" | ✅ [数字中国建设峰会官网（2025-04-14）](https://www.szzg.gov.cn/2025/xwzx/qwfb/202504/t20250414_5003887.htm)；⚠️ [安全内参：285 个超九成通过](https://www.secrss.com/articles/74212)；✅ [新华网：评估用时大幅缩减（2025-03-21）](https://www.news.cn/politics/20250321/00c2fcd43af64adfad27a2be1d00a0a0/c.html)（298 vs 285 口径差异⚠️待核验） |
| 自贸区负面清单（2024-2026） | 上海（2024-05 首份负面清单）、广东（2024 负面清单发布）、北京（2026-05-12 拓展至全市域、覆盖九大领域，"数据跨境 3.0"） | ✅ [北京政府（2026-05-12）](https://www.beijing.gov.cn/ywdt/gzdt/202605/t20260512_4646632.html)；✅ [新京报：负面清单覆盖九大领域](http://www.bjnews.com.cn/detail/1778512115129552.html)；⚠️ [广东自贸区负面清单政策（贸法通）](https://www.ctils.com/articles/26166)；⚠️ [京沪负面清单全域落地（搜狐）](https://www.sohu.com/a/1021590820_120988576) |
| 政企对公有云 API 的顾虑 | 媒体/行业共识：政务、金融、央企因数据合规（数据不出域、等保、保密）倾向私有化/一体机部署；"数据不出域是底线"成为政企 AI 方案宣传口径；密态计算被视为企业 AI 落地"最后一公里" | ⚠️ [中国经济时报：政企 AI 智能体私有化部署数据不出域是底线](https://www.cet.com.cn/itpd/itxw/10522061.shtml)；⚠️ [树上网：私有化 AI 知识库成为中大型企业主流选择](https://m.shushangyun.com/article-40027.html)；⚠️ [北京青年报：政企办公安全可控、AI 原生](https://news.bjd.com.cn/2026/06/17/11811578.shtml)；⚠️ [北青网：密态计算（2026-05-12）](http://finance.ynet.com/2026/05/12/4008756t632.html)；⚠️ [HR-soft：国企大模型应用合规指南（2026-07-24）](https://www.hr-soft.cn/info/2026072452261.html) |
| 大模型进内网后的市场逻辑 | "大模型进不了内网之后，企业 AI 的生意才真正开始"——行业分析文章：私有化/内网部署成为政企 AI 商业化主战场 | ⚠️ [钛媒体（2026）](https://www.tmtpost.com/8070771.html)（经验表述/行业分析） |

## B2. 信创技术栈替换现状（截至 2026-08）

### B2.1 国产数据库（达梦 / 人大金仓）

| 产品 | 现状 | 可信度与来源 |
| :--- | :--- | :--- |
| 达梦数据库 DM9 | 2026 年发布新一代产品线：2026-05 香港新品发布会、2026-06-16 发布七款核心产品；官方社区有"向量数据类型"开发手册与版本引入问答（向量类型由某版本引入，具体版本号见社区问答）；发布 DM9 向量类型体验文章 | ✅ [达梦官方社区：DM9 向量数据开发入门手册（2026-03-16）](https://eco.dameng.com/community/article/20260316114022A1XPX9ZSU3Z43HEN6B)；✅ [达梦官方社区：向量类型版本问答](https://eco.dameng.com/community/question/ed5c59f644509d61076c77c35ec62976)；⚠️ [同花顺：DM9 七款核心产品（2026-06-16）](http://stock.10jqka.com.cn/20260616/c677504412.shtml)；⚠️ [人民网湖北：2026 香港发布会（2026-05-16）](http://hb.people.com.cn/n2/2026/0516/c406123-41582253.html) |
| 人大金仓 KES（KingbaseES） | 2025-07-15 发布 KES V9 2025（支持关系、向量、图、文档多模一体化）；2026 年发布融合型关系数据库 KES V9 2026（多模、向量能力、性能提升）；官方大量向量检索/混合检索/国产向量库选型技术博客 | ✅ [金仓官网：KES V9 2026 发布](https://www.kingbase.com.cn/explore/tech-blog/%e9%87%91%e4%bb%93%e5%8f%91%e5%b8%83%e8%9e%8d%e5%90%88%e5%9e%8b%e5%85%b3%e7%b3%bb%e6%95%b0%e6%8d%ae%e5%ba%93kes-v9-2026%ef%bc%9a%e7%bb%9f%e4%b8%80%e7%ae%a1%e7%90%86%e5%a4%9a%e6%a8%a1%e6%95%b0%e6%8d%ae/)；⚠️ [大成资讯：2025-07-15 技术发布会 KES V9 2025 四款产品](https://www.dacheng.com/UpLoadFile/Files/2025/8/4/%E3%80%8A%E5%A4%A7%E6%88%90%E6%95%B0%E5%AD%97%E4%B8%9A%E5%8A%A1%E4%B8%AD%E5%BF%83%E8%B5%84%E8%AE%AF%E3%80%8B2025%E5%B9%B47%E6%9C%88%E5%88%86%E5%88%8A.pdf)；⚠️ [同花顺：太极股份子公司电科金仓 KES V9 2025（2026-05-15）](https://finance.eastmoney.com/a/202605153738715152.html) |
| 国产向量数据库全景 | 国产向量库存在两大技术流派（数据库内置向量 vs 独立向量库），选型资料丰富；金仓官方有"国产向量数据库全景：优缺点对比与选型指南" | ⚠️ [腾讯云：国产向量数据库两大流派对比（这个 DBA 有点耶）](https://cloud.tencent.com.cn/developer/article/2692034)；⚠️ [金仓：国产向量数据库全景](https://www.kingbase.com.cn/explore/tech-blog/%e5%9b%bd%e4%ba%a7%e5%90%91%e9%87%8f%e6%95%b0%e6%8d%ae%e5%ba%93%e5%85%a8%e6%99%af%ef%bc%9a%e4%bc%98%e7%bc%ba%e7%82%b9%e5%af%b9%e6%af%94%e4%b8%8e%e9%80%89%e5%9e%8b%e6%8c%87%e5%8d%97/)（经验表述） |

### B2.2 国产操作系统（麒麟）

| 要点 | 事实 | 可信度与来源 |
| :--- | :--- | :--- |
| 银河麒麟产品线 | 银河麒麟服务器操作系统、桌面操作系统；2026 年发布 V11 系列（银河麒麟桌面操作系统 V11；服务器 V11 相关动态）；V11 获 CITE2026 最高奖"创新金奖"（2026-04 前后） | ✅ [麒麟软件官网：服务器操作系统发行说明](https://www.kylinos.cn/issueNote/serverNote/2068954413609967617.html)；✅ [麒麟软件官网：桌面操作系统发行说明](https://www.kylinos.cn/issueNote/desktopNote/2066723466357432321.html)；✅ [天津高新区：银河麒麟 V11 获 CITE2026 金奖](https://tht.gov.cn/contents/16942/612307.html) |
| 2026 动态 | 天津智博会（2026-06-02）：麒麟软件双新品发布，端侧智能体首次亮相 | ✅ [中国工业新闻网（2026-06-02）](https://www.cinn.cn/2026/06-02/01nQ5p6k.html) |
| 市场格局 | 政府采购标准划定基线：银河麒麟、华为云欧拉、中兴等构建国产 OS 新格局；2026 国产 OS 市场多厂商布局、核心行业深度渗透 | ⚠️ [C114：政府采购标准与国产 OS 格局](http://www.c114.net.cn/industry/68404.html)；⚠️ [PConline：2026 国产操作系统市场](https://g.pconline.com.cn/x/2135/21351931.html) |

### B2.3 国产 AI 芯片与算力（昇腾 / 鲲鹏）

| 要点 | 事实 | 可信度与来源 |
| :--- | :--- | :--- |
| 昇腾硬件 | Atlas 800I A2 推理服务器、Atlas 800T A2 训练服务器、910B 推理卡、昇腾超节点等产品线 | ✅ [华为官网：Atlas 800I A2 推理服务器](https://e.huawei.com/cn/products/computing/ascend/atlas-800i-a2)；⚠️ [百度百科：910B 推理卡](https://baike.baidu.com/item/910B%E6%8E%A8%E7%90%86%E5%8D%A1/66314733) |
| 软件栈 | CANN（商用版 8.0.0 文档存在）；MindIE 推理引擎（2.0.RC1、2.3.0 文档存在）；MindIE 支撑 DeepSeek 等大模型部署；SGLang 官方支持昇腾 NPU | ✅ [昇腾社区：CANN 商用版 8.0.0 文档](https://www.hiascend.com/document/detail/zh/canncommercial/800/quickstart/index/index.html)；✅ [昇腾社区：MindIE 2.3.0 文档](https://www.hiascend.com/document/detail/en/mindie/230/index/index.html)；✅ [SGLang 文档：Ascend NPU 支持模型](https://docs.sglang.io/docs/hardware-platforms/ascend-npus/ascend_npu_support_models)；⚠️ [华为开发者论坛：Atlas 800T A2 跑 DeepSeek-R1-Distill（MindIE 部署踩坑）](https://developer.huawei.com/home/forum/ascend/thread-02200221451283408291-1-1.html)（经验表述） |
| 鲲鹏 ARM 服务器 | 中国电信 2026 年 115 亿元国产服务器集采落地，鲲鹏生态占比超 70%；神州数码中标中国移动两年期服务器集采（13.41 亿框架锁定 ARM 算力信创增量，2026-07） | ⚠️ [ZOL：中国电信 115 亿集采鲲鹏占比超 70%](https://dt.zol.com.cn/1204/12046057.html)；⚠️ [金融界：神州数码中标中国移动（2026-07-02）](https://stock.jrj.com.cn/2026/07/02190557673331.shtml) |
| 国产 AI 芯片格局 | 《2026 中国国产 AI 芯片厂商能力象限》发布：三强领跑（昇腾、海光、寒武纪等）、梯队分化、国产算力进入放量期；行业报告称国产芯片与超节点放量在即 | ⚠️ [信创世界：2026 国产 AI 芯片能力象限（搜狐）](https://www.sohu.com/a/1037424575_711053)；⚠️ [证券研报：国产芯片与超节点放量在即](http://stockfinance.sina.cn/stock/go.php/paper/reportid/841363985704/index.phtml)；⚠️ [CET：2026 国产算力芯片推理赛道辨析](https://www.cet.com.cn/itpd/itxw/10505919.shtml) |
| 迁移挑战 | 中国先进 AI 模型训练仍倚重 NVIDIA，国产替代卡在生态迁移成本（CUDA 生态迁移）；行业大量"昇腾 910B 适配改造/异构算力租赁兼容 CUDA"经验帖 | ⚠️ [DigitalToday：国产替代卡在生态迁移成本（2026）](https://www.digitaltoday.co.kr/cn/view/91791/chinas-top-ai-still-dependent-on-nvidia-why-shift-to-domestic-chips-is-slowing)；⚠️ [腾讯云：昇腾 910B 适配改造实操](https://cloud.tencent.com.cn/developer/article/2690422)（经验表述）；⚠️ [天翼云：昇腾 910B 云主机部署 DeepSeek V4](https://www.ctyun.cn/qzdh/143894_62)（经验表述） |

### B2.4 信创整体替换进度

| 要点 | 事实 | 可信度与来源 |
| :--- | :--- | :--- |
| 终端替换 | 行业文章称"2200 万台区县 PC 待替换、海光/飞腾/麒麟主导市场"（2026）；另有"30% 红线"（下一台发到单位的同方……）等自媒体表述 | ⚠️ [市场报告：信创国产化替代进程（sgpjbg）](https://www.sgpjbg.com/labelsyh/xinchuangguochanhuatidai.html)（⚠️数字待核验，来源为第三方报告站）；⚠️ [什么值得买：30% 红线](https://post.smzdm.com/p/a95g52d0/)（经验表述） |
| 行业案例 | 兴业银行完成大数据基础平台全栈信创改造（2026-07）；信创安全产品目录更新（2026） | ⚠️ [移动支付网：兴业银行全栈信创改造（2026-07）](https://www.mpaypass.com.cn/news/202607/10165709.html)；⚠️ [中培教育：2026 信创安全产品目录](https://m.zpedu.com/it/xxaq/38348.html) |

## B3. 国内开源模型（DeepSeek / Qwen）在昇腾 NPU 的适配推进

| 时间/事件 | 事实 | 可信度与来源 |
| :--- | :--- | :--- |
| 2025-02 起 | DeepSeek 系列新模型正式上线华为昇腾社区（"一键获取，开箱即用"）；华为 ModelEngine 支持 DeepSeek 全系列本地部署 | ✅/⚠️ [IT之家：DeepSeek 系列上线昇腾社区（2025-02）](https://www.ithome.com/0/828/700.htm)；⚠️ [EEPW：华为 ModelEngine 支持 DeepSeek 全系列（2025-02）](http://m.eepw.com.cn/article/202502/466682.html)；⚠️ [搜狐：昇腾蛇年开工 DeepSeek 上线昇腾社区](https://www.sohu.com/a/855872756_615309) |
| 2025 | 华为昇腾 0Day 支持阿里 Qwen3-VL-30B-A3B；"华为昇腾全系列支持 Qwen3"；昇腾极速适配 Qwen3.6 | ✅/⚠️ [IT之家：昇腾 0Day 支持 Qwen3-VL-30B-A3B](https://m.ithome.com/html/887564.htm)；⚠️ [中国证券网：昇腾全系列支持 Qwen3](https://www.cnstock.com/commonDetail/429414)；✅ [昇腾官网：适配 Qwen3.6 新闻](https://www.hiascend.com/zh/activities/dynamic-news/677) |
| 2026-04-24 | DeepSeek V4 发布并开源，报道称"八家国产芯片与 NVIDIA 全面适配，性能提升近 2 倍"；华为昇腾超节点系列产品全面支持 DeepSeek V4 | ⚠️ [澎湃：昇腾超节点支持 DeepSeek V4，寒武纪也适配完成](https://m.thepaper.cn/newsDetail_forward_33044189)；⚠️ [IT之家：昇腾超节点全面支持 DeepSeek V4](https://www.ithome.com/0/943/029.htm)；⚠️ [szhq：八家国产芯片适配](https://www.szhq000062.com/index.php?c=article&id=1202)（"八家/近 2 倍"待核验） |
| 2026 | 阿里开源 Qwen3.8-27B 多模态，昇腾平台首日完成高效适配部署；Qwen3.8-2.4T-A95B 开源后众智 FlagOS 社区同步完成多芯片适配（含昇腾等九芯，2026） | ⚠️ [ZOL：Qwen3.8-27B 昇腾首日适配](https://ai.zol.com.cn/1232/12324866.html)；⚠️ [界面新闻：Qwen3.8-2.4T-A95B 多芯片适配](https://www.jiemian.com/article/14918914.html)；⚠️ [新京报：FlagOS 九大芯片开箱即用（2026）](https://www.bjnews.com.cn/detail/1786623440129694.html) |
| 开源推理栈 | vLLM-Ascend（vLLM 昇腾后端）持续发布 release notes；SGLang 官方支持昇腾 NPU 模型清单；昇腾 ModelZoo 收录 Qwen3-14B 等 | ✅ [GitHub vllm-project/vllm-ascend release notes](https://github.com/vllm-project/vllm-ascend/blob/2fc76ff0/docs/source/user_guide/release_notes.md)；✅ [SGLang Ascend 文档](https://docs.sglang.io/docs/hardware-platforms/ascend-npus/ascend_npu_support_models)；✅ [昇腾 ModelZoo：Qwen3-14B](https://www.hiascend.com/software/modelzoo/models/detail/0de1ceeec3c34510a9508ca429f3d766) |
| 行业落地 | 政企"AI+政务"：地方政府接入 DeepSeek（赛意信息 2025）；智子芯元 38 分钟完成 DeepSeek 昇腾平台部署（深圳发改局转载，2026） | ⚠️ [赛意信息：地方政府接入 DeepSeek 智慧政务](https://www.chinasie.com/aboutus/829.html)；⚠️ [深圳市发改委：38 分钟部署 DeepSeek 昇腾（2026）](https://fgw.sz.gov.cn/ztzl/qtztzl/szscjmyjjfzzhfwpt/mqfc/myqyfzdt/content/post_12691408.html) |

> [!NOTE] 事实结论：DeepSeek/Qwen 与昇腾的适配自 2025 年初起持续推进，2026 年形成"官方模型上线昇腾社区 + 开源推理栈（vLLM-Ascend/SGLang/MindIE）+ 0Day 首发适配"三条路径；具体"性能提升倍数/适配模型数"等数值多为媒体口径（⚠️待核验），教材引用时应弱化为定性表述或标注来源时间点。

## B4. 私有化 RAG / Agent 在国内的常见工程问题

### B4.1 文档解析（PDF / 扫描件 / OCR）

| 问题 | 公开佐证 | 可信度 |
| :--- | :--- | :--- |
| 扫描件/复杂版面解析是首要痛点 | 行业文章：文档进 RAG 前必须先做表格结构还原；复杂文档（表格、版面）解析决定问答质量；"文档丢进去就能用？"是伪命题；合合信息《2026 企业知识库建设白皮书》聚焦文档解析 | ⚠️ [合合信息：表格结构还原（2026-06-12）](https://www.textin.com/news/20260612173439634)；⚠️ [合合信息：2026 企业知识库建设白皮书](https://www.intsig.com/news/2026qiyezhishikujianshebaipishu)；⚠️ [麓谷云：企业 AI 知识库落地最后一公里](https://www.lumevalley.com/article-6532.html)；⚠️ [澎湃：RAG 准确率先过文档解析这关](https://www.thepaper.cn/newsDetail_forward_33027100)（经验表述） |
| 开源/信创文档解析工具 | MinerU（高精度文档解析引擎，PyPI 3.4.5）；MinerU 国产化信创版部署实践（麒麟 V10 + 昇腾 910B）；DeepSeek-OCR-2 信创环境（麒麟 V10 + 申威 SW64）适配案例 | ✅ [PyPI mineru](https://pypi.org/project/mineru/3.4.5/)；⚠️ [CSDN：MinerU 信创版（麒麟 V10+昇腾 910B）适配实践](https://blog.csdn.net/weixin_28895791/article/details/157663793)（经验表述）；⚠️ [CSDN：DeepSeek-OCR-2 麒麟 V10+申威 SW64 部署案例](https://blog.csdn.net/weixin_42168902/article/details/157857633)（经验表述） |
| OCR 鲁棒性的学术基准 | ACL 2026 Industry 论文《When Good OCR Is Not Enough: Benchmarking OCR Robustness for RAG》 | ✅ [ACL Anthology（2026）](https://aclanthology.org/2026.acl-industry.60/) |

### B4.2 中文 embedding 与检索

| 问题 | 公开佐证 | 可信度 |
| :--- | :--- | :--- |
| 中文检索效果/embedding 选型 | 行业文章：企业内部 RAG"用开源模型做 Embedding，结构化内容掉链子"；embedding 模型选型实战（bge 系列等）；中文 RAG 基准 CRUD-RAG（ACM TOIS）公开评测（gte-base 等模型分数） | ⚠️ [合合信息：企业 RAG 结构化内容掉链子（2026-07-10）](https://www.textin.com/news/20260710141545153)（经验表述）；⚠️ [51CTO：Embedding 模型选型与效果优化](https://blog.51cto.com/u_16104640/14872122)；✅ [ACM：CRUD-RAG 中文基准](https://dl.acm.org/doi/full/10.1145/3701228) |
| 国产化/信创 embedding 部署 | BGE-M3 信创环境（麒麟 V10 + 海光 C86）兼容性验证；nomic-embed-text-v2-moe 离线/信创/等保三级适配（支持统信 UOS、麒麟 V10）；bge-large-zh-v1.5 Docker 容器化部署 | ⚠️ [CSDN：BGE-M3 信创验证报告](https://wenku.csdn.net/answer/773fi1660lo)（经验表述）；⚠️ [CSDN：nomic-embed-text-v2-moe 信创适配](https://blog.csdn.net/weixin_42402664/article/details/156815179)（经验表述）；⚠️ [CSDN：bge-large-zh-v1.5 容器化部署](https://blog.csdn.net/weixin_32252929/article/details/157012799)（经验表述） |
| 检索提升手段 | 混合检索（Hybrid Search：向量召回 + 关键词召回融合）、重排序（Qwen3-Reranker-0.6B 信创麒麟 OS+海光 CPU 适配） | ⚠️ [腾讯云：混合检索工程实践](https://cloud.tencent.com.cn/developer/article/2728960)；⚠️ [CSDN：Qwen3-Reranker 信创适配](https://blog.csdn.net/weixin_35677363/article/details/158000692)（经验表述） |

### B4.3 离线交付

| 问题 | 公开佐证 | 可信度 |
| :--- | :--- | :--- |
| 离线/无网环境部署 | LightRAG 官方 Offline Deployment 指南；离线部署中文 embedding（ONNX 实现指南）；nomic-embed 离线环境适配；智能体平台私有化部署（模型、数据、工具与运行环境架构） | ✅ [GitHub HKUDS/LightRAG OfflineDeployment](https://github.com/HKUDS/LightRAG/blob/828d1c01/docs/OfflineDeployment.md)；⚠️ [百度开发者：离线中文 Embedding ONNX 指南](https://developer.baidu.com/article/detail.html?id=7365573)；⚠️ [亿方云：智能体平台私有化部署架构](https://www.filez.com/news/detail/ddd93d97a60d9c51d87b68b91cc53e76.html)；⚠️ [阿里云：AI 本地化部署的技术难点](https://developer.aliyun.com/article/1723868)（经验表述） |
| 一体机交付模式 | 国产 AI 大模型一体机成为政企私有化交付主流载体：报道称"2026 市场规模冲刺 5000 亿"（⚠️行业测算）；昇腾推出全系列 Claw 一体机（2026）；润和 HopeClaw 智算一体机等厂商跟进；财信证券研报称 1249 亿政企市场 | ⚠️ [iotdt：2026 一体机市场规模冲刺 5000 亿](https://www.iotdt.com/news/xingyezixun/2596.html)（⚠️数字为媒体/机构测算，待核验）；⚠️ [CNMO：昇腾全系列 Claw 一体机](https://ai.cnmo.com/news/805357.html)；⚠️ [财信证券：大模型一体机 1249 亿政企市场](https://www.sgpjbg.com/labelsyh/damoxingyitijitouzijihui.html) |

### B4.4 知识时效 / 增量更新

| 问题 | 公开佐证 | 可信度 |
| :--- | :--- | :--- |
| 知识时效（新鲜度） | 行业文章：企业知识频繁变化，智能体如何保持内容新鲜和答案一致；RAG 进入"实时更新阶段"（网页采集 + 增量索引成为企业 AI 新底座）；知识库过期内容治理（企业本地化部署实践） | ⚠️ [亿方云：企业知识频繁变化如何保鲜](https://www.filez.com/news/detail/581cb7313c1ea2a191e01dfc74728acb.html)；⚠️ [腾讯云：RAG 实时更新与增量索引（2026）](https://cloud.tencent.cn/developer/article/2700328)；⚠️ [阿里云：知识库过期内容如何治理](https://developer.aliyun.com/article/1750481)（经验表述） |
| 增量更新实现 | RAG 向量数据库增量更新方案（ETL 视角）；智能体知识库动态迭代架构与数据集全链路版本管理；腾讯云智能体平台动态知识库更新与版本控制 | ⚠️ [腾讯云：RAG 向量数据库增量更新](https://cloud.tencent.com.cn/developer/article/2645176)；⚠️ [阿里云：智能体知识库动态迭代与版本管理实战](https://developer.aliyun.com/article/1740017)；⚠️ [腾讯云：智能体动态知识库更新与版本控制](https://cloud.tencent.com.cn/developer/article/2566460)（经验表述） |
| 权限与溯源 | 企业文档用于 RAG 的权限继承、引用溯源与更新机制（文档平台厂商视角） | ⚠️ [亿方云：企业文档 RAG 权限继承、引用溯源与更新机制](https://www.filez.com/news/detail/f35e9b624e284f04e4e978e5e83eafae.html)（厂商经验表述） |

### B4.5 工程整体成功率口径（供教材引用时警惕）

| 说法 | 语境 | 可信度 |
| :--- | :--- | :--- |
| "企业 RAG 90% 是工程问题" | 行业技术文章标题（Naive RAG → Agentic RAG 演进视角）；另有"企业 RAG 落地踩的 7 个坑（接了 20 个客户）"经验帖 | ⚠️ [腾讯云：企业 RAG 为何总失败 90% 是工程](https://cloud.tencent.cn/developer/article/2672046)（经验表述）；⚠️ [腾讯云：企业 RAG 落地踩的 7 个坑（20 客户经验）](https://cloud.tencent.cn/developer/article/2655268)（经验表述） |
| "召回率 78%→92%" | 个人项目经验帖标题（做了 3 个 RAG 项目） | ⚠️ [腾讯云：召回率 78%→92% 经验帖](https://cloud.tencent.cn/developer/article/2685436)（经验表述，非行业统计） |

---

## 附录：给教材使用时的口径提醒（🔶教材提炼）

1. **"vibe coding"**：词条出处（Karpathy 2025-02）与年度词汇（Collins 2025-11）可作官方锚点；"描述意图+审查判断"是教材化概括。
2. **gstack**：官方口径是"23 个 opinionated tools + plan→review→ship 核心闭环"；"八环节/七环节"均为传播提炼，教材引用时注明"教材归纳"并挂官方仓库。
3. **工具对比**：2026-08 时间点上各工具均处快速迭代期，版本号、定价、模型支持请以官方页为准；本文表格为形态与定位的静态快照。
4. **信创数值**：2200 万台 PC 待替换、一体机 5000 亿市场规模、"八家芯片适配、性能近 2 倍"等均为媒体/机构口径（⚠️待核验），教材引用应标注来源与时间点或弱化为定性。
5. **数据跨境**：298 个（2025-04 官方口径）与 285 个（第三方报道）并存，属不同时间点统计，引用时注明出处日期。
6. **私有化 RAG 工程问题**：PDF/扫描件 OCR、中文 embedding、离线交付、增量更新四大类问题均有公开经验佐证，但多为"经验表述"级信源，教材应作为工程事实陈述而非统计结论。

---

*报告整理时间：2026-08-30。所有 URL 均为检索可得来源，逐条标注可信度与日期；落地使用前请按官方页面核对最新状态。*
