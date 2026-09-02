// slide-22.js — 14.9 回注
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 22, title: "两类回注" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "两类回注对象", C.bgWhite);
    const rows = [
      ["回注类型", "典型内容", "判断重点"],
      ["工程能力", "配置 · provider 适配 · 审计 · 失败兜底 · 健康检查 · 交接模板", "能否跨 Demo 复用"],
      ["业务语义候选", "对象 · 关系 · 状态 · 动作 · 权限", "能否跨客户解释和执行"],
    ];
    table(s, rows, { y: 1.35, colW: [1.7, 4.3, 2.8], rowH: 0.55});
    s.addText("成熟度：概念本体（已定义对象/关系/动作）→ 可执行本体（已映射数据/接口/权限/状态）→ 已验证回注能力（已在第二场景完成复用验证）", {
      x: 0.6, y: 3.5, w: 8.8, h: 0.55, fontSize: 11.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    s.addText("Delta 工程验证：对象属性有稳定数据来源 · 身份可唯一确认 · 关系有维护机制 · 状态有合法路径 · 动作有真实接口 · 客户专属数据没进公共平台 · 至少一个模型在第二场景复用", {
      x: 0.6, y: 4.15, w: 8.8, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.3
    });
    redBar(s, "不得把一张对象关系图直接称为平台能力——未完成数据、动作、权限和第二场景验证，只能叫“概念模型”。", 4.95);
  }
};

