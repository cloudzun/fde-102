# 国内开源大模型 SKU 与定价调研报告 —— Qwen / GLM / Kimi（截至 2026 年 8 月）

> **调研口径**：检索完成于 2026-08-30；"有效窗口"为 2025-11 之后（最近 9 个月）的 SKU 与价格，更早信息仅作排比并标"信息较早"。
> **来源纪律**：仅采信官方（阿里云 Model Studio / 千问官方、智谱开放文档 docs.bigmodel.cn、Moonshot 官方 platform.kimi.com、huggingface.co 官方仓库、AWS 官方定价页）与权威第三方（央媒、正规财经媒体、OpenRouter、benchlm、DataLearnerAI、Morph、LMSpeed、API易等）；已排除 CSDN、腾讯云开发者社区、掘金、知乎等低质门户。
> **可信度标注**：✅官方｜⚠️待核验（有官方入口但本报告未逐项核到数值）｜🔶教材提炼（本报告综合判断，非厂商原话）｜第三方 = 明确标注聚合站/媒体转述。
> **重要提醒**：2026 年模型迭代极快，本文价格与 SKU 均为快照；正式引用前请以各官方定价页为准（核验入口见第 5 节）。

---

## 1. 要点速览

### 1.1 三大系列主线一览（截至 2026-08-30）

| 系列 | 最新旗舰 | 中坚/主流 | 轻量/免费 | 特色方向 | 一句话定位 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen | Qwen3.5-397B-A17B（开源多模态 MoE）｜Qwen3.6-Plus（API Agentic 旗舰）｜Qwen3.8-2.4T-A95B（开源） | Qwen3.5-122B-A10B、35B-A3B、32B | 0.8B/2B 等小尺寸；Flash API 档最低约 0.8 元/百万 Tokens | 原生多模态、Agent、编程、全模态 Omni | 生态最全：从 0.8B 端侧到 2.4T 数据中心的"全家桶" |
| GLM | GLM-4.7（编程 SOTA 旗舰） | GLM-4.6（2025-11 旗舰）、GLM-4.6V（多模态 106B） | GLM-4.7-Flash：**API 免费**、200K 上下文、开源 | 编码与 Agent、混合思考、视觉 Agent | "开发者友好"：免费 Flash + 高性价比中档称王 |
| Kimi | Kimi K3（2.8T 开源权重，官方价 2/20/100 元） | Kimi K2.6（万亿级，2026-06）、K2.5（1T 级多模态） | —（K2.5 定价远低于 K3，未见免费档） | 长程编程、复杂推理、多模态 Agent、超长上下文 | "重旗舰"路线：参数规模全球最大梯队，价格随后抬升 |

### 1.2 价格速览（每百万 Tokens；快照 2026-08-30）

| 模型 | 输入（未命中） | 输出 | 缓存命中输入 | 依据与可信度 |
| :--- | ---: | ---: | ---: | :--- |
| Qwen3.5-Flash（API） | 最低档约 0.8 元（报道口径）；256K–1M 长文档 **1.2 元** | 256K–1M 长文档 **12 元**（片段） | 官方计价页声明"上下文缓存享有折扣"，数值待核验 | ⚠️ 官方计价页片段 + 媒体报道（见 2.3） |
| Qwen3.5-Plus / Max（API） | 待核验 | 待核验 | 待核验 | ⚠️ 官方计价页：help.aliyun.com/zh/model-studio/model-pricing |
| Qwen3.6-Plus（API） | 待核验 | 待核验（"2.998 元"片段存疑） | 待核验 | ⚠️ 同上 |
| GLM-4.7 | **US$0.72**（约 5.1 元） | **US$2.64**（约 18.9 元） | 待核验 | ✅ AWS Bedrock 官方定价页（2026-08）；国内价待核验 |
| GLM-4.7-Flash | **免费**（额度/限流待核验） | 免费 | 免费 | ✅ 官方免费档（2026-01-20 起） |
| GLM-4.6V / 4.6 / 4.5 系 | 待核验（4.6V 上市时 API 降价 50%） | 待核验 | 待核验 | ⚠️ 官方：bigmodel.cn/pricing |
| Kimi K3 | **20 元**（≈US$3，第三方） | **100 元**（≈US$15，第三方） | **2 元** | ✅ 财经媒体转官方价（2/20/100）+ 官方页；数值解读待最终核验 |
| Kimi K2.5 | 第三方口径 US$0.6 | US$3.15 | US$0.1（约 0.7 元） | ⚠️ 第三方聚合（API易）；官方人民币价待核验 |
| Kimi K2.6 | 待核验（发布时提价） | 待核验 | 待核验 | ⚠️ 官方：platform.kimi.com/docs/pricing/chat-k26 |

