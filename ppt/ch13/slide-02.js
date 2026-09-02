// slide-02.js — 本章导学
const { C, sectionTitle, numBadge, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "objectives", index: 2, title: "本章导学" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "本章导学：学习目标", C.bgLight);
    const goals = [
      "三条合规红线 + 选型三问（选哪个模型、API 还是本地）",
      "私有化部署四种形态 + 合规可得算力路线 + 硬件规范",
      "“先 RAG 后微调、微调是最后一公里”的判断逻辑",
      "LoRA / QLoRA / 全参 SFT 三种方法与成本量级",
      "一次微调的标准流程 + 数据治理 Gate",
      "公网 → 本地/微调切换的三层适配与五步回归",
    ];
    goals.forEach((g, i) => {
      const y = 1.3 + i * 0.62;
      numBadge(s, 0.7, y + 0.03, i + 1);
      s.addText(g, { x: 1.35, y, w: 8.0, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: C.textDark, valign: "middle", margin: 0 });
    });
    calloutBar(s, "本章是金字塔第 3 层（微调）+ 私有化部署的补全（进阶选读），为第 16 章“本地回填”当技术底座。数据截至 2026-08。", 5.05, C.bgBlue, C.primary);
  }
};
