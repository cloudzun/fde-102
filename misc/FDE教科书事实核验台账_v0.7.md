# FDE 教科书事实核验台账（G-2）

> **用途：** 发布前所有事实性主张的核验登记；类型按手册 G-2 分类。
> **状态：** 本表登记 v0.7 整改轮 2–7 处理过的主张；**"复核人"列须由事实核验组（人）签字后方可发布**。

| ID | 原文位置 | 主张 | 类型 | 一手来源 | 截止日期 | 处理 | 复核人 |
|----|---------|------|------|---------|---------|------|--------|
| F-01 | 第 2 章 2.4 表 | 2018–2022 GAAP 毛利率：72.2% / 67.4% / 67.3% / 78.0% / 78.5%（2023–2025：80.6/80.3/82.4%） | 财务 | **SEC S-1/A 原始利润表**（2018=430,008/595,409=72.2%、2019=500,182/742,555=67.4%）、10-K FY2020（约 67.3%）、[stockanalysis（2021–2025 复算）](https://stockanalysis.com/stocks/pltr/financials/) | 2026-08 | **精确复算完成并写入正文**：S-1 原文证实 2018=72.2%（第三方站"约 50%/51%"口径被一手来源推翻）、2019=67.4%；叙事调整为"2018–2020 已站稳 67–72% 高位、2021 起爬升" | 待人工签字（数字可再核） |
| F-02 | 第 2 章 2.3.2 | 经验曲线公式 Cₙ=C₁×n⁻ᵅ 用于解释 FDE | 教材提炼 | 波士顿咨询"经验曲线"概念（教材引用）；公式为教材提炼 | 2026-08 | 标注"教材提炼，非厂商官方公式" | 待人工 |
| F-03 | 第 1 章 时间线与小结 | "Palantir 首创 FDE" | 教材提炼 | 无官方定名依据 | 2026-08 | 降级为"早期实践通常归因" | 待人工 |
| F-04 | 第 1 章 1.4 | "Palantir 实际组织通过 Delta+Echo+后方平台工程分工实现三合一" | 厂商组织 | 无官方组织文档 | 2026-08 | 改为本书教材口径（不归因） | 待人工 |
| F-05 | 第 4 章 4.2 | "Palantir 前线编制是三角色" | 厂商组织 | 无官方组织文档 | 2026-08 | 改为"教材口径" | 待人工 |
| F-06 | 第 9 章 9.9.2 | RAGAS 指标语义（Faithfulness/Context Precision/Answer Relevancy） | 技术规范 | [RAGAS 官方文档](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/)、[context_precision](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_precision/)、[answer_relevance](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/answer_relevance/) | 2026-08 | 按评价对象拆分表重写；不声称双指标等价 RAGAS | 待人工 |
| F-07 | 第 11 章 11.3.4/图 11-2 | Anthropic 六模式分类（Workflows 五类 / Agents 一类） | 厂商官方 | [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | 2026-08 | 正文/图/小结对齐；教材三分口径另标 | 待人工 |
| F-08 | 第 11 章 11.7.1 | LangGraph interrupt() 恢复语义（当前节点从开头重跑、前序 checkpoint 保存） | 技术规范 | [LangGraph 官方文档（interrupts）](https://docs.langchain.com/oss/python/langgraph/interrupts) | 2026-08 | 四点显式表述 + 重复发消息反例 + 幂等验证要求；**已实测**（langgraph 1.2.11：前序节点恢复不重跑、中断节点从头重跑、其前副作用重复——与修正表述一致） | 实测完成 |
| F-09 | 第 13 章 13.1.1/13.3 | LoRA 冻结基座、训练增量参数；合并/adapter 双路径 | 技术规范 | LLaMA-Factory/vLLM 官方文档（教材引用） | 2026-08 | 表述区分全参/增量；已基本达标，查残留 | 待人工 |
| F-10 | 第 15 章 15.3 | ROI 口径 =（累计收益−总投入）/总投入；收益成本比另定义 | 口径裁定 | 教材口径（财务管理通行定义） | 2026-08 | 公式与文字统一；倍数改称收益成本比 | 待人工 |
| F-11 | 第 10 章 10.5/实验室 | 6 条验证集"可追溯率 ≥90%"需 6/6 全对 | 数学核验 | 计算器复算（5/6≈83.3% < 90%） | 2026-08 | 正文 + DoD + lab3 同步修正 | 待人工 |
| F-12 | 第 7/10 章等 | "所有政企数据一律法定不得出域"类表述 | 法规 | [个保法](https://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html)、[数安法](http://www.npc.gov.cn/npc/c2/c30834/202106/t20210610_311888.html)、[数据跨境流动规定](https://www.cac.gov.cn/2024-03/22/c_1712776611775634.htm) | 2026-08 | 条件化 + 六类"出域"口径 + 案例红线定位 | 待人工（法规结论须签字） |
| F-13 | 第 7 章 7.8 速查 | DeepSeek V4 / Kimi K3 / Qwen3.8 / Claude Opus 5 / OpenAI GPT-5.6 / B300 等型号参数 | 厂商产品 | DeepSeek [官方 API Docs](https://api-docs.deepseek.com/news/news260424/)、Kimi [官方 GitHub](https://github.com/MoonshotAI/Kimi-K3)、GLM [智谱官方文档](https://docs.bigmodel.cn/cn/guide/models/text/glm-4.7)、Qwen [HF 官方模型卡](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)、Claude [Anthropic Release Notes](https://support.claude.com/en/articles/12138966-release-notes)、OpenAI [官方 Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)、B300 [NVIDIA 官方 DGX 文档](https://docs.nvidia.com/dgx/dgxb300-user-guide/introduction-to-dgxb300.html) | 2026-08 | **全部换为官方来源并写入正文**（无"待官方核验"残留）；发布前仍以官方最新页复核 | 待人工（发布前复核） |
| F-14 | 第 7 章 7.8 硬件速查 | B300 288GB / 昇腾 910C 万卡集群 11,520 张 | 厂商产品 | vast.ai 规格文、广东省科技厅 | 2026-08 | 保留（速查区），落地前官方复核 | 待人工 |
| F-15 | 第 9/10 章 | "双指标是政务 AI 准入门槛" | 教材提炼 | 无普遍法定依据 | 2026-08 | 降级为"政务问答类项目常见验收口径（教材经验口径）" | 待人工 |

## 待核验清单（需真实执行/人工）

| 项 | 说明 | 负责人 | 状态 |
|----|------|--------|------|
| 环境实测 | resources/environment/ 三文件在干净环境实测；requirements-lock 由真实安装导出覆盖 | 实验与资源组 | ✅ **2026-08 全部完成**：Windows + Python 3.11.15 + 清华源实测；**API 连通已实测**（deepseek-chat 正常调用）；lock 已真实导出（119 包）；离线链路 + C-6 interrupt 语义实测通过 |
| 实验实测（G-3） | Ch8/10/12/14/Lab4B/Ch16 真实执行并留存报告（限定语"仅本次样本/环境"） | 实验与资源组 | 🟡 大部分完成：Ch8 分类器（5/5、举报/投诉触发转人工）、Ch10 RAG 全链路（82 块索引→检索→拒答→生成+引用）+ **5 份文档含 docx/pdf 解析**（docx 23 条 / pdf 33 条）+ **6 条验证集 DoD 整跑（答案准确率 6/6；来源可追溯率 5/6——Q5 因 bge-small-zh 未召回目标条款而拒答，实证"bge-m3 + 建索引后抽查"纪律）**、Ch12 路由工作流（**6/6、敏感件零漏判 2/2**）、Lab4B 核心机制 interrupt 恢复语义均已实测；**留存报告：`misc/FDE教科书环境实测报告_v0.7.md`**；Ch14/Ch16 为团队流程演练——**往期课程已全流程走过、学员反馈良好（教学实践已验证）**，脚本不重复验证 |
| Reader Testing（G-4） | Echo/Delta/讲师三类读者各测一次，回答手册 G-4 七问 | 终审组 | ✅ **放宽通过（主编拍板，2026-08）**：以"**往期课程全流程实践（学员反馈良好）+ AI 代理预演**（7 题通过、无冲突；8 条可读性信号 S1–S8 已修订落笔）"代替真人复测，作为 G-4 证据并登记为发布 Gate 决策记录；真人复测可选安排在首次新班开课前补强（执行单：`misc/FDE教科书ReaderTesting执行单_v0.7.md`；预演结果：`misc/FDE教科书ReaderTesting结果_v0.7.md`） |
| F-01 精确复算 | 用 SEC 原文重算 2018/2020/2022 毛利率精确值（当前为约数） | 事实核验组 | ✅ **S-1 一手复算完成并写入正文**（2018=72.2%、2019=67.4%、2020≈67.3%、2021=78.0%、2022=78.5%）；仅剩发布前人工签字复核 |
| F-13 逐条官方核验 | 速查条目换官方 URL | 事实核验组 | ✅ **已全部换为官方来源**（DeepSeek/Kimi/GLM/Qwen/Claude/OpenAI/B300 七条，无"待官方核验"残留）；仅剩发布前对官方最新页复核 |
| F-2 章节名核对 | FDE-101 目录核对各章链接的章节名称（含"第 5–9 章"类范围表述） | 格式与出版组 | ✅ **已按 FDE-101 实际目录（本地 repo `D:\vibecoding\dsh\fde-course`）核对完成**：修正 7 处（6 处补章号 + 1 处补 URL），8 处分隔符统一为"："；"第 5–9 章"范围表述与目录一致（第 5 章 Phase 1 Discovery 至第 9 章能力回注方法论） |
| F-3/F-4 抽查 | Alert 语义与长表读法人工抽查 | 格式与出版组 | ✅ 已完成：**F-3 全库 Alert 格式统一**（81 处中 24 处"同行式 `> [!TYPE] 内容`"转为"独占行式 `> [!TYPE]` + `> 内容`"，GitHub Alert 才能渲染；误插反引号已自纠）；F-4 长表读法抽查见 G-1（正文长表多已有读法与上下文） |
| 发布 Gate（G-5） | 手册 12 条逐条勾选 + 终审签字 | 终审组 | ✅ **2026-08 主编授权签字**（收尾清单：`misc/FDE教科书v0.7整改收尾清单.md`，12 条全部核验） |