> 读法指引：① 表中人民币价均为官方/可靠第三方口径，美元价来自 AWS 官方或定价聚合站；② "缓存命中输入"指上下文缓存（Context Caching）命中后的输入单价；③ 汇率为示意（约 7.1 元/US$），不做换算依据。

---

## 2. Qwen（阿里通义千问）系列

### 2.1 最新 SKU 清单

#### 2.1.1 Qwen3.5 代际（2026-02 起，有效窗口内）

| 型号 | 总参/激活 | 上下文 | 思考/非思考 | 开源/许可 | 发布日 | 来源 + 日期 + 可信度 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen3.5-397B-A17B（旗舰） | 397B / 17B（MoE） | 262K | 支持（混合推理，档位待核验） | 开源权重（HF 官方仓库，FP8/GPTQ-Int4 官方量化）| **2026-02-16（除夕）** | ✅ 科技日报 2026-02-16（stdaily.com/web/gdxw/2026-02/16/content_474848.html）；🟡 参数/上下文（Morph 2026：morphllm.com/qwen-3-5；OpenRouter 模型页） |
| Qwen3.5-122B-A10B | 122B / 10B（MoE） | 待核验 | 待核验 | 开源（HF 量化镜像） | 2026-02 下旬（中尺寸扩容） | ⚠️ HF 镜像 olka-fi/Qwen3.5-122B-A10B-MXFP4；EmpirioLabs |
| Qwen3.5-35B-A3B | 35B / 3B（MoE） | 待核验 | 待核验 | 开源 | **2026-02-25** | ✅ 百度百科词条（2026-02-25，第三方）；investing.com（智通财经） |
| Qwen3.5-32B（dense） | 32B | 256K | 待核验 | 开源、多模态 | 2026-02 下旬 | ⚠️ llmreference（256K、多模态、开源） |
| Qwen3.5-27B | 27B | 待核验 | 待核验 | 开源（镜像） | 2026 | ⚠️ 中国信通院鲸智社区 aihub.caict.ac.cn/models/Qwen/Qwen3.5-27B |
| Qwen3.5-2B-Base 等小尺寸 | 2B（及 0.8B 等） | 待核验 | — | 开源 | **2026-02-25 前后（"四款小尺寸"）** | ⚠️ aihub.caict（Qwen3.5-2B-Base）、investing.com（阿里千问开源四款小尺寸） |
| Qwen3.5-VL 系列（多模态小模型） | 如 2B minor | 待核验 | — | 开源 | 2026 | ⚠️ 第三方托管（featherless） |
| Qwen3.5-Omni / -Omni-Plus / -Omni-Flash | 全模态（视觉+语音） | 待核验 | — | API 为主（是否开源待核验） | 2026-06 前后 | ⚠️ 澎湃 2026-06、C114（c114.net.cn/ainews/71906） |

#### 2.1.2 其他在售/近期 SKU（API 档与基线）

