// slide-14.js — 13.3.1 什么时候才轮到微调
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 14, title: "RAG vs 微调" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "先 RAG 后微调：最后一公里", C.bgWhite);
    const rows = [
      ["维度", "RAG", "微调（LoRA 级）"],
      ["擅长", "事实/知识：可溯源、更新只需重建索引", "行为/格式/风格/私有协议：固定输出、行业话术"],
      ["不擅长", "改变模型表达行为", "注入“新事实”（微调不擅长记你没给的数据）"],
      ["改动", "只改知识库，不碰权重", "改权重，需评测 / 量化 / 回滚"],
      ["定位", "骨架，先做", "收尾，最后一公里"],
    ];
    table(s, rows, { y: 1.35, colW: [1.4, 3.7, 3.7], rowH: 0.55});
    calloutBar(s, "判断清单：先试过更简单的层吗？是“行为/格式”类问题吗？数据治理 Gate 过关吗？数据够好吗？有固定评测集吗？能接受回滚成本吗？——缺一项就回去，别直接上微调。", 4.85, C.bgAmber, C.accentWarm);
  }
};

