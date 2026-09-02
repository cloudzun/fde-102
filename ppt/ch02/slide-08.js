// slide-08.js — 2.2 四种交付模式对比表
const { C, sectionTitle, table } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 8, title: "四种交付模式对比" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "四种交付模式对比", C.bgWhite);
    const rows = [
      ["维度", "标准 SaaS", "传统咨询", "项目外包 / 定制", "FDE + 平台"],
      ["客户适配度", "低（客户削足适履）", "高（定制方案）", "极高（完全按需）", "高（平台 + 现场定制）"],
      ["研发复用率", "极高（100% 一套代码）", "中（复用框架）", "极低（每单造轮子）", "高（70% 平台 + 30% 回注）"],
      ["边际成本趋势", "趋近于零", "线性（高级人头）", "线性（开发人头）", "先高后低、经验曲线递减"],
      ["毛利率趋势", "高且稳定（70–90%）", "稳定（40–60%）", "低且脆弱（10–30%）", "从低到高（成熟期 80%+）"],
      ["商业模式", "纯订阅制", "咨询服务费", "人天计费或固定项目费", "高价值许可费（授权 + 首期部署）"],
    ];
    table(s, rows, { y: 1.3, colW: [1.3, 1.7, 1.7, 1.9, 2.2], rowH: 0.55});
    s.addText("注：毛利区间与 70%/30% 比例均为教材教学假设（示意），对外引用请注明。", {
      x: 0.6, y: 4.9, w: 8.8, h: 0.3, fontSize: 9, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
    s.addText("最反直觉的一行：适配度 vs 复用率——传统认知里二者天然矛盾，只能二选一。", {
      x: 0.6, y: 5.2, w: 8.8, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.primary, margin: 0
    });
  }
};