| 型号 | 说明 | 发布日 | 来源 + 可信度 |
| :--- | :--- | :--- | :--- |
| Qwen3.5-Plus / Flash / Max（API 档） | 快照：qwen3.5-flash-2026-02-23、qwen3.5-plus-2026-04-20；Flash 支持思考+非思考、上下文可达 1M（按计价档位推断）；Max 为 API 旗舰 | 2026-02～05 | ⚠️ 官方 help.aliyun.com/zh/model-studio/model-pricing；🟡 证券时报（stcn.com/article/detail/3644755）报道称"阿里开源 Qwen3.5-Plus"（是否含权重开源，待核验） |
| Qwen3.6-Plus（API） | Agentic 企业级旗舰；另有 Flash 与开源版档位 | **2026-04-02**（快照 qwen3.6-plus-2026-04-02） | ✅ 阿里云官方新闻稿（alibabacloud.com/zh/press-room/alibaba-unveils-qwen3-6-plus...）；🟡 媒体称"中国编程能力最强"（网易，第三方转述） |
| Qwen3.8-2.4T-A95B（开源） | 2.4T 总参 MoE / 95B 激活；**原生 256K 上下文**；权重开放 | 2026-08 下旬（最新） | ⚠️ 官方模型页 help.aliyun.com/zh/model-studio/qwen3-8-2-4t-a95b；🟡 搜狐（m.sohu.com/a/1062180919） |
| Qwen3.8-Flash（开源） | 约 125B 总参 / 6B 激活（口径待核验）；号称 Qwen4 架构首次公开亮相；主打性价比 | **2026-08-28** | ⚠️ UK Tech News 2026-08-28（第三方）；AITop100（第三方） |
| Qwen3.8-Flash-Next | 新架构实验型（125B-A6B 或 25B 口径不一） | 2026-08 下旬 | ⚠️ 第三方（数字应用/TheNextWeb 等，参数口径冲突，待核验） |
| Qwen3-Next（架构先行版） | 80B-A3B（NVIDIA NIM 参考）；推理效率宣称提升 10 倍 | 2025-11 | ✅ NVIDIA NIM 官方参考文档（docs.api.nvidia.com/nim/reference/qwen-qwen3-next-80b-a3b-instruct）；🟡 OFweek 2025-11 |
| QwQ-32B（深度思考） | 旧推理系列；已在部分阿里云产品（OpenSearch）正式下线 | 2025-04（较早） | ✅ 官方下线公告 help.aliyun.com/zh/open-search/...qwq-32b...decommissioned；当前推理入口以 Qwen3.5 思考模式为主（待核验） |
| Qwen3（0.6B～235B-A22B） | 上一代全家桶 | 2025-04 | 信息较早（仅作排比） |

### 2.2 能力定位（FDE 视角）

| 能力维度 | Qwen3.5 系表现 | 说明 |
| :--- | :--- | :--- |
| 通用/推理 | 旗舰 397B-A17B 被称为"全球最强开源"梯队，性能对标 Gemini 3（媒体口径） | 类别 RAG 生成、知识问答等通用任务首选中大规模档 |
| 多模态 | 397B-A17B 为原生视觉-语言混合架构（线性注意力）；32B 等多边形多模态；Omni 为全模态（视/听/实时交互） | 适合图文混排的 RAG 富文档、截图类 Agent 输入 |
| Agent/工具调用 | Qwen3.6-Plus 主打自动化 Agent 部署（官方新闻稿）；Qwen3.5 有原生工具调用能力 | 分类、流程编排、企业 Agent 落地 |
| 编码 | 中尺寸（122B-A10B、35B-A3B）性价比路线；Qwen3.6-Plus 媒体口径"编码最强" | 代码补全/审查可用 Flash 档压成本 |
| 端侧/私有化 | 0.8B/2B/27B/32B 覆盖低-中端；GSMA、昇腾等生态都出过部署教程 | FDE 在客户内网（无公网）小模型私有部署选 0.8B–32B |
| 不适合 | —— | 无免费 API 档；旗舰自部署硬件门槛极高（397B 需多卡/FP8 量化） |

### 2.3 API 价格（阿里云百炼 / 千问官方，快照 2026-08-30）

