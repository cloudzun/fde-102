# 第 7 章 Deep Research 补充：Delta 工作法 · Vibe Coding 与工程纪律

- 调研时间：**2026-08-30**；信息截至：**2026 年 8 月**。
- 服务对象：《人工智能工程师（高级）FDE 认证培训 · 教科书》第 7 章。
- 来源纪律：仅采用官方（厂商官网 / 官方 GitHub / 官方文档）与权威第三方（权威媒体、官方生态项目），已排除 CSDN / 知乎 / 掘金 / 腾讯云开发者社区 / 低质门户。
- 可信度标记：**✅官方**（官方 URL 或权威媒体）｜**⚠️待核验**（第三方，或页面存在但未能摘到原文）｜**🔶教材提炼**（课程/社区归纳，非官方口径）。
- ⚠️ 重要限制：本调研环境无法直连抓取网页原文（网络沙箱拒绝直连），结论基于 web_search 检索返回的**官方 URL 与检索摘要**；凡需"打开原文核对条文"之处一律标 ⚠️待核验，并附官方核验入口，不作臆造。

---

## ① gstack 官方 skill 目录（重点）

### 1.1 官方口径总览

| 项目 | 官方口径 / 结论 | 来源 URL | 日期 | 可信度 |
|---|---|---|---|---|
| 仓库定位 | "Use Garry Tan's exact Claude Code setup: **23 opinionated tools** that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA" | https://github.com/garrytan/gstack | 2026-08 检索 | ✅官方 |
| skill 全量文档 | 仓库内 `docs/skills.md` 存在，含 "Skill Deep Dives" 章节；并有运维细节（如 "Eng Review 是唯一强制门禁，可用 `gstack-config set skip_eng_review true` 关闭"、"`/qa`、`/browse` 需 cookie"） | https://github.com/garrytan/gstack/blob/main/docs/skills.md | 2026-08 检索 | ✅官方 |
| 技能目录实体 | 仓库根下每个 skill 一个 `<skill>/SKILL.md`（部分为 `.tmpl` 模板）；技能间互相调用路由（retro→`/autoplan`；learn→`/ship` 或 `/land-and-deploy`；setup-deploy→`/review`） | 见 1.2 逐条 URL | 2026-08 检索 | ✅官方 |
| 「八环节/八命令」提法 | **官方仓库未检索到 "8 steps / 八环节" 提法**；官方口径是 "23 opinionated tools"+ docs/skills.md 文档 | 官方 README / docs 检索未命中 | 2026-08 | 🔶教材提炼 |

### 1.2 检索到的官方 skill 目录清单（截至 2026-08-30）

| skill 目录 | 证据 URL（GitHub 官方） | 日期 | 可信度 |
|---|---|---|---|
| `office-hours/` | blob/main/office-hours/SKILL.md | 2026-08 | ✅官方 |
| `review/` | blob/main/review/SKILL.md | 2026-08 | ✅官方 |
| `qa/`（SKILL.md.tmpl 模板） | blob/main/qa/SKILL.md.tmpl | 2026-08 | ✅官方 |
| `ship/` | blob/main/ship/SKILL.md | 2026-08 | ✅官方 |
| `retro/` | blob/main/retro/SKILL.md | 2026-08 | ✅官方 |
| `autoplan/` | 官方 issue#497 引用 + retro/SKILL.md "invoke /autoplan" | 2026-08 | ✅官方（目录实体经 issue/路由引用实证） |
| `spec/` | SkillsMP 镜像页直接以该目录命名：https://skillsmp.com/de/creators/garrytan/gstack/spec | 2026-08 | ⚠️待核验（GitHub blob 未直接命中） |
| `build/` | 未直接命中 GitHub blob；SkillsMP 对 garrytan/gstack 技能集有索引 | 2026-08 | ⚠️待核验 |
| `plan-tune/` | blob/main/plan-tune/SKILL.md | 2026-08 | ✅官方 |
| `plan-eng-review/` | blob/main/plan-eng-review/SKILL.md | 2026-08 | ✅官方 |
| `devex-review/` | blob/main/devex-review/SKILL.md | 2026-08 | ✅官方 |
| `land-and-deploy/` | blob/main/land-and-deploy/SKILL.md | 2026-08 | ✅官方 |
| `setup-deploy/` | blob/main/setup-deploy/SKILL.md | 2026-08 | ✅官方 |
| `make-pdf/` | blob/main/make-pdf/SKILL.md | 2026-08 | ✅官方 |
| `learn/` | blob/main/learn/SKILL.md | 2026-08 | ✅官方 |
| `document-generate/`（tmpl） | blob/main/document-generate/SKILL.md.tmpl | 2026-08 | ✅官方 |
| `ios-qa/`（tmpl） | blob/main/ios-qa/SKILL.md.tmpl | 2026-08 | ✅官方 |
| `sync-gbrain/` | blob/…/sync-gbrain/SKILL.md | 2026-08 | ✅官方 |
| `skillify/` | blob/HEAD/skillify/SKILL.md | 2026-08 | ✅官方 |
| 全量技能集（第三方渲染视图） | https://deepwiki.com/garrytan/gstack/3-skills | 2026-08 | ⚠️第三方渲染 |

