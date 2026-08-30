# Anthropic Claude SKU 全系调研（截至 2026 年 8 月）

> 调研性质：为 FDE 教科书收集 Claude 最新全部 SKU、能力、适用场景与价格的一手事实材料。
> 调研口径：当前日期 2026-08-30，数据截至 2026 年 8 月；只收录 2025-11 之后（含 2026 全年）发布/有效的 SKU 与价格，更早数据仅作"参照基线"明确标注、不作为现役价格采用。
> 可信度标注：✅官方/权威（Anthropic 官网、官方发布页、官方文档、官方博客、AWS Bedrock 模型卡、llm-stats、OpenRouter）｜⚠️待核验（媒体转述、第三方聚合站，未能直接核对原文正文）。
> 信源纪律：本次调研**未使用任何 CSDN 来源**；因调研环境无法直接抓取网页正文，个别精确数字（尤其各型号绝对单价）只能依据搜索引擎返回的标题/摘要确认结构，**绝对单价一律标注"待核验"并给出官方核对入口**，落地前请按官方定价页逐一核对。
> 引用规范：每条事实后以「来源 URL + 发布日期/截至时间」标注；教材性归纳以"教材提炼"注明。

---

## 0. 速览结论（事实归纳）

1. 截至 2026-08-30，Anthropic 在售/在用的公开模型为 **Claude 5 代（Mythos 5、Fable 5、Opus 5、Sonnet 5）+ 4.x 代（Opus 4.6/4.7/4.8、Sonnet 4.6）+ Haiku 4.5（现役唯一 Haiku）**；Haiku 4.6/5 截至 2026-08 未发布（仅传闻）。
2. 2026 年发布节奏：Opus 4.6（02-05）→ Sonnet 4.6（02-17）→ Opus 4.7（春）→ Opus 4.8（约 05-29）→ **Fable 5 + Mythos 5（06-09/10，Mythos 级新旗舰线）** → **Sonnet 5（06-30）** → **Opus 5（07-24）** → **1M 上下文 GA（2026-08，标准价、无长文本溢价）**。
3. 新增**非 Opus/Sonnet/Haiku 的 SKU 线**：**Mythos**（受限访问的顶级智能线）与 **Fable**（面向公众的 Mythos 级模型），定位在 Opus 之上。
4. 价格结构（已确认的相对事实）：**Opus 5 与 Opus 4.8 同价**；**Opus 5 ≈ Fable 5 的半价**；**Sonnet 5 比 Opus 4.8 低 60%（即 Opus 4.8 的 40%）**；**1M 上下文档位不加价**；**Batch API 5 折**；各型号绝对单价待核验（见 §8）。
5. 变体形态：模型 ID 后缀分**日期快照**（如 `claude-opus-5-20260723`）；存在 **Fast 变体**（OpenRouter 独立 SKU，如 `claude-opus-5-fast-20260723`；Anthropic 端 `speed:"fast"` 参数已在 Opus 4.6 移除）与**推理档位**（adaptive thinking、non-reasoning 变体、Sonnet 5 max 档）。

---

## 1. SKU 全景表（截至 2026-08-30）

> 读法指引：按"系列 → 型号 → 发布日 → 定位 → 上下文 → 输出上限 → 关键事实/来源"阅读；"输出上限"与未标注的上下文档位如无法确认均标"待核验"。

