// slide-27.js — 3.6 五个实操总分总（图 3-9）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 27, title: "五个实操总分总" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "五个实操，形成“总分总”闭环", C.bgWhite);
    const bands = [
      { t: "实操一 · Ch6 · Echo ·【总】", d: "需求调研 →《解决方案框架》", fill: C.bgAmber, strip: C.accentWarm },
      { t: "实操二 · Ch8 · Delta ·【分】", d: "诉求分类器", fill: C.bgBlue, strip: C.primary },
      { t: "实操三 · Ch10 · Delta ·【分】", d: "政策问答 RAG", fill: C.bgBlue, strip: C.primary },
      { t: "实操四 · Ch12 · Delta ·【分】", d: "工单分级工作流", fill: C.bgBlue, strip: C.primary },
      { t: "实操五 · Ch16 · 全团队 ·【总】", d: "整合 + 双视角验收 + 回注 + 汇报", fill: C.bgGreen, strip: C.green },
    ];
    bands.forEach((g, i) => {
      const y = 1.35 + i * 0.78;
      s.addShape("rect", { x: 0.6, y, w: 8.8, h: 0.7, fill: { color: g.fill } });
      s.addShape("rect", { x: 0.6, y, w: 0.06, h: 0.7, fill: { color: g.strip } });
      s.addText(g.t, { x: 0.85, y, w: 4.3, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 5.3, y, w: 3.9, h: 0.7, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
      if (i < 4) s.addShape("rightArrow", { x: 9.45, y: y + 0.19, w: 0.4, h: 0.32, fill: { color: C.primaryLight } });
    });
    s.addShape("line", { x: 9.62, y: 1.5, w: 0, h: 3.55, line: { color: C.green, width: 2, beginArrowType: "triangle" } });
    s.addText("↺ 回注", { x: 9.55, y: 5.06, w: 0.45, h: 0.25, fontSize: 8, fontFace: "Microsoft YaHei", bold: true, color: C.green, align: "center", margin: 0 });
    s.addText("坡度递增：分类器 → RAG → 工作流；逐轮复用上一实操的 AGENTS.md / retro.md。", {
      x: 0.6, y: 5.28, w: 8.8, h: 0.25, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
