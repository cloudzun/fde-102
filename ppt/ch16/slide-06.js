// slide-06.js — 能力回注评审
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 6, title: "能力回注评审" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "脑暴二 · 能力回注：哪些碎石路能铺装成公路？", C.bgLight);
    const steps = [
      { t: "1 识别", d: "白板画两区：碎石路（西岭专属）+ 能铺路（通用价值）——能力去掉“西岭”的壳，剩下什么？" },
      { t: "2 抽象", d: "怎么泛化成标准模块？去掉哪些客户特定逻辑？怎么配置化（类别清单做配置项）？" },
      { t: "3 铺路优先级", d: "用优先级矩阵（通用性 × 成本）定 P0/P1/P2——P0 = 通用性高 + 成本低的高杠杆候选" },
      { t: "4 产出总结", d: "《内部能力回注总结》：三块拼图 + 受控 Agent + 业务本体" },
    ];
    steps.forEach((it, i) => {
      const y = 1.35 + i * 0.85;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.75, fill: { color: C.bgWhite }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.75, fill: { color: C.primary } });
      s.addText(it.t, { x: 0.85, y, w: 2.0, h: 0.75, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, valign: "middle", margin: 0 });
      s.addText(it.d, { x: 3.0, y, w: 6.2, h: 0.75, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.2 });
    });
    s.addText("完整能力栈：分类器（是什么）· RAG（依据）· 路由（怎么办）· 受控 Agent（下一步做什么）· 处处都在的“拿不准就兜底转人工”（HITL）· 业务本体（请求—依据—责任主体—工单—人工审核）。", {
      x: 0.6, y: 4.75, w: 8.8, h: 0.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25
    });
    calloutBar(s, "自查：P0 应该是“以最低成本撬动最多客户”的高杠杆候选（如通用文本分类器），不是“自己喜欢”。", 5.18, C.bgAmber, C.accentWarm);
  }
};