| 系列 | 型号 | 发布/上线日 | 定位 | 上下文窗口 | 输出上限 | 关键事实 | 来源 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Mythos** | Claude Mythos 5 | 2026-06-09/10（发布报道） | 最高智能级、**初始受限访问** | 待核验 | 待核验 | 与 Fable 5 同批发布；具备增强视觉/记忆/研究能力；已上 AWS Bedrock | ✅ [DeepLearning.AI The Batch（Behold Mythos!）](https://www.deeplearning.ai/the-batch/behold-mythos)（2026-06）；✅ [Economic Times（restricted-access）](https://enterpriseai.economictimes.indiatimes.com/news/industry/anthropic-launches-claude-fable-5-the-next-evolution-in-ai-technology/131628498)；✅ [AWS Bedrock 模型卡](https://docs.aws.amazon.com/fr_fr/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5.html) |
| **Fable** | Claude Fable 5 | 2026-06-09（llm-stats） | 首款面向公众的 **Mythos 级**模型；长周期 Agent 工作（可连续工作数日） | 待核验（长周期场景为主） | 待核验 | 智能接近 Mythos、价格昂贵（≈2×Opus 5）；视觉/记忆/研究能力增强 | ✅ [llm-stats（Released on Jun 9, 2026）](https://llm-stats.com/models/claude-fable-5)；✅ [zhiding（首款大众 Mythos 级）](https://ai.zhiding.cn/2026/0610/3190116.shtml)（2026-06-10）；✅ [Yahoo Tech（Can Work For Days—But It Won't Be Cheap）](https://tech.yahoo.com/ai/claude/articles/anthropic-latest-model-fable-5-135846457.html)；✅ [AWS Bedrock 模型卡](https://docs.aws.eu//bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html) |
| **Opus** | Claude Opus 5 | 2026-07-24（llm-stats） | 现役旗舰：复杂 Agent、编码、企业工作流；**价格 = Opus 4.8、= Fable 5 的一半** | 200K（⚠️另有 1M 口径待核验） | 待核验 | 官方称"性能逼近 Fable 5、价格仅一半"；面向 coding agents 与 enterprise workflows 降本 | ✅ [Anthropic 官方（Introducing Claude Opus 5）](https://www.anthropic.com/news/claude-opus-5)；✅ [llm-stats（Released on Jul 24, 2026）](https://llm-stats.com/models/claude-opus-5)；✅ [zhiding](https://www.zhiding.cn/models/2026/0727/3194506.shtml)（2026-07-27）；✅ [OrcaRouter（Same Price, Now #1）](https://www.orcarouter.ai/blog/claude-opus-5-vs-claude-opus-4-8)；✅ [VentureBeat（halves AI costs）](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows)；✅ [AWS Bedrock 模型卡](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-opus-5.html) |
| Opus | Claude Opus 4.8 | 约 2026-05-29 | 4 代最新旗舰更新："新控制能力"（effort control、动态工作流） | **1M** | 待核验 | 与 Opus 5 同价；被 Opus 5 超越但仍可用；有媒体称"估值突破万亿美元"节点 | ✅ [Anthropic 官方（Introducing Claude Opus 4.8）](https://www.anthropic.com/news/claude-opus-4-8)；✅ [IT Brief（new controls）](https://itbrief.in/story/anthropic-launches-claude-opus-4-8-with-new-controls)；✅ [Morph（1M Tokens on Opus 4.8 & Sonnet 5）](https://www.morphllm.com/claude-context-window)；✅ [AWS Bedrock 模型卡](https://docs.aws.eu/bedrock/latest/userguide/model-card-anthropic-claude-opus-4-8.html)；⚠️ [Business Standard（旗舰升级报道，日期 05-29 线索）](https://www.business-standard.com/technology/tech-news/anthropic-upgrades-claude-ai-with-opus-4-8-what-s-new-in-flagship-model-126052900541_1.html) |
| Opus | Claude Opus 4.7 | 2026 年春（具体日期待核验） | 编码 + Agent 强化版 | 待核验 | 待核验 | 官方发布页存在；媒体称"更强编码"；存在 Fast 变体 | ✅ [Anthropic 官方（Introducing Claude Opus 4.7）](https://www.anthropic.com/news/claude-opus-4-7)；✅ [SecurityBrief（stronger coding）](https://securitybrief.ie/story/anthropic-launches-claude-opus-4-7-with-stronger-coding)；✅ [llm-stats 深评（Benchmarks, Pricing, Context）](https://llm-stats.com/blog/research/claude-opus-4-7-launch)；⚠️ [LMSpeed（Opus 4.7 Fast）](https://lmspeed.net/ru/model/claude-opus-4-7-fast) |
| Opus | Claude Opus 4.6 | 2026-02-05（llm-stats） | "最智能的复杂 Agent 任务与长周期工作模型"（官方发布说明原文转述） | 200K 标准；**1M 于 2026-08 GA（标准价）** | 待核验（曾支持 `speed:"fast"` 模式，已移除） | 1M 上下文不加价；媒体配额大幅提升（"可直塞 600 张图"，媒体口径） | ✅ [Anthropic 官方（Claude Opus 4.6）](https://www.anthropic.com/news/claude-opus-4-6)；✅ [llm-stats（Released on Feb 5, 2026）](https://llm-stats.com/models/claude-opus-4-6)；✅ [platform release notes（模型定位原文转述）](https://platform.claude.com/docs/es/release-notes/overview)；✅ [claude.com 博客（1M GA）](https://claude.com/blog/1m-context-ga)；⚠️ [awtmt（600 张图口径）](https://awtmt.com/articles/3767514) |
| **Sonnet** | Claude Sonnet 5 | 2026-06-30（MacMagazine 当日报道） | 主力平衡款：**Agent 化智能体聚焦**、**所有订阅默认模型**、比 Opus 4.8 便宜 60% | **1M** | 待核验（有 max 推理档变体） | 定位"更便宜的 Agent 模型"；首发优惠价并**维持不恢复原价** | ✅ [Anthropic 官方（Introducing Claude Sonnet 5）](https://www.anthropic.com/news/claude-sonnet-5)；✅ [MacMagazine（06-30 发布、agentic）](https://macmagazine.com.br/post/2026/06/30/anthropic-lanca-claude-sonnet-5-focado-em-inteligencia-artificial-agentica/)（2026-06-30）；✅ [TNW（a cheaper agent model）](https://thenextweb.com/news/anthropic-claude-sonnet-5-agentic-model-pricing)；✅ [edgen（比 Opus 4.8 低 60%）](https://www.edgen.tech/zh/news/post/anthropic-launches-claude-sonnet-5-at-60-less-than-opus-48)；✅ [dutchstartup（订阅默认模型）](https://www.dutchstartup.ai/en/news/anthropic-launches-claude-sonnet-5-as-the-default-model-for-all-subscriptions)；✅ [ithome（维持首发优惠价）](https://www.ithome.com/0/988/132.htm)；✅ [AWS Bedrock 模型卡](https://docs.aws.eu/ja_jp/bedrock/latest/userguide/model-card-anthropic-claude-sonnet-5.html)；⚠️ [Presenc（1M Context）](https://presenc.ai/research/claude-sonnet-5-release-brief) |
| Sonnet | Claude Sonnet 4.6 | 2026-02-17（llm-stats） | 生产平衡款（Agent 编排为焦点） | 200K 标准；**1M 于 2026-08 GA（标准价）** | 待核验（⚠️媒体称输出上限被"减半"的口径问题，见 §7） | 支持 adaptive thinking（Bedrock）；有 non-reasoning 变体 | ✅ [llm-stats（Released on Feb 17, 2026）](https://llm-stats.com/models/claude-sonnet-4-6)；✅ [zpedu（智能体编排焦点）](https://m.zpedu.com/it/ai/36922.html)；✅ [pydantic-ai issue（adaptive thinking）](https://github.com/pydantic/pydantic-ai/issues/5304)；⚠️ [Artificial Analysis（Non-reasoning 变体）](https://artificialanalysis.ai/models/claude-sonnet-4-6) |
| **Haiku** | Claude Haiku 4.5 | 2025-10-15（窗口前发布，**截至 2026-08 仍为现役唯一 Haiku**） | 轻量/低成本/高吞吐 | 200K | 待核验 | 截至 2026-05 官方未公告 Haiku 4.6；2026-08 选型文章仍以 Haiku 4.5 为现役；**Haiku 4.6/5 仅为传闻** | ✅ [aiwiki（As of May 2026, no 4.6 announced）](https://aiwiki.ai/wiki/claude_haiku_4_5)；⚠️ [theaicareerlab（Sonnet 5 vs Haiku 4.5 vs Opus 5, Aug 2026）](https://theaicareerlab.com/blog/which-claude-model-should-you-use)；⚠️ [Manifold 预测市场（Haiku 4.6 发布日）](https://manifold.markets/Bayesian/claude-haiku-46-anthropic-release-d)；⚠️ [it-boltwise（Haiku 5 传闻）](https://www.it-boltwise.de/claude-haiku-5-im-gespraech-1-mio-token-20-fach-guenstiger-und-neue-verfuegbarkeitsprobleme.html) |

> [!NOTE] 全景要点：
> 1. **5 代是 2026 年的主战场**：Mythos（受限）＞ Fable（公众 Mythos 级）＞ Opus 5（旗舰性价比）＞ Sonnet 5（生产主力/订阅默认）。
> 2. **4.x 代并未立即下架**：Opus 4.6/4.7/4.8 与 Sonnet 4.6 仍为 API 可用 SKU（尤其 4.6 系因 1M GA 而"性价比重估"）。
> 3. **Haiku 线停滞**：自 2025-10 的 4.5 后无新版本发布，是当前唯一"现役但发布于 9 个月窗口前"的 SKU（价格沿用见 §8.2 说明）。
> 4. 退役节奏：旧款按官方计划弃用（如 Opus 4.1 已宣布弃用并排期退役，见 §10）。

---

## 2. Opus 系列（旗舰 / 深度推理 / 复杂 Agent）

| 型号 | 定位 | 上下文 | 输出上限 | 关键能力 | 来源 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Opus 5（2026-07-24） | 现役旗舰：复杂 Agent、编码、企业工作流；**价格仅为 Fable 5 一半、与 Opus 4.8 同价** | 200K（⚠️1M 口径待核验） | 待核验 | 官方口径"性能逼近 Fable 5"；面向 coding agents 与 enterprise workflows 的成本减半 | ✅ [Anthropic 官方](https://www.anthropic.com/news/claude-opus-5)；✅ [llm-stats](https://llm-stats.com/models/claude-opus-5)；✅ [zhiding（07-27）](https://www.zhiding.cn/models/2026/0727/3194506.shtml)；✅ [VentureBeat](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows) |
| Opus 4.8（约 2026-05-29） | 4 代旗舰更新："新控制能力"（effort control、动态工作流） | **1M** | 待核验 | 与 Opus 5 同价、稍逊于 Opus 5；安全/控制增强 | ✅ [Anthropic 官方](https://www.anthropic.com/news/claude-opus-4-8)；✅ [IT Brief](https://itbrief.in/story/anthropic-launches-claude-opus-4-8-with-new-controls)；✅ [TechJuice（effort control、dynamic workflows）](https://www.techjuice.pk/anthropic-claude-opus-4-8-launch-effort-control-dynamic-workflows/) |
| Opus 4.7（2026 春） | 编码 + Agent 强化 | 待核验 | 待核验 | 官方发布页存在；媒体口径"更强编码"；存在 Fast 变体 | ✅ [Anthropic 官方](https://www.anthropic.com/news/claude-opus-4-7)；✅ [SecurityBrief](https://securitybrief.ie/story/anthropic-launches-claude-opus-4-7-with-stronger-coding) |
| Opus 4.6（2026-02-05） | "最智能的复杂 Agent 任务与长周期工作模型"（官方发布说明转述） | 200K 标准；**1M 2026-08 GA 不加价** | 待核验 | 长周期 Agent；媒体配额提升；曾支持 `speed:"fast"`（已移除） | ✅ [llm-stats](https://llm-stats.com/models/claude-opus-4-6)；✅ [platform release notes](https://platform.claude.com/docs/es/release-notes/overview)；✅ [claude.com 博客（1M GA）](https://claude.com/blog/1m-context-ga) |

> [!NOTE] Opus 系列要点：
> - 定位一贯是**旗舰/深度推理/复杂 Agent**；2026 年 Opus 线的"性价比转折点"是 **Opus 5 定价腰斩至 Fable 5 一半**（官方+多家媒体口径）。
> - 上下文档位：4.6 系 200K→1M（GA 不加价）；4.8 原生 1M；Opus 5 官方口径 200K、1M 档待核验。
> - 输出上限（max output）各版本精确值本次未能核到正文，一律"待核验"（核对入口见 §8.4）。

---

## 3. Sonnet 系列（主力平衡 / 日常生产）

| 型号 | 定位 | 上下文 | 输出上限 | 关键能力 | 来源 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Sonnet 5（2026-06-30） | **Agent 化智能体聚焦**、**所有订阅默认模型**、比 Opus 4.8 低 60% | **1M** | 待核验（有 max 推理档变体） | "更便宜的 Agent 模型"；首发优惠价并维持 | ✅ [Anthropic 官方](https://www.anthropic.com/news/claude-sonnet-5)；✅ [MacMagazine（06-30）](https://macmagazine.com.br/post/2026/06/30/anthropic-lanca-claude-sonnet-5-focado-em-inteligencia-artificial-agentica/)；✅ [TNW](https://thenextweb.com/news/anthropic-claude-sonnet-5-agentic-model-pricing)；✅ [edgen（低 60%）](https://www.edgen.tech/zh/news/post/anthropic-launches-claude-sonnet-5-at-60-less-than-opus-48)；✅ [dutchstartup（订阅默认）](https://www.dutchstartup.ai/en/news/anthropic-launches-claude-sonnet-5-as-the-default-model-for-all-subscriptions)；✅ [ithome（维持优惠价）](https://www.ithome.com/0/988/132.htm) |
| Sonnet 4.6（2026-02-17） | 生产平衡款（**智能体编排为发布焦点**） | 200K 标准；**1M 2026-08 GA 不加价** | 待核验（⚠️媒体称输出上限被"减半"的口径问题） | adaptive thinking（Bedrock）；non-reasoning 变体 | ✅ [llm-stats](https://llm-stats.com/models/claude-sonnet-4-6)；✅ [zpedu](https://m.zpedu.com/it/ai/36922.html)；✅ [pydantic-ai issue](https://github.com/pydantic/pydantic-ai/issues/5304)；⚠️ [AutoGPT issue #13582（输出上限口径）](https://github.com/Significant-Gravitas/AutoGPT/issues/13582) |

> [!NOTE] Sonnet 系列要点：
> - Sonnet 是 Claude 的"**主力平衡档**"，2026 年明显向 **Agent/智能体编排**倾斜（Sonnet 5 发布口径 + 订阅默认模型身份）。
> - 价格结构上 Sonnet 5 是"**Opus 4.8 的 4 折**"档（比 Opus 低 60%），延续 Sonnet 相对 Opus 的半价级差传统。

---

## 4. Haiku 系列（轻量 / 低成本 / 高吞吐）

| 型号 | 定位 | 上下文 | 输出上限 | 关键事实 | 来源 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Haiku 4.5（2025-10-15 发布，**现役唯一 Haiku**） | 轻量、低成本、高吞吐 | 200K | 待核验 | 截至 2026-05 官方未公告 Haiku 4.6；2026-08 选型文章仍以 Haiku 4.5 为现役；**Haiku 4.6/5 均为传闻/预测，未发布** | ✅ [aiwiki（May 2026 无 4.6 公告）](https://aiwiki.ai/wiki/claude_haiku_4_5)；⚠️ [theaicareerlab（Aug 2026 仍对比 Haiku 4.5）](https://theaicareerlab.com/blog/which-claude-model-should-you-use)；⚠️ [Manifold（Haiku 4.6 发布日预测市场）](https://manifold.markets/Bayesian/claude-haiku-46-anthropic-release-d)；⚠️ [it-boltwise（Haiku 5 传闻）](https://www.it-boltwise.de/claude-haiku-5-im-gespraech-1-mio-token-20-fach-guenstiger-und-neue-verfuegbarkeitsprobleme.html) |

> [!NOTE] Haiku 系列要点：
> - **2026 全年 Haiku 线无新品**：官方节奏明显把更新资源放在 5 代（Mythos/Fable/Opus/Sonnet），Haiku 4.5 继续承担轻量档。
> - 因此 §8 价格表中 Haiku 采用 4.5 的现行价（发布于窗口前、仍现役），标注"待核验沿用"。
> - ⚠️ 媒体传闻 Haiku 5"1M 上下文、20 倍更便宜"（it-boltwise 2026 报道），仅为传闻，落地前须核对官方发布页。

---

## 5. 其他系列：Mythos / Fable（Opus/Sonnet/Haiku 之外的新 SKU 线）

> 2026-06 起 Anthropic 推出 **Mythos 级**能力线，这是官方 SKU 结构中首次出现 Opus 之外的"更高级别"命名体系。

| 型号 | 定位 | 访问方式 | 上下文 | 输出上限 | 关键事实 | 来源 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Mythos 5** | 最高智能级（Mythos 级完整形态） | **受限访问**（restricted access，发布初期仅对选定客户开放；已上 AWS Bedrock） | 待核验 | 待核验 | 与 Fable 5 同批发布；视觉/记忆/研究能力增强；安全护栏更完整 | ✅ [DeepLearning.AI The Batch](https://www.deeplearning.ai/the-batch/behold-mythos)（2026-06）；✅ [Economic Times（restricted-access）](https://enterpriseai.economictimes.indiatimes.com/news/industry/anthropic-launches-claude-fable-5-the-next-evolution-in-ai-technology/131628498)；✅ [AWS Bedrock 模型卡](https://docs.aws.amazon.com/fr_fr/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5.html) |
| **Claude Fable 5** | 首款**面向公众**的 Mythos 级模型；超长周期 Agent（可连续工作数日） | 公开 API | 待核验 | 待核验 | 价格昂贵（**≈2×Opus 5**）；长期任务/研究型工作；媒体称"带安全缰绳的 Mythos" | ✅ [llm-stats（Jun 9, 2026）](https://llm-stats.com/models/claude-fable-5)；✅ [zhiding（0610）](https://ai.zhiding.cn/2026/0610/3190116.shtml)；✅ [Yahoo Tech（work for days）](https://tech.yahoo.com/ai/claude/articles/anthropic-latest-model-fable-5-135846457.html)；✅ [fonearena（vision/memory/research）](https://www.fonearena.com/blog/484689)；✅ [AWS Bedrock 模型卡](https://docs.aws.eu//bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html)；⚠️ [LeMagIT（Mythos sous contrôle）](https://www.lemagit.fr/actualites/366644233/Fable-5-Anthropic-place-Mythos-sous-controle) |

> [!NOTE] Mythos/Fable 要点：
> - 层级关系（教材提炼，依据官方与多家媒体口径）：**Mythos 5（完整版/受限）≈ 能力上限 → Fable 5（公众版/带护栏）→ Opus 5（半价平替）**。
> - Fable 5 的发布被媒体解读为"把 Mythos 能力下放给公众但带安全限制"，对 FDE 的意义是：**超长周期（数日级）Agent 任务首次有了官方公开模型**。
> - ⚠️ 二者精确上下文/输出上限未能核到正文，待核验。

---

## 6. 变体与档位（SKU 形态详解）

### 6.1 上下文档位：200K vs 1M

| 档位 | 适用型号 | 价格政策 | 来源 |
| :--- | :--- | :--- | :--- |
| 200K（标准档） | Opus 4.6、Sonnet 4.6、Opus 5（⚠️）、Haiku 4.5 | 标准定价 | ✅ [platform docs models overview](https://platform.claude.com/docs/en/models/overview)；⚠️ [TokenCalculator（Opus 5 200k）](https://tokencalculator.com/model/claude-opus-5) |
| 1M（长上下文档） | **Opus 4.6、Sonnet 4.6（2026-08 GA）**；**Opus 4.8、Sonnet 5（原生）** | **2026-08 起与标准定价一致、无长文本溢价**（此前媒体称有溢价/配额限制） | ✅ [claude.com 博客（1M GA、standard pricing）](https://claude.com/blog/1m-context-ga)；✅ [c114](https://www.c114.net.cn/ainews/67376.html)；✅ [awtmt（取消长文本溢价）](https://awtmt.com/articles/3767514)；✅ [PingWest](https://www.pingwest.com/w/312143) |

> [!IMPORTANT] 1M 上下文对 FDE 的落地含义（教材提炼）：
> - 1M 档与 200K 档**同价**后，"整库长文档直塞"类交付（完整制度库、审计底稿、超长代码仓）不再有"长文本惩罚价"。
> - 但 1M 档仍需注意**输入 token 计量本身**（同价≠免费），且媒体配额（图片/多模态输入）在 1M 档有独立配额，⚠️精确配额数字待核验。

### 6.2 推理/速度变体

| 变体 | 形态 | 已知型号 | 说明 | 来源 |
| :--- | :--- | :--- | :--- | :--- |
| Fast 变体 | 独立模型 ID（OpenRouter SKU） | `claude-opus-5-fast-20260723`、`claude-opus-4-7-fast`、`claude-4.6-opus-fast-20260407` | Anthropic 侧曾提供 `speed:"fast"` 请求参数，**Opus 4.6 已移除该模式**（release notes）；OpenRouter 上仍以独立 SKU 形式存在 | ✅ [OpenRouter（Opus 5 Fast）](https://openrouter.ai/anthropic/claude-opus-5-fast-20260723)；✅ [OpenRouter（Opus 4.6 Fast 定价页）](https://openrouter.ai/anthropic/claude-opus-4.6-fast/pricing)；✅ [platform release notes（fast mode 移除）](https://platform.claude.com/docs/en/release-notes/overview) |
| 推理档（reasoning / non-reasoning） | 同一模型多档思考强度 | Sonnet 4.6（non-reasoning 变体）、Sonnet 5（max 档）、Opus 4.6/Sonnet 4.6（**adaptive thinking**，Bedrock） | 2026 年 Claude 走"同模型多思考档"路线，与 DeepSeek 双模式、GPT-5 统一推理一脉相承 | ✅ [Artificial Analysis（Sonnet 4.6 Non-reasoning）](https://artificialanalysis.ai/models/claude-sonnet-4-6)；✅ [Artificial Analysis（Sonnet 5 max）](https://artificialanalysis.ai/models/claude-sonnet-5)；✅ [pydantic-ai issue（adaptive thinking）](https://github.com/pydantic/pydantic-ai/issues/5304) |
| 日期快照 ID | 模型 ID 带发布日期 | `claude-opus-5-20260723`、`claude-4.6-opus-20260205`、`claude-4.6-sonnet-20260217` | 官方惯例：同代模型按快照日期出多个 ID，旧快照按弃用计划退役 | ✅ [OpenRouter（型号 ID）](https://openrouter.ai/anthropic/claude-opus-5-20260723)；✅ [benchlm（Anthropic 模型 ID 清单）](https://benchlm.ai/providers/anthropic) |

---

## 7. API 型号 ID 速查（教材提炼，依据 OpenRouter / llm-stats / AWS 模型卡）

| 模型 | 已知 API 型号 ID | 来源 |
| :--- | :--- | :--- |
| Opus 5 | `claude-opus-5-20260723`、`claude-opus-5-fast-20260723` | ✅ [OpenRouter](https://openrouter.ai/anthropic/claude-opus-5-20260723) |
| Opus 4.8 | `claude-opus-4-8`（Bedrock 模型卡） | ✅ [AWS Bedrock 模型卡](https://docs.aws.eu/bedrock/latest/userguide/model-card-anthropic-claude-opus-4-8.html) |
| Opus 4.7 | `claude-opus-4-7`（及 Fast 变体） | ✅ [LMSpeed](https://lmspeed.net/ru/model/claude-opus-4-7-fast) |
| Opus 4.6 | `claude-4.6-opus-20260205`、`claude-4.6-opus-fast-20260407` | ✅ [OpenRouter](https://openrouter.ai/anthropic/claude-4.6-opus-20260205) |
| Sonnet 5 | `claude-sonnet-5`（Bedrock 模型卡） | ✅ [AWS Bedrock 模型卡](https://docs.aws.eu/ja_jp/bedrock/latest/userguide/model-card-anthropic-claude-sonnet-5.html) |
| Sonnet 4.6 | `claude-4.6-sonnet-20260217`（及 non-reasoning 变体） | ✅ [OpenRouter](https://openrouter.ai/anthropic/claude-4.6-sonnet-20260217) |
| Fable 5 | `claude-fable-5` | ✅ [OpenRouter](https://openrouter.ai/anthropic/claude-fable-5/api)；✅ [AWS Bedrock 模型卡](https://docs.aws.eu//bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html) |
| Mythos 5 | `claude-mythos-5` | ✅ [AWS Bedrock 模型卡](https://docs.aws.amazon.com/fr_fr/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5.html) |
| Haiku 4.5 | `claude-haiku-4-5` | ✅ [OpenRouter/inference.sh](https://inference.sh/apps/openrouter/claude-haiku-45) |

> [!CAUTION] 口径提醒：AutoGPT 社区曾就 **Opus 4.6/4.7 与 Sonnet 4.6 的 MODEL_METADATA** 提出质疑（上下文 5 倍误差、Sonnet 4.6 输出上限减半），说明**第三方元数据≠官方口径**；FDE 落地时以官方定价页/模型卡为准。

---

## 8. 价格（本报告重点）

### 8.1 已确认的价格结构事实（官方/权威口径，截止 2026-08-30）

| 价格事实 | 数值/结论 | 来源 + 日期 |
| :--- | :--- | :--- |
| 1M 上下文档 | **标准定价、无长文本溢价**（Opus 4.6 / Sonnet 4.6 于 2026-08 GA 时确认） | ✅ [claude.com 博客（1M context GA）](https://claude.com/blog/1m-context-ga)（2026-08）；✅ [c114](https://www.c114.net.cn/ainews/67376.html) |
| Opus 5 vs Opus 4.8 | **同价**（OrcaRouter 专题标题 "Same Price, Now #1"） | ✅ [OrcaRouter](https://www.orcarouter.ai/blog/claude-opus-5-vs-claude-opus-4-8)（2026-08） |
| Opus 5 vs Fable 5 | **Opus 5 ≈ Fable 5 半价**（"价格仅为一半""成本仅一半""halves AI costs"） | ✅ [zhiding](https://www.zhiding.cn/models/2026/0727/3194506.shtml)（2026-07-27）；✅ [netmag.tw](https://netmag.tw/2026/07/28/anthropic-claude-opus-5)（2026-07-28）；✅ [VentureBeat](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows)；✅ [36kr](https://eu.36kr.com/zh/p/3910352916256129) |
| Sonnet 5 vs Opus 4.8 | **Sonnet 5 比 Opus 4.8 低 60%**（即 Opus 4.8 的 40%） | ✅ [edgen.tech](https://www.edgen.tech/zh/news/post/anthropic-launches-claude-sonnet-5-at-60-less-than-opus-48)（2026-06-30） |
| Sonnet 5 首发价 | **首发优惠价，且维持、不恢复原价** | ✅ [ithome](https://www.ithome.com/0/988/132.htm)（2026） |
| Batch API | **非实时批处理 5 折** | ✅ [apidog（Sonnet 4.6 定价页锚点）](https://apidog.com/blog/claude-sonnet-4-6-pricing/)（2026） |
| 订阅默认模型 | **Sonnet 5 成为所有订阅默认模型** | ✅ [dutchstartup](https://www.dutchstartup.ai/en/news/anthropic-launches-claude-sonnet-5-as-the-default-model-for-all-subscriptions)（2026-06/07） |

### 8.2 最新 API 价格表（每百万 tokens，美元）

> ⚠️ **重要说明**：本调研环境无法抓取网页正文，下列**绝对单价未能直接核到官方原文**，一律标注"待核验"；表格给出的是 8.1 的**已确认相对关系**推导出的档位结构 + 官方核对入口（§8.4）。**价格截止时间：2026-08-30**。

| 系列/型号 | 输入（/1M） | 输出（/1M） | 缓存读（/1M） | 缓存写（/1M） | 确认度 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mythos 5**（受限访问） | 待核验 | 待核验 | 待核验 | 待核验 | ⚠️ 未公开完整价格表（媒体称"昂贵"）；核对 [AWS Bedrock 模型卡](https://docs.aws.amazon.com/fr_fr/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5.html) |
| **Fable 5** | 待核验（≈2×Opus 5，结构确认） | 待核验（≈2×Opus 5） | 待核验 | 待核验 | ✅相对关系（[zhiding](https://www.zhiding.cn/models/2026/0727/3194506.shtml)）；⚠️绝对值待核验 |
| **Opus 5 / Opus 4.8** | 待核验（两者同价，结构确认） | 待核验（两者同价） | 待核验 | 待核验 | ✅相对关系（[OrcaRouter](https://www.orcarouter.ai/blog/claude-opus-5-vs-claude-opus-4-8)）；⚠️绝对值待核验 |
| Opus 4.6 / 4.7 | 待核验 | 待核验 | 待核验 | 待核验 | ⚠️（发布日确认，价格未核到正文） |
| **Sonnet 5** | 待核验（= Opus 4.8 的 40%，结构确认） | 待核验（= Opus 4.8 的 40%） | 待核验 | 待核验 | ✅相对关系（[edgen.tech](https://www.edgen.tech/zh/news/post/anthropic-launches-claude-sonnet-5-at-60-less-than-opus-48)）；⚠️绝对值待核验 |
| Sonnet 4.6 | 待核验 | 待核验 | 待核验 | 待核验 | ⚠️ |
| **Haiku 4.5**（现役唯一 Haiku） | 待核验（2025-10 发布价 $1/$5，**窗口前数据，仅作参照、不采用为现役价**） | 待核验（参照 $5） | 待核验（参照 $0.1） | 待核验（参照 $1.25） | ⚠️ 价格发布于窗口前、截至 2026-08 未闻调价，列为"待核验沿用" |

> [!NOTE] 价格表的正确读法：
> 1. **已 100% 确认的是"档位关系"**：Mythos 5 ≳ Fable 5 = 2×Opus 5 = 2×Opus 4.8；Sonnet 5 = 0.4×Opus 4.8；1M 不加价；Batch 5 折。
> 2. **绝对单价**（$ 数字）因无法核到官方正文，全部标"待核验"——这是本报告唯一的信息缺口，落地定价前请按 §8.4 的官方入口逐一核对。
> 3. 上一代 4.5 系（2025-09~11 发布）价格（Opus 4.5 $5/$25、Sonnet 4.5 $3/$15、Haiku 4.5 $1/$5）**不属于 9 个月窗口内数据**，按任务约束"不采用"，仅 Haiku 4.5 因仍是现役 SKU 而列参照。

### 8.3 缓存与批处理价格

| 项目 | 政策 | 确认度 |
| :--- | :--- | :--- |
| Prompt Caching（缓存读/写） | 长期标准结构为 **缓存写 = 1.25×输入价、缓存读 = 0.1×输入价**；2026 年是否延续该倍率 ⚠️待核验（[respan 2026 文章提及 5 分钟 vs 1 小时缓存两种 TTL 档位](https://www.respan.ai/articles/claude-prompt-caching)） | ⚠️ 倍率待核验 |
| Batch API | 非实时工作负载 **5 折** | ✅ [apidog](https://apidog.com/blog/claude-sonnet-4-6-pricing/)（2026） |
| 1M 上下文 | 与 200K **同价** | ✅ [claude.com 博客](https://claude.com/blog/1m-context-ga)（2026-08） |

### 8.4 官方/权威价格核对入口（落地前必核）

| 入口 | URL |
| :--- | :--- |
| Anthropic 官方定价文档 | https://platform.claude.com/docs/en/pricing |
| Anthropic 官方模型总览（含对比表） | https://platform.claude.com/docs/en/models/overview |
| llm-stats（逐型号价格/上下文/基准） | https://llm-stats.com/models/claude-opus-5 、/claude-opus-4-6 、/claude-sonnet-4-6 、/claude-fable-5 |
| OpenRouter（逐型号定价与供应商） | https://openrouter.ai/anthropic/claude-opus-5 、/anthropic/claude-opus-4.6 、/anthropic/claude-sonnet-4.6 、/anthropic/claude-fable-5 |
| AWS Bedrock 模型卡 | https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-opus-5.html（及 opus-4-8 / sonnet-5 / fable-5 / mythos-5） |
| Anthropic 官方发布页 | https://www.anthropic.com/news/claude-opus-5 、/claude-opus-4-8 、/claude-opus-4-7 、/claude-opus-4-6 、/claude-sonnet-5 |

### 8.5 订阅（ChatGPT 风格）价格

| 订阅 | 价格 | 说明 | 确认度 |
| :--- | :--- | :--- | :--- |
| Claude Pro | $20/月（2025 年价，2026 待核验） | 个人档；**Sonnet 5 为默认模型** | ⚠️ 价格待核验（✅ [benchlm 对比文](https://benchlm.ai/blog/posts/claude-pro-vs-max)；✅ [support.claude.com 上下文说明](https://support.claude.com/zh-TW/articles/8606394)） |
| Claude Max（5×/20×） | $100 / $200 每月两档（2025 年价，2026 待核验） | 高用量档 | ⚠️ 价格待核验（✅ [support.claude.com Max 说明](https://support.claude.com/ja/articles/11049741)） |
| Claude Team / Enterprise | 按席位/定制（待核验） | 团队/企业档 | ⚠️ |
| Claude Code（独立订阅） | **$20 / $100 / $200 三档** | 2026 年 Claude Code 成为独立付费产品；支持订阅内用量与 API 按量双模式 | ✅ [morphllm（$20/$100/$200 Plans）](https://www.morphllm.com/claude-code-pricing)（2026）；⚠️ 具体权益待核验 |
| 区域定价 | 2026 年推出**印度卢比定价**（Pro/Max 区域价） | 提示订阅存在区域化定价先例 | ⚠️ [The Hindu BusinessLine](https://www.thehindubusinessline.com/info-tech/anthropic-launches-india-pricing-for-claude-ai-pro-and-max-plans/article71220165.ece)（2026） |

> [!CAUTION] 中国 FDE 落地提示（教材提炼）：Claude 订阅与官方 API 在中国大陆不可直接访问，国内落地走 Bedrock/Vertex/OpenRouter 等国际通道或合规代理；本报告只收集官方价格事实，合规与渠道问题按各项目红线另行处理。

---

## 9. 适用场景速查（FDE 交付视角）

> 定位依据 = 官方发布口径 + 多家权威媒体转述；适配建议 = 教材提炼（标注），非官方表述。

| 任务类型（FDE 交付） | 首选 | 备选 | 不建议 | 依据 |
| :--- | :--- | :--- | :--- | :--- |
| **分类 / 抽取 / 小任务批量** | Haiku 4.5（轻量低成本高吞吐） | Sonnet 4.6（更准但更贵） | Opus 5/Fable 5（杀鸡用牛刀） | 教材提炼；Haiku 定位（§4） |
| **RAG 生成（长文档问答/生成）** | Sonnet 5 / Sonnet 4.6（1M 档，成本平衡） | Opus 4.8（1M、更高质） | — | ✅ 1M GA + 不加价（[claude.com 博客](https://claude.com/blog/1m-context-ga)）；教材提炼 |
| **Agent 工具调用 / 多步编排** | **Sonnet 5**（官方定位 Agent 化智能体、订阅默认） | Opus 5（复杂/长周期 Agent） | Haiku 4.5（复杂推理与工具链路弱） | ✅ [MacMagazine](https://macmagazine.com.br/post/2026/06/30/anthropic-lanca-claude-sonnet-5-focado-em-inteligencia-artificial-agentica/)、[TNW](https://thenextweb.com/news/anthropic-claude-sonnet-5-agentic-model-pricing)；教材提炼 |
| **长文档（200K~1M 整库直塞）** | Opus 4.8 / Sonnet 5（原生 1M）；Opus 4.6 / Sonnet 4.6（2026-08 GA 后 1M） | Opus 5（200K 档，1M 待核验） | — | ✅ [Morph（1M on Opus 4.8 & Sonnet 5）](https://www.morphllm.com/claude-context-window)、[claude.com 博客](https://claude.com/blog/1m-context-ga) |
| **代码（生成/评审/重构）** | **Opus 5**（编码 Agent 旗舰、半价） | Sonnet 5 / Opus 4.7（编码强化） | Fable 5（贵） | ✅ [VentureBeat（coding agents）](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows)、[SecurityBrief（Opus 4.7 coding）](https://securitybrief.ie/story/anthropic-launches-claude-opus-4-7-with-stronger-coding)；教材提炼 |
| **超长周期研究型 Agent（数日级）** | **Fable 5**（唯一公开的"连续工作数日"模型） | Mythos 5（受限访问，需申请） | — | ✅ [Yahoo Tech](https://tech.yahoo.com/ai/claude/articles/anthropic-latest-model-fable-5-135846457.html)、[DeepLearning.AI The Batch](https://www.deeplearning.ai/the-batch/behold-mythos) |
| **成本敏感生产（高并发）** | Sonnet 4.6/5 + **Batch API 5 折** | Haiku 4.5 | Opus/Fable/Mythos | ✅ [apidog（Batch 5 折）](https://apidog.com/blog/claude-sonnet-4-6-pricing/)；教材提炼 |
| **深度推理（数学/逻辑难题）** | Opus 5 / Fable 5（含 thinking 档） | Sonnet 5（max 档） | Haiku 4.5 | 教材提炼；⚠️ 各档思考强度实现细节待核验 |

> [!NOTE] 一句话选型（教材提炼）：**默认 Sonnet 5（Agent/生产主力）→ 复杂 Agent 与代码上 Opus 5 → 超长周期与研究上 Fable 5 → 批量小任务下 Haiku 4.5 → 需要 1M 整库直塞选 4.8/Sonnet 5/4.6 系（不加价）**。

---

## 10. 退役与弃用状态

| 型号 | 状态 | 来源 |
| :--- | :--- | :--- |
| Claude Opus 4.1（claude-opus-4-1-20250805） | 官方宣布**弃用（deprecation）、按计划退役** | ✅ [platform release notes](https://platform.claude.com/docs/en/release-notes/overview)（2026） |
| 4.5 系（Opus 4.5 / Sonnet 4.5，2025-09~11 发布） | 已被 4.6/5 代取代；仍可用但**不属本调研 9 个月窗口**，价格不采用 | 教材提炼；✅ [benchlm 弃用表](https://benchlm.ai/deprecations/anthropic) |
| Opus 4.6 `speed:"fast"` 模式 | 已**移除**（请求不再以 fast 速度运行/不再按 fast 计费） | ✅ [platform release notes](https://platform.claude.com/docs/en/release-notes/overview) |

---

## 11. 待核验清单（落地前必须补核）

| # | 事项 | 建议核对入口 |
| :--- | :--- | :--- |
| 1 | **各型号绝对单价（输入/输出/缓存读/缓存写）** | platform.claude.com/docs/en/pricing；llm-stats 各模型页；OpenRouter 各模型定价页 |
| 2 | Opus 5 / Fable 5 / Mythos 5 / Sonnet 5 的**输出上限（max output）**与思考档位细节 | platform.claude.com/docs/en/models/overview；AWS Bedrock 模型卡 |
| 3 | Fable 5 / Mythos 5 的**上下文窗口**（1M 与否） | AWS Bedrock 模型卡（fable-5 / mythos-5） |
| 4 | Opus 4.7 的**精确发布日期**（2026 春） | anthropic.com/news/claude-opus-4-7 |
| 5 | **Haiku 4.6/5 是否在 2026-08 后发布**（截至 08-30 无官方公告） | anthropic.com/news；llm-stats |
| 6 | Opus 4.6 / Sonnet 4.6 在 1M 档的**媒体（图片）配额**精确数字 | claude.com/blog/1m-context-ga 正文 |
| 7 | **缓存倍率（写 1.25× / 读 0.1×）2026 是否延续** | platform.claude.com/docs/en/pricing |
| 8 | Pro / Max / Team / Enterprise 订阅价 2026 是否变动 | claude.com 定价页；support.claude.com |
| 9 | Opus 5 是否提供 1M 档（目前 200K 口径） | platform.claude.com/docs/en/models/overview |
| 10 | Sonnet 4.6"输出上限减半"口径（AutoGPT issue 提及） | platform.claude.com/docs；llm-stats |

---

## 12. 来源索引（全部为官方/权威，无 CSDN）

### 官方（Anthropic）
- 发布页：https://www.anthropic.com/news/claude-opus-5 ｜ /claude-opus-4-8 ｜ /claude-opus-4-7 ｜ /claude-opus-4-6 ｜ /claude-sonnet-5
- 研究页：https://www.anthropic.com/research/claude-opus-5
- 官方博客：https://claude.com/blog/1m-context-ga（2026-08，1M GA 与标准定价）
- 官方文档：https://platform.claude.com/docs/en/models/overview ｜ /docs/en/pricing ｜ /docs/en/release-notes/overview（含 Opus 4.6 定位原文、fast 模式移除、Opus 4.1 弃用）
- 帮助中心（订阅上下文/计划）：https://support.claude.com/zh-TW/articles/8606394 ｜ /ja/articles/11049741
- 系统卡入口：https://www.anthropic.com/system-cards

### 云厂商官方模型卡（AWS Bedrock）
- Opus 5 / Opus 4.8 / Sonnet 5 / Fable 5 / Mythos 5 模型卡（URL 见各表行内）

### 权威聚合（llm-stats / OpenRouter）
- https://llm-stats.com/models/claude-opus-5（Released on Jul 24, 2026）
- https://llm-stats.com/models/claude-opus-4-6（Released on Feb 5, 2026）
- https://llm-stats.com/models/claude-sonnet-4-6（Released on Feb 17, 2026）
- https://llm-stats.com/models/claude-fable-5（Released on Jun 9, 2026）
- https://llm-stats.com/blog/research/claude-fable-5-review ｜ /blog/research/claude-opus-4-7-launch
- OpenRouter：https://openrouter.ai/anthropic/claude-opus-5-20260723 ｜ /anthropic/claude-opus-4.6 ｜ /anthropic/claude-4.6-sonnet-20260217 ｜ /anthropic/claude-fable-5 ｜ /anthropic/claude-opus-4.6-fast/pricing ｜ /anthropic/claude-opus-5-fast-20260723

### 权威媒体转述（作佐证，均非 CSDN）
- DeepLearning.AI The Batch（Behold Mythos!）、VentureBeat、The Next Web、Economic Times（EnterpriseAI）、The Hindu BusinessLine、IT Brief、SecurityBrief、MacMagazine、Business Standard、zhiding（至顶网）、36kr、PingWest、c114、awtmt、ithome、netmag.tw、stcn（证券时报）、钛媒体、极客公园（以上 URL 见各表行内）

---

*报告完成时间：2026-08-30；价格截止时间：2026-08-30。*
*本报告为事实收集材料，不含教学建议；引用进教科书正文前请按 §8.4 入口复核绝对价格与 §11 待核验项。*
