// slide-22.js — 2.5 三档判定：做完项目留下什么
const { C, sectionTitle, table, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 22, title: "三档判定" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "核心看“做完项目留下什么”", C.bgWhite);
    const rows = [
      ["维度", "外包", "项目制", "真 FDE"],
      ["做完项目留下什么", "只留给客户一个孤立系统", "带回一些经验，但无法复用（留在个人身上）", "去掉客户信息后，把通用经验沉淀为可复用模板 / Skill / 平台能力"],
    ];
    table(s, rows, { y: 1.5, colW: [1.7, 2.4, 2.4, 2.3], rowH: 0.55});
    bigCallout(s, "外包留系统、项目制留经验（不可复用）、FDE 留可复用的平台能力。判断真伪，就看“项目结束、人离开现场之后，公司手里留下了什么”。", 3.6, 0.75);
    s.addText("本节把 1.5 节的本质辨析变成一份可勾选的教材诊断量表——不再凭感觉，而是照着量表逐项核验。", {
      x: 0.6, y: 4.7, w: 8.8, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};