> 说明：官方工具栏是**动态集合**（含 plan-tune、devex-review、land-and-deploy、setup-deploy、skillify 等），README 的 "23" 是描述性口径，具体清单以 `docs/skills.md` 为准。

### 1.3 教材「八环节」与官方命令对应关系（教材校准点）

| 教材八环节 | 对应官方命令 | 官方证据等级 | 结论 |
|---|---|---|---|
| office-hours | `/office-hours` | ✅ 官方 SKILL.md | 官方存在 |
| spec | `/spec` | ⚠️ 目录名有第三方索引旁证 | 八环节里最需核对的一项 |
| autoplan | `/autoplan` | ✅ 官方 issue/路由引用 | 官方存在 |
| build | `/build` | ⚠️ 官方目录未直接命中 | 待核验 |
| review | `/review` | ✅ 官方 SKILL.md | 官方存在 |
| qa | `/qa` | ✅ 官方 SKILL.md.tmpl | 官方存在 |
| ship | `/ship` | ✅ 官方 SKILL.md（另有 land-and-deploy、setup-deploy 两个部署链） | 官方存在 |
| retro | `/retro` | ✅ 官方 SKILL.md | 官方存在 |

### 1.4 教材表述建议（🔶教材提炼）

- 建议表述口径："gstack 官方将自身定位为 **23 个 opinionated skills** 的集合（README 口径），`docs/skills.md` 为全量文档；本书'八环节'（office-hours→spec→autoplan→build→review→qa→ship→retro）是对**官方主干命令链**的教材提炼，其中 8 个命令 6 个有官方目录/路由实证、`spec` 与 `build` 需以官方仓库根目录核对。官方工具栏随版本持续增减。"
- 不建议把"八环节"写成官方术语；建议正文加一句"（环节为教材归纳，命令清单以官方仓库为准）"。
- 写稿核对入口：https://github.com/garrytan/gstack （仓库根目录按 `SKILL.md` 检索 spec/、build/）。

---

## ② DeepSeek 分类场景 API 参数（配合教材写具体操作）

### 2.1 temperature

| 问题 | 结论 | 来源 URL | 日期 | 可信度 |
|---|---|---|---|---|
| 官方是否有 temperature 说明 | 有专门文档页「Temperature 设置 / 参数设置」 | https://api-docs.deepseek.com/zh-cn/quick_start/parameter_settings/ | 2026-08 | ✅官方（页面存在） |
| 分类任务是否建议 temperature=0 | 分类/抽取等确定性任务 temperature=0 为行业通识；**官方文档未检索到"分类建议 0"原话**，教材写"行业实践（教材提炼），具体范围以官方参数页为准" | 同上 + 🔶 | 2026-08 | ⚠️/🔶 |
| 思考（reasoning）模式 temperature 是否生效 | 官方参数设置页历史上明确：reasoner 模式下 temperature / top_p / presence_penalty / frequency_penalty 等采样参数**被禁用/不生效**；V4 时代是否放开**未核到原文** | 同参数设置页 | 2026-08 | ⚠️待核验（写稿时务必读该页现文） |

### 2.2 JSON 输出

| 问题 | 结论 | 来源 URL | 日期 | 可信度 |
|---|---|---|---|---|
| 官方文档 | 有专门指南「JSON Output / JSON 输出」 | https://api-docs.deepseek.com/zh-cn/guides/json_mode/（镜像：github.com/thevibeworks/deepseek-docs/…/json_mode.md） | 2026-08 | ✅官方 |
| 用法 | `response_format={"type":"json_object"}`；官方指南要求提示词中**出现 "json" 字样**（触发/稳定 JSON 输出） | 同上（检索摘要层面，原文细节写稿时核对） | 2026-08 | ✅官方 |
| 是否支持 schema 强校验 | 2026 年第三方对比仍在讨论该问题，**未检索到 DeepSeek 官方支持 json_schema 强校验的定论** → 教材按"软约束 JSON 模式；强 schema 需自建校验/工具层"写，并标待核验 | https://therouter.ai/zh/blog/llm-api-response-format-structured-output-cross-provider-guide/ ；https://blog.milvus.io/ai-quick-reference/does-deepseekv32-support-structured-json-mode | 2026-08 | ⚠️待核验 |

### 2.3 模型版本与 API 模型 ID（截至 2026-08）