| 档位 | 输入（/百万） | 输出（/百万） | 缓存命中输入 | 备注 |
| :--- | ---: | ---: | ---: | :--- |
| Qwen3.5-Flash | 报道口径最低约 **0.8 元**；256K<Token≤1M 档 **1.2 元** | 256K<Token≤1M 档 **12 元**（片段） | 官方页注明"上下文缓存享有折扣"，数值待核验 | 大河财立方 2026-02-25 报道"每百万 Token 低至 0.2 元"（小尺寸开源模型）；developer.aliyun.com/article/1733821 引用官方计价表 |
| Qwen3.5-Plus / Max | 待核验 | 待核验 | 待核验 | 官方计价页：https://help.aliyun.com/zh/model-studio/model-pricing ；千问官方：https://platform.qianwenai.com/pricing/api |
| Qwen3.6-Plus | 待核验 | 待核验（官方页曾有"2.998 元"片段，归属待核验） | 有"显式缓存"档（developer.aliyun.com/article/1724287） | 官方计价页同上 |
| Qwen3.5-Omni 系 | 待核验 | 待核验 | 待核验 | 千问官方定价页 |
| 开源权重自部署 | 0（算力成本自负） | 0 | — | 397B 用 FP8/GPTQ-Int4 官方量化（HuggingFace Qwen 官方仓库） |

> 🔶 教材提炼：Qwen 的价格策略是"开源权重打底 + API 便宜走量"。2026-02-16 发布时媒体口径为"Token 价格约为 Gemini 3 的 1/18"（海外网，2026-02-16），2026-08-28 上新时再次强调"每百万 Tokens 低至 0.8 元"（21 世纪经济报道/网易，第三方转述）——这两条可作教材中的价格对比素材，但精确档位须回官方页核验。

### 2.4 选型速查（Qwen）

- **要免费/最便宜 + 端侧/私有化** → 开源小尺寸（0.8B/2B/32B）或 Flash API 档；
- **要开源旗舰 + 多模态推理** → Qwen3.5-397B-A17B（私有部署用 FP8 量化）；
- **要做企业 Agent / 自动化** → Qwen3.6-Plus（API）；
- **要做 RAG/长文档** → Flash（可达 1M 上下文档）或 122B-A10B；
- **要最前沿（2026-08 时间点）** → Qwen3.8-2.4T-A95B（2.4T 开源、原生 256K）。🔶

---

## 3. GLM（智谱 Z.ai）系列

### 3.1 最新 SKU 清单

| 型号 | 总参/激活 | 上下文 | 思考/非思考 | 开源/许可 | 发布日 | 来源 + 日期 + 可信度 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLM-4.7（旗舰，编程 SOTA） | 待核验（报道称采用 DeepSeek 系 MLA 架构） | 待核验 | 混合思考 | 开源（"开源编程 SOTA"、旗舰编程大模型） | 约 2026-01（待核验） | ✅ 智谱官方文档 docs.bigmodel.cn/cn/guide/models/text/glm-4.7；🟡 百度百科（第三方）；✅ AWS Bedrock 官方定价页（价格佐证） |
| GLM-4.7-Flash | **约 30B 总 / 3B 激活**（第三方面向） | **200K** | 混合思考 | **开源 + API 免费** | **2026-01-20** | ✅ 新浪财经 2026-01-20（sina.com.cn/jjxw/2026-01-20...GLM-4.7-Flash）；🟡 zhidx（3B 激活）、NYU Shanghai（30B MoE）、DataLearnerAI 模型卡、ofox（200K/免费） |
| GLM-4.6V（多模态） | **106B**（报道口径） | 待核验 | Visual thinking | 开源、原生工具调用 | **2025-12-09** | ✅ 证券日报/蓝鲸 2025-12-09（zqrb.cn...2025-12-09）；✅ C114；🟡 chinaz（106B） |
| GLM-4.6V-Flash（轻量视觉） | **9B** | 待核验 | — | 开源、**免费商用** | 2025-12-09 | 🟡 chinaz/中国信通院鲸智社区（aihub.caict.ac.cn/models/ZHIPU/GLM-4.6V-Flash） |
| GLM-4.6（2025-11 旗舰） | 待核验 | 待核验 | 思考/非思考 | 发布并开源（报道未明确权重，待核验） | 2025-11 | ⚠️ 凤凰科技（tech.ifeng.com/c/8n4Rx6RlMZc）"代码能力全面进阶" |
| GLM-4.5（上代旗舰） | 355B-A32B（较早口径） | 128K | 思考/非思考 | 开源 | 2025-07 | 信息较早（DoNews/搜狐 2025-07，第三方），仅作排比 |
| GLM-4.5-Air | 106B-A12B | 128K | — | 开源 | 2025-07 | 信息较早，仅作排比 |

