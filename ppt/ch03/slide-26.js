// slide-28.js — 3.6 五实操明细表 + 四条红线
const { C, sectionTitle, table, redBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 28, title: "五实操明细" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "五个实操 × 角色 × 技术坡度", C.bgLight);
    const rows = [
      ["实操", "章节", "角色", "模式", "对应"],
      ["实操一：需求调研", "Ch6", "Echo", "头脑风暴（不用 AI）", "People + Discovery"],
      ["实操二：诉求分类器", "Ch8", "Delta", "AI 施工", "分类 + Prototype"],
      ["实操三：政策问答 RAG", "Ch10", "Delta", "AI 施工", "RAG + Prototype"],
      ["实操四：工单分级工作流", "Ch12", "Delta", "AI 施工", "Workflow + Prototype"],
      ["实操五：全团队交付", "Ch16", "全团队", "头脑风暴 + 汇报", "Scale 收口 + 回注"],
    ];
    table(s, rows, { y: 1.35, colW: [2.3, 0.8, 1.1, 2.2, 2.4], rowH: 0.55 });
    redBar(s, "四条红线贯穿：数据不出域 · 答案可追溯 · 敏感件零漏判 · 人能判断 AI 能执行——每个实操按红线式验收口径把关。", 4.85);
    s.addText("读后续章节：先问——对应四阶段哪一环？Echo 还是 Delta 主导？Gate 凭据是什么？", {
      x: 0.6, y: 5.4, w: 8.8, h: 0.2, fontSize: 10, fontFace: "Microsoft YaHei", color: C.textMid, margin: 0
    });
  }
};