| 时间 | 事件 | 来源 URL | 可信度 |
|---|---|---|---|
| 2026-04-24 | DeepSeek V4 预览版发布并同步开源，API 首日可用 | https://finance.sina.com.cn/jjxw/2026-04-24/doc-inhvqmqa4442621.shtml | ✅权威媒体 |
| 2026-04-27 | 降价潮：百万 tokens 低至 2 分钱（缓存命中档，调价前旧档） | https://finance.sina.com.cn/roll/2026-04-27/doc-inhvyefa7742594.shtml | ✅权威媒体 |
| 2026-07-24 | 官方公告**两个旧模型名停用**（breaking change） | https://developer.aliyun.com/article/1750298（转载官方公告） | ⚠️待核验（转载） |
| 2026-07-31 | 第三方索引确证快照型模型 ID `deepseek-v4-flash-0731` | https://llm-stats.com/models/deepseek-v4-flash-0731 | ⚠️第三方 |
| 2026-08-13 | V4 **Pro 正式版 API 完成更新，定价显著高于 V4-Flash** | http://www.cnr.cn/jrpd/jdt/20260813/t20260813_527760408.shtml（央广网） | ✅权威媒体 |
| 2026-08-21 | 第三方索引确证 `deepseek-v4-flash-vision-exp`（视觉实验版） | https://llm-stats.com/models/deepseek-v4-flash-vision-exp | ⚠️第三方 |
| 2026-08 | 官方模型名向 V4 系列迁移被 Spring AI / gbrain 等官方生态确认为**破坏性变更**（均已跟进） | https://github.com/spring-projects/spring-ai/issues/5970 ；https://github.com/garrytan/gbrain/pull/3449 | ✅生态官方（issue 实证） |

- 教材可写模型 ID（写稿前核对官方「模型与价格」页）：`deepseek-v4-pro`、`deepseek-v4-flash`（含快照/实验后缀如 `-flash-0731`、`-flash-vision-exp`）；`deepseek-chat` / `deepseek-reasoner` 在 V4 时代的映射待官方页核实。
- **分类场景推荐档：Flash 档**（低成本高吞吐，适配分类批处理；"用 Pro 档做分类是浪费"为教材提炼）🔶。

### 2.4 上下文缓存一句话（教材可直接引用）

> 官方 2026-08-02 公告："DeepSeek API 创新采用**硬盘缓存**，价格再降一个数量级"（https://api-docs.deepseek.com/zh-cn/news/news0802/ ，✅官方）。对分类批处理：把固定系统提示/少量示例前缀前置，命中缓存档输入成本可从 ¥1.5/百万降到 ¥0.05/百万（Flash 空闲档，见 §3）。

---

## ③ 关键数值再核验（fast check）

| 项目 | 结论（量级即可） | 来源 URL | 日期 | 可信度 |
|---|---|---|---|---|
| Ollama 当前版本 | **v0.32.15**（2026-08 发布；Arch Linux 包 0.32.15-1 / Winget manifest 实证） | https://github.com/ollama/ollama/releases ；https://archlinux.org/packages/extra/x86_64/ollama/ | 2026-08 | ✅官方/发行渠道 |
| vLLM 当前版本 | **v0.28.0**（2026-08 下旬发布；具体日期未摘到，约 8 月中下旬，待核验） | https://github.com/vllm-project/vllm/releases/tag/v0.28.0 | 2026-08 | ✅版本号官方（日期⚠️） |
| Qwen3-30B-A3B Q4_K_M 显存 | Q4_K_M 权重约 **18GB 量级**；RTX 4090 24GB **可跑但接近满载**（第三方实测 23.7/24.0GB，需控制上下文与量化档）；unsloth issue 报告某些配置下 24GB 不够（无余量） | https://registry.ollama.com/library/qwen3:30b-a3b-q4_K_M ；https://willitrunai.com/can-run/qwen-3-30b-a3b-on-rtx-4090-24gb ；https://github.com/unslothai/unsloth/issues/2504 | 2026-08 | ⚠️约 18–19GB 量级合理、精确值待核验；"24GB 4090 可跑但紧张"✅ |
| DeepSeek 峰谷定价是否仍在 | **仍在**：2026-08-02 官方公告提出峰谷定价；2026-08-17 起正式生效（首创峰谷计费，高峰≈低谷 2 倍档、最高涨幅 1100%）；2026-08-23 起**周末统一按低谷价** | https://api-docs.deepseek.com/zh-cn/news/news0802/（✅）；https://www.techweb.com.cn/it/2026-08-17/2978269.shtml ；https://www.stcn.com/article/detail/4103775.html | 2026-08 | ✅ |
| Flash 档价位（2026-08-17 起，空闲/低谷时段，每百万 token） | 输入**缓存命中 ¥0.05**；输入**缓存未命中 ¥1.5**；输出 **¥4.5**；高峰按倍数上浮，最高档输出峰值达 **¥27**（V4 Pro 档） | https://finance.sina.cn/2026-08-17/detail-ininqpez7895655.d.html ；https://m.voc.com.cn/xhn/news/202608/33482290.html ；官方价格页 https://api-docs.deepseek.com/zh-cn/quick_start/pricing/ | 2026-08 | ✅（权威媒体转述官方价目）；精确到小数以官方价格页为准 ⚠️ |