> 说明：GLM-4.6V 上市时其系列 API 较前代降价 50%（C114/凤凰 2025-12），具体数值见官方定价页（待核验）。

### 3.2 能力定位（FDE 视角）

| 能力维度 | 表现 | 说明 |
| :--- | :--- | :--- |
| 编码 | GLM-4.7 主打"开源编程 SOTA"；4.6 上一代即"代码能力全面进阶" | 适合代码生成/审查/重构，FDE 交付代码类项目首选 |
| Agent/工具调用 | GLM-4.6V 系列**原生支持 Function Call**；4.7 系强化工具使用 | 分类、RAG 检索、多步工具 Agent |
| 多模态 | 4.6V（106B）与 4.6V-Flash（9B）覆盖中轻两端视觉 | 文档截图、票据识别类 FDE 场景 |
| 免费/降本 | **GLM-4.7-Flash API 完全免费**（额度/限流待核验）；轻量 Flash 免费商用 | 课时演示、原型验证、长期无人值守任务特别适合 |
| 不适合 | —— | 旗舰（4.7）具体参数与国内人民币单价未核到，预算敏感时先用 Flash 验证再升档 |

### 3.3 API 价格（快照 2026-08-30）

| 模型 | 输入（/百万） | 输出（/百万） | 缓存命中输入 | 备注 |
| :--- | ---: | ---: | ---: | :--- |
| GLM-4.7 | **US$0.72**（AWS Bedrock 官方价） | **US$2.64** | 待核验 | ✅ AWS 官方定价页（aws.amazon.com/jp/bedrock/pricing，快照 2026-08）；智谱开放平台人民币价待核验 |
| GLM-4.7-Flash | **免费** | 免费 | 免费 | ✅ 官方免费档（2026-01-20 起，新浪财经）；额度/限流待核验 |
| GLM-4.6V / 4.6V-Flash | 待核验（系列降 50% 后） | 待核验 | 待核验 | 官方：open.bigmodel.cn/pricing |
| GLM-4.6 / 4.5 / 4.5-Air | 待核验 | 待核验 | 待核验 | 官方：open.bigmodel.cn/pricing（4.5 系信息较早） |

### 3.4 选型速查（GLM）

- **想零成本做原型/教学/Auto 任务** → GLM-4.7-Flash（免费、200K、开源）；
- **要开源编程旗舰** → GLM-4.7（海外 USD 价约 $0.72/$2.64，国内价格回 bigmodel 页核验）；
- **要视觉 + 工具调用** → GLM-4.6V（106B）或 4.6V-Flash（9B，免费商用）；
- **要国内合规私有化** → 4.7-Flash/4.6V-Flash 权重均开源可内网部署。🔶

---

## 4. Kimi（月之暗面 Moonshot）系列

### 4.1 最新 SKU 清单

| 型号 | 总参/激活 | 上下文 | 思考/非思考 | 开源/许可 | 发布日 | 来源 + 日期 + 可信度 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Kimi K3（旗舰）** | **2.8T MoE**（部分媒体称"3 万亿级"，口径差异待核验） | 待核验 | 多模态推理；主打长程编程与复杂推理 | **开放权重供公众下载** | 2026-07-17 发布，**2026-07-27/28 权重开放** | 🟡 OpenRouter 模型页（2.8T、open-weight multimodal）；🟡 创业邦/证券之星/21 世纪经济报道 2026-07；⚠️ 官方快速开始 platform.kimi.com/docs/guide/kimi-k3-quickstart |
| Kimi K2.6 | 万亿级（具体参数待核验） | 待核验 | 非思考/思考档（Artificial Analysis 有对照页） | 有 NVIDIA 托管变体（Kimi-K2.6-DFlash，HF） | **约 2026-06**（杨植麟发布会，WWDC 2026 同期） | ⚠️ 新浪证券研报（"发布 KIMI-K2.6，API 提价"）；🟡 Telnyx 发布说明；HF nvidia/Kimi-K2.6-DFlash |
| Kimi K2.5 | 约 1T 级（原生多模态 MoE；总参口径待核验） | **256K** | 视觉 Agentic（可驱动约 100 个子 Agent） | **开源（免费开源，沿用 K2 系许可）** | 约 2025-12～2026-01（待核验） | 🟡 DataLearnerAI（"依然免费开源"）；🟡 kimi-k25.com（1T/256K）；🟡 WaveSpeed 博客（视觉 agentic） |
| Kimi K2 | 1.03T-A32B | 128K | 非思考 | 开源（Modified MIT，较早口径） | 2025-07 | 信息较早，仅作排比 |
| K2-0905 / K2-Turbo / K2-VL / K2 思考版 | 1T 级 / 多模态 | 128K–256K（较早口径） | 思考或非思考 | 开源 | 2025-09～10 | 信息较早，仅作排比 |

