# 核心术语与缩写索引（学员用）

> **用途：** 快速查术语的"一次解释 + 首次出现章节"；**只服务本书学习**，不复制 FDE-101 扩展内容。
> **维护：** 随教科书版本更新；"首次出现章节"以正文为准，本表随版本核对（v0.7 修订轮生成）。
> **约定：** 术语首次出现给出英文原文（AGENTS.md §3.7）。

## 核心术语

| 术语 | 一句话解释 | 首次出现章节 |
|------|-----------|-------------|
| FDE | Forward Deployed Engineer，前沿部署工程师；岗位/团队/方法论三层含义 | 第 1 章 1.1 |
| 三重角色 | 全栈工程师 × 业务顾问 × 产品经理（方法论是形、工程师是神） | 第 1 章 1.3 |
| Echo | 业务策略师（Deployment Strategist），主责判断——需求、价值、采用、业务边界 | 第 4 章 4.1 |
| Delta | 技术执行工程师（FDSE 对标），主责施工——实现、验证、生产化、工程边界 | 第 4 章 4.1 |
| Engineering | 基础设施工程师（保阵地）：安全合规、网络、部署运维（讲师环境兜底） | 第 3 章 3.2 |
| 卖人力 → 卖能力 | 全书主线：对外卖价值、对内沉淀能力中台 | 第 1 章 1.5 |
| 能力回注 | 识别 → 抽象 → 集成 → 验证 四步法 | 第 3 章 3.6 |
| 四阶段 | Discovery → Prototype → Build → Scale（教材提炼） | 第 3 章 3.3 |
| 四个 Stage Gate | 阶段间的通过闸门：六要素核验 + 止损规则 | 第 3 章 3.3.2 |
| 三条思维脚手架 | 四类失败模式 / 四层决策链 / LLM 能力金字塔 | 第 5 章 5.2 |
| 三个 SOP | 干系人地图（SOP1）/ 数据资产盘点（SOP2）/ 快赢筛选（SOP3） | 第 5 章 5.3–5.6 |
| 解决方案框架 | Echo 交给 Delta 的施工任务书（八字段逐场景口径） | 第 5 章 5.8、第 6 章 |
| 演示级验收声明 | 小样本成果的限定声明："仅证明方案在给定样本上可行" | 第 8 章 8.4.3 |
| 教学初始值 | 教材给出的默认阈值，须标注、可被 Prototype 后证据校准 | 第 5 章 5.8.3 |
| 双指标验收 | 答案准确率 + 来源可追溯率（第 10 章 DoD） | 第 9 章 9.9 |
| RAGAS | 开源 RAG 评估框架；按评价对象拆分，指标不可互相替代 | 第 9 章 9.9.2 |
| Agentic Workflow | 路径预编排、节点由 LLM 决策（如 Routing）；教材三分教学口径 | 第 11 章 11.3.4 |
| 受控 Agent | 动态选工具、观察后继续、追问、真暂停（实操四B） | 第 11 章 11.3.7 |
| 敏感件零漏判 | "给定验证集召回率 100%，生产目标零漏判"两步口径 | 第 11 章 11.5、第 12 章 |
| 工具工程化五件套 | 超时 / 重试 / 幂等 / 审计 / 降级 | 第 11 章 11.8.3 |
| 数据安全域 | 数据可合法处理的组织批准环境；六类"出域"口径 | 第 7 章 7.4 |
| 价值证据链 | 痛点→基线→能力→技术指标→业务变化→可量化价值 | 第 15 章 15.2 |
| 五类价值口径 | 年度价值 / 年净收益 / TCO / ROI / 回收期（不混用） | 第 15 章 15.3 |
| 收益成本比 | 累计收益 / 总投入（"赚回几倍"的说法，≠ ROI） | 第 15 章 15.3 |
| 下一阶段决策 | Go / Conditional Go / Continue Pilot / No-Go | 第 16 章 16.4.4 |
| 贯穿证据任务 | 第 14/15 章：必做、产证据并计分，但不占实操编号 | 导读 · 章节结构 |

## 缩写表

| 缩写 | 全称 | 说明 |
|------|------|------|
| FDE | Forward Deployed Engineer | 前沿部署工程师 |
| FDSE | Forward Deployed Software Engineer | Palantir 招聘口径的工程师角色（对标参考） |
| LLM | Large Language Model | 大语言模型 |
| RAG | Retrieval-Augmented Generation | 检索增强生成 |
| HITL | Human-in-the-Loop | 人机回环 / 人工兜底 |
| MCP | Model Context Protocol | 模型上下文协议（工具接入标准） |
| QPS | Queries Per Second | 每秒查询数 |
| SLA | Service Level Agreement | 服务等级协议 |
| KV cache | Key-Value cache | 推理显存中的键值缓存 |
| NRR | Net Dollar Retention Rate | 净收入留存率 |
| GAAP | Generally Accepted Accounting Principles | 通用会计准则（财务口径） |
| TCO | Total Cost of Ownership | 总拥有成本 |
| ROI | Return on Investment | 投资回报率（(累计收益−总投入)/总投入） |
| DoD | Definition of Done | 完成定义 / 验收标准 |
| SPEC | Specification | gstack 八环节中的需求规格环节 |
| gstack | Garry Tan stack 工作流 | 八环节 AI 施工工作流 |
| Lab4B | 实操四B | 无编号附加高级实验（受控协同 Agent） |
| PIPL | 个人信息保护法 | 《中华人民共和国个人信息保护法》 |
| DSL | 数据安全法 | 《中华人民共和国数据安全法》 |
