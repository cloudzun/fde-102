// slide-22.js — 3.5.1 能力回注四步法（图 3-7）
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 22, title: "能力回注四步法" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "能力回注四步法（第 2 章“飞轮”的操作引擎）", C.bgWhite);
    const steps = [
      { t: "1. 识别", d: "多个客户都要？", fill: C.bgBlue, strip: C.primary },
      { t: "2. 抽象", d: "去客户化 · 泛化", fill: C.bgGreen, strip: C.green },
      { t: "3. 集成", d: "并入平台 · 配置化", fill: C.bgGreen, strip: C.green },
      { t: "4. 验证", d: "能复用 · 不坏平台", fill: "EDEAF6", strip: "907BB5" },
    ];
    steps.forEach((st, i) => {
      const x = 0.6 + i * 2.35;
      const y = 1.55;
      s.addShape("rect", { x, y, w: 2.1, h: 1.55, fill: { color: st.fill }, shadow: { type: "outer", color: "000000", blur: 5, offset: 1.5, angle: 135, opacity: 0.07 } });
      s.addShape("rect", { x, y, w: 2.1, h: 0.06, fill: { color: st.strip } });
      s.addText(st.t, { x, y: y + 0.16, w: 2.1, h: 0.4, fontSize: 14.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", margin: 0 });
      s.addText(st.d, { x, y: y + 0.95, w: 2.1, h: 0.45, fontSize: 12.5, fontFace: "Microsoft YaHei", color: C.primary, align: "center", margin: 0 });
      if (i < 3) s.addShape("rightArrow", { x: x + 2.13, y: y + 0.6, w: 0.22, h: 0.3, fill: { color: C.primaryLight } });
    });
    calloutBar(s, "本体建模 = 业务语义回注的结构化载体：把对象 / 关系 / 动作 / 治理约束建模（如“西岭住建局”→ 责任部门）——第 15 章 15.4 展开。", 3.65, C.bgBlue, C.primary);
    s.addText("判断标准：值不值得回注 = 通用性（几个客户都要）× 实现成本（见下页矩阵）。", {
      x: 0.6, y: 4.5, w: 8.8, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
    s.addText("*图 3-7：能力回注四步法*", { x: 0.6, y: 4.95, w: 8.8, h: 0.25, fontSize: 9, fontFace: "Microsoft YaHei", italic: true, color: C.textMid, margin: 0 });
  }
};
