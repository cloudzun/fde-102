// slide-09.js — 9.2 核心链路图（图 9-4）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 9, title: "核心链路" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "一条完整 RAG 链路：离线建库 + 在线问答", C.bgWhite);
    s.addText("离线建库（做一次）", { x: 0.6, y: 1.2, w: 8.8, h: 0.3, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.accentWarm, margin: 0 });
    const off = ["1 解析", "2 分块", "3 向量化", "4 存向量库"];
    off.forEach((st, i) => {
      const x = 0.6 + i * 2.15;
      const y = 1.55;
      s.addShape("rect", { x, y, w: 1.95, h: 0.62, fill: { color: C.bgAmber } });
      s.addShape("rect", { x, y, w: 0.05, h: 0.62, fill: { color: C.accentWarm } });
      s.addText(st, { x, y, w: 1.95, h: 0.62, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
      if (i < 3) s.addShape("rightArrow", { x: x + 1.97, y: y + 0.16, w: 0.18, h: 0.3, fill: { color: C.accentWarm } });
    });
    s.addText("在线问答（做多次）", { x: 0.6, y: 2.55, w: 8.8, h: 0.3, fontSize: 12.5, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0 });
    const on = ["5 问题向量化", "6 检索 top-K", "7 生成 + 标注来源"];
    on.forEach((st, i) => {
      const x = 0.6 + i * 2.9;
      const y = 2.9;
      s.addShape("rect", { x, y, w: 2.7, h: 0.62, fill: { color: C.bgBlue } });
      s.addShape("rect", { x, y, w: 0.05, h: 0.62, fill: { color: C.primary } });
      s.addText(st, { x, y, w: 2.7, h: 0.62, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
      if (i < 2) s.addShape("rightArrow", { x: x + 2.72, y: y + 0.16, w: 0.18, h: 0.3, fill: { color: C.primaryLight } });
    });
    s.addShape("line", { x: 5.0, y: 2.17, w: 0, h: 0.73, line: { color: C.accentWarm, width: 1.5, endArrowType: "triangle" } });
    s.addText("底库", { x: 5.15, y: 2.28, w: 0.7, h: 0.3, fontSize: 9.5, fontFace: "Microsoft YaHei", color: C.accentWarm, margin: 0 });
    s.addText("政策更新时，只需对更新部分重跑离线建库（重建索引），模型不用重新训练。", {
      x: 0.6, y: 4.05, w: 8.8, h: 0.4, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    s.addText("*图 9-4：上半段离线建索引一次，下半段在线问答多次，虚线示离线库为线上检索提供底库*", { x: 0.6, y: 4.6, w: 8.8, h: 0.25, fontSize: 9, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
  }
};