---

## ④ AI Coding 工具一句话补核（fast check）

| 工具 | 一句结论（截至 2026-08） | 来源 URL | 日期 | 可信度 |
|---|---|---|---|---|
| Claude Code | 在售，档位 **Pro $20 / Max 5x $100 / Max 20x $200**（多家 2026 定价梳理一致；官方 Help Center 有 Max 计划页） | https://www.morphllm.com/claude-code-pricing ；https://www.cloudzero.com/blog/claude-code-pricing/ ；https://support.claude.com/en/articles/11049741-what-is-the-max-plan | 2026-08 | ⚠️定价第三方、官方计划页✅ |
| 腾讯 WorkBuddy | 已发布/在售：2026-06 腾讯云官方发布「效率智能体工具集」（含 WorkBuddy），并已推出**企业版** | https://www.tencent.com/zh-cn/tencent-cloud-debuts-productivity-agent-suite-creating-a-new-gateway-to-ai-for-users-and-enterprises/ ；https://www.news.cn/tech/20260605/…（新华网 2026-06-05）；https://m.bjnews.com.cn/detail/1780889443129529.html（新京报·企业版） | 2026-06~08 | ✅ |
| 阿里 Qoder | 已发布：Qoder 智能体工作台（Qoder 1.0，内置 Qwen3.8-Max 等多款前沿模型） | https://www.pingwest.com/w/313749 ；https://www.pingwest.com/w/316832（品玩） | 2026 | ✅权威媒体 |
| 千问办公 | **待核验**：未检索到独立官方发布稿；阿里 AI 办公产品线整体在推进（"Token 消耗直降 75%"报道） | https://forbeschina.com/innovation/72079（福布斯中国） | 2026 | ⚠️待核验 |
| 字节 TRAE | 在售/持续更新：2026-06 TRAE Work 上线「设计模式」（需求→代码闭环） | https://pandaily.com/bytedance-trae-work-design-mode-launch-jun2026 | 2026-06 | ✅权威媒体 |
| 豆包工作（Doubao Work） | 已正式发布：面向 AI 办公，围绕用户目标拆解任务、调用工具，与飞书深度打通 | https://m.thepaper.cn/newsDetail_forward_33845235（澎湃新闻） | 2026 | ✅权威媒体 |

---

## 待核验清单（写稿前逐一核对）

| # | 待核验项 | 官方核验入口 |
|---|---|---|
| 1 | gstack `spec/`、`build/` 目录实体是否存在 | https://github.com/garrytan/gstack 仓库根目录（按 `SKILL.md` 检索） |
| 2 | gstack 当前 skills 总数是否仍为 23 | https://github.com/garrytan/gstack/blob/main/docs/skills.md |
| 3 | DeepSeek 参数设置页现文：默认值/范围/思考模式是否禁用采样参数 | https://api-docs.deepseek.com/zh-cn/quick_start/parameter_settings/ |
| 4 | DeepSeek JSON 模式是否新增 schema 强校验 | https://api-docs.deepseek.com/zh-cn/guides/json_mode/ |
| 5 | DeepSeek V4 系列官方模型 ID 与 deepseek-chat/reasoner 映射 | https://api-docs.deepseek.com/zh-cn/quick_start/pricing/（模型与价格页） |
| 6 | Flash 档精确价格（高峰/低谷/缓存档，元/百万 token） | 同上 pricing 页 |
| 7 | Qwen3-30B-A3B Q4_K_M 精确权重体积（约 18GB 待确认） | https://registry.ollama.com/library/qwen3:30b-a3b-q4_K_M （Size 栏） |
| 8 | vLLM v0.28.0 精确发布日期 | https://github.com/vllm-project/vllm/releases/tag/v0.28.0 |
| 9 | 「千问办公」是否已独立发布/在售 | 阿里官方（通义 / 千问办公官网） |

---

## 附：检索说明

- 本报告逐条标注「来源 URL + 日期 + ✅官方/⚠️待核验/🔶教材提炼」，严格排除 CSDN/知乎/掘金/腾讯云开发者社区等来源。
- 「八环节」「分类用 Flash 档」「分类 temperature=0」等为 🔶教材提炼/行业通识，正文引用时请按 AGENTS.md 溯源纪律标注，勿冒充官方口径。