### 4.2 能力定位（FDE 视角）

| 能力维度 | 表现 | 说明 |
| :--- | :--- | :--- |
| 长程编程/复杂推理 | K3 主打（媒体与官方口径） | 大型代码库级 Agent、长链路推理任务 |
| 多模态 Agent | K2.5 为视觉 Agentic（100 子 Agent 并行，第三方评测），K3 为多模态推理 | 适合视觉+工具类 Agent、屏幕操作类任务 |
| 超长文档 | K2.5 有 256K 上下文；Kimi 产品侧有 2M 上下文宣传（kimi-app） | 长文档 RAG、法规/合同类 FDE 场景 |
| 编码 | 前端代码榜曾登顶（K3，第三方媒体口径） | 需要自行验证，勿直接采信媒体榜单 |
| 不适合 | —— | K3 价格高（100 元/百万输出）；"最便宜"需求应看 K2.5 或转 Qwen/GLM；无官方免费档 |

### 4.3 API 价格（快照 2026-08-30）

| 模型 | 输入（/百万） | 输出（/百万） | 缓存命中输入 | 备注 |
| :--- | ---: | ---: | ---: | :--- |
| Kimi K3 | **20 元**（≈US$3，第三方） | **100 元**（≈US$15，第三方） | **2 元** | ✅ 财经媒体转官方价：凤凰财经（"K3 旗舰百万 Token 输出定价 100 元"）+ developer.aliyun.com/article/1755205（"官方价 2/20/100 元"）交叉印证；🔶 解读为 缓存命中 2 元 / 输入 20 元 / 输出 100 元（教材提炼，以官方页为准） |
| Kimi K2.5 | 第三方口径 US$0.6（≈4.3 元） | US$3.15（≈22 元） | US$0.1（≈0.7 元） | ⚠️ 第三方聚合：docs.apiyi.com 模型价格表（2026-08）；官方人民币价待核验：platform.kimi.com/docs/pricing/chat-k25 |
| Kimi K2.6 | 待核验（发布时"API 提价"） | 待核验 | 待核验 | ⚠️ 官方定价页：platform.kimi.com/docs/pricing/chat-k26 |
| Kimi K2（较早） | 待核验（历史价，信息较早） | 待核验 | 待核验 | 信息较早，仅作排比 |

> 🔶 教材提炼：Kimi 的定价节奏是"K2.5 低价放量 → K2.6 提价 → K3 直接定到国际一线档（输出 100 元/百万）"，与"中国旗舰模型价格逼近美国档"的市场观察（东北证券研报转述，第三方）一致；对比 GLM-4.7-Flash 免费、Qwen Flash 约 0.8 元起，Kimi 目前不主打性价比。

### 4.4 选型速查（Kimi）

- **要世界级开源大模型 + 长程编程/复杂推理** → Kimi K3（预算充足、可接受 2.8T 部署成本）；
- **要多模态 Agent（视觉+工具）** → K2.5（256K、开源、可驱动多子 Agent）；
- **要"便宜大碗"** → 本轮不优先 Kimi（K3 偏贵），转 Qwen-Flash / GLM-4.7-Flash；
- **要最新 API 档** → K2.6（官方提价后需核价）。🔶

---

## 5. 待核验清单与官方核验入口

