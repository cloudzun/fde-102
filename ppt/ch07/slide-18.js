// slide-18.js — 7.4.1 harness 理念
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 18, title: "harness 理念" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "harness 理念：怎么验证、怎么记录、怎么把关", C.bgWhite);
    const risks = [
      { t: "自己出题自己考", d: "自己造测试数据 → 需外部给定测试集" },
      { t: "自由发挥", d: "脑补场景、发明验收口径 → 需 SPEC 写死边界" },
      { t: "一把梭", d: "一口气跑完才汇报 → 需一环一停、人拍板" },
    ];
    risks.forEach((it, i) => {
      const x = 0.6 + i * 3.05;
      const y = 1.35;
      s.addShape("rect", { x, y, w: 2.85, h: 1.3, fill: { color: C.bgRed }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.85, h: 0.06, fill: { color: C.red } });
      s.addText(it.t, { x: x + 0.12, y: y + 0.12, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.15, y: y + 0.55, w: 2.55, h: 0.65, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.25 });
    });
    s.addText("通用原则（任何 harness 都应满足）", { x: 0.6, y: 2.95, w: 8.8, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const princ = [
      { t: "受控执行", d: "环节化推进，每环节停下审查" },
      { t: "外部验证", d: "测试/评测数据外部给定" },
      { t: "可追溯", d: "每环节产出落盘" },
      { t: "人机回环", d: "拍板点由人决策" },
    ];
    princ.forEach((it, i) => {
      const x = 0.6 + i * 2.35;
      const y = 3.45;
      s.addShape("rect", { x, y, w: 2.1, h: 1.15, fill: { color: C.bgCard }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.05, fill: { color: C.primary } });
      s.addText(it.t, { x, y: y + 0.1, w: 2.1, h: 0.35, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, align: "center", margin: 0 });
      s.addText(it.d, { x: x + 0.1, y: y + 0.48, w: 1.9, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textDark, align: "center", margin: 0, lineSpacingMultiple: 1.2 });
    });
    calloutBar(s, "harness 是当前 AI 工程主流方向（Anthropic 2025-11《Effective Harnesses》、OpenAI/微软/DeepSeek 均在押注），不是本书自造概念。", 4.9, C.bgBlue, C.primary);
  }
};
