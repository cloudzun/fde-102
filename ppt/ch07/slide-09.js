// slide-09.js — 7.2.1 Delta 视角金字塔（图 7-2）
const { C, sectionTitle } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 9, title: "Delta 视角金字塔" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "Delta 视角：每一层要建什么、代价多大", C.bgWhite);
    const bands = [
      { t: "第 4 层 · Agent", d: "编排框架 + 工具定义 + 状态管理\n代码量与调试量最高", fill: C.bgRed, strip: C.red, white: true },
      { t: "第 3 层 · 微调", d: "训练管线 + 标注数据 + GPU\n系统性改动 · 周期最长", fill: C.bgAmber, strip: C.accentWarm },
      { t: "第 2 层 · RAG", d: "解析→分块→向量库→检索→引用\n建索引 · 管版本 · 防幻觉", fill: C.bgBlue, strip: C.primary },
      { t: "第 1 层 · 提示词工程", d: "一次 API 调用 + 一段好提示词\n无检索无训练 · 见效最快", fill: C.bgGreen, strip: C.green },
    ];
    bands.forEach((g, i) => {
      const y = 1.4 + i * 0.92;
      s.addShape("rect", { x: 1.3, y, w: 7.4, h: 0.78, fill: { color: g.fill } });
      s.addShape("rect", { x: 1.3, y, w: 0.07, h: 0.78, fill: { color: g.strip } });
      s.addText(g.t, { x: 1.55, y, w: 2.5, h: 0.78, fontSize: 13.5, fontFace: "Microsoft YaHei", bold: true, color: g.white ? "FFFFFF" : C.textDark, valign: "middle", margin: 0 });
      s.addText(g.d, { x: 4.3, y, w: 4.2, h: 0.78, fontSize: 10.5, fontFace: "Microsoft YaHei", color: g.white ? "FFFFFF" : C.textDark, valign: "middle", margin: 0, lineSpacingMultiple: 1.15 });
      if (i < 3) s.addShape("line", { x: 5.0, y: y + 0.78, w: 0, h: 0.14, line: { color: C.textMid, width: 1.2, endArrowType: "triangle" } });
    });
    s.addText("本图与图 5-2 互补：Echo 用业务判据回答“该不该用这层”，Delta 回答“选定之后要建什么、付出什么代价”。使用优先级永远是“从第 1 层开始”。", {
      x: 0.6, y: 5.2, w: 8.8, h: 0.3, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
  }
};