| # | 待核验项 | 官方核验入口 |
| ---: | :--- | :--- |
| 1 | Qwen3.5 全系精确价格（Plus/Max/Flash/Omni/3.6）分档数值 | https://help.aliyun.com/zh/model-studio/model-pricing ；https://platform.qianwenai.com/pricing/api |
| 2 | Qwen3.5 各开源型号许可协议（是否 Apache-2.0） | https://huggingface.co/Qwen/Qwen3.5-397B-A17B （LICENSE 文件） |
| 3 | Qwen3.5-Plus 是否权重开源（证券时报报道存疑） | https://huggingface.co/Qwen 官方仓库列表 |
| 4 | Qwen3.8-Flash / Flash-Next / 2.4T-A95B 参数口径与价格 | https://help.aliyun.com/zh/model-studio/qwen3-8-2-4t-a95b |
| 5 | Qwen3.6-Plus 价格（"2.998 元"片段归属） | https://help.aliyun.com/zh/model-studio/model-pricing |
| 6 | GLM-4.7 总参/激活/上下文与国内人民币单价 | https://docs.bigmodel.cn/cn/guide/models/text/glm-4.7 ；https://open.bigmodel.cn/pricing |
| 7 | GLM-4.7-Flash 免费额度与限流 | https://docs.bigmodel.cn/cn/guide/start/model-overview |
| 8 | GLM-4.6V 系列降价后精确价格 | https://open.bigmodel.cn/pricing |
| 9 | Kimi K3 官方价 2/20/100 元的档位归属与美元口径 | https://platform.kimi.com/docs/pricing/chat-k3 |
| 10 | Kimi K2.5 官方人民币价 | https://platform.kimi.com/docs/pricing/chat-k25 |
| 11 | Kimi K2.6 参数/上下文/价格 | https://platform.kimi.com/docs/pricing/chat-k26 |
| 12 | Kimi K3 参数量口径（2.8T vs 3 万亿）与上下文 | https://huggingface.co/moonshotai （官方仓库） |
| 13 | Qwen3.5-397B-A17B 上下文 262K 与混合架构细节（第三方口径） | https://qwen.ai （官方博客） |

---

## 6. 主要来源清单（按系列）

**Qwen**
- 官方：help.aliyun.com（模型/计价/下线公告）、platform.qianwenai.com/pricing/api、alibabacloud.com（Qwen3.6-Plus 新闻稿）、huggingface.co/Qwen、docs.api.nvidia.com（Qwen3-Next NIM）
- 权威媒体：科技日报（stdaily 2026-02-16）、证券时报（stcn，Qwen3.5-Plus 开源报道）、大河财立方（2026-02-25，0.2 元）、澎湃/21 世纪经济报道、C114、海外网（1/18 价格对比）
- 第三方聚合/评测：OpenRouter、benchlm.ai（2026-08）、Morph（morphllm.com/qwen-3-5）、DataLearnerAI、LMSpeed、EmpirioLabs、llmreference、ofox

**GLM**
- 官方：docs.bigmodel.cn/cn/guide/models/text/glm-4.7、open.bigmodel.cn/pricing、aws.amazon.com/bedrock/pricing（GLM 4.7 US$0.72/2.64）、huggingface.co/zai-org
- 权威媒体：新浪财经（GLM-4.7-Flash 2026-01-20）、证券日报/蓝鲸（GLM-4.6V 2025-12-09）、凤凰科技、C114
- 第三方：DataLearnerAI（GLM-4.7-Flash 模型卡）、ofox、EDGE NYU Shanghai、302.AI、SiliconFlow 博客

**Kimi**
- 官方：platform.kimi.com/docs/pricing/chat-k3、chat-k25、chat-k26、kimi-k3-quickstart、huggingface.co/moonshotai
- 权威媒体：21 世纪经济报道（K3 开源 2026-07-28）、凤凰财经（K3 输出 100 元）、创业邦、证券之星、TechWeb（2026-07-17）
- 第三方：OpenRouter（moonshotai/kimi-k3）、benchlm.ai/moonshot（$3/$15，2026-08）、Morph、DataLearnerAI、WaveSpeed、kimi-k25.com、API易（docs.apiyi.com，K2.5 $0.6/$3.15/$0.1）、Artificial Analysis

> 免责：本报告为教材编写用调研快照；所有"待核验"项在正式引用前必须点开官方入口复核，随模型迭代价格与 SKU 会快速变动。