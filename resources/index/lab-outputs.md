# 五实操产出物索引（学员用）

> **用途：** 一张表看清五个编号实操各产出什么、在哪验收、流向哪里（谁消费这份产出）。
> **口径：** 对应教科书第 6/8/10/12/16 章 DoD 与 `labs/` 各手册。

| 实操 | 章节 | 核心产出物 | 验收（DoD 要点） | 流向 |
|------|------|-----------|-----------------|------|
| 实操一 | 第 6 章 | 解决方案框架.md（八字段逐场景）、风险墙、干系人图、150 字汇报话术 | 三场景 + 选型 + 优先级 + 四类风险 + 数据不出域方案 | 实操二/三/四的施工任务书；实操五汇报底稿 |
| 实操二 | 第 8 章 | 01-office-hours.md、SPEC.md、src/、streamlit_app.py、tests/test_cases.csv、qa-report.md、retro.md | 自信区准确率 ≥85% + 转人工 ≤30%；演示级验收声明 | classify_request 工具契约 → 实操四/Lab4B；AGENTS.md/retro → 实操三 |
| 实操三 | 第 10 章 | 索引与检索代码、tests/qa_pairs.csv（6 条）、qa-report.md、拒答实测 | 双指标：答案 ≥80% + 可追溯 ≥90%（6 条验证集 6/6 全对口径） | search_policy 工具契约 → Lab4B；双指标口径 → 实操五 |
| 实操四 | 第 12 章 | State/Node/CE 路由代码、data/departments.csv、tests/workorders.csv、qa-report.md | 路由正确 6/6（判档+动作）+ 敏感件零漏判（2/2 转人工） | 敏感件零漏判数据 → 实操五 ROI 亮点；工具契约 → Lab4B |
| 实操四B（无编号） | Lab4B | 独立项目受控 Agent：动态选工具、追问、真暂停、有限循环、工作台 | 六维验收（动态选工具/观察后继续/追问/真暂停/有限循环/可演示） | 三个 MVP 与综合收口间的桥梁；不占编号、非结业硬依赖 |
| 实操五 | 第 16 章 | 需求满足度表、生产差距表、内部能力回注总结、下一阶段决策单、客户汇报稿、讲演汇报稿 | 两层验收 + 能力回注（≥4 候选）+ 每场景决策单 + 十页汇报 | 全书收口；可复用模板在 `resources/templates/` |

## 产出物与认证的对应

- 团队分：以各实操交付物（上表）为准，用 `resources/certification/lab1-5-rubric.md` 评分；
- 个人分：以个人决策记录、故障排查、答辩为准，见 `resources/certification/individual-assessment.md`；
- 迁移能力：用 `resources/certification/parallel-case.md`（陌生案例）检验。
