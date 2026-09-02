// slide-06.js — 13.1.3 经济性
const { C, sectionTitle, table, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "table", index: 6, title: "经济性动因" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "经济性动因：烧不起公网 API，转本地", C.bgWhite);
    const rows = [
      ["维度", "公网 API", "本地部署"],
      ["成本形态", "随调用量线性增长（按 token 计费）", "固定投入为主 + 低边际成本（GPU 折旧 + 电费 + 运维）"],
      ["低调用量", "便宜（API 划算）", "不划算（GPU 利用率低）"],
      ["高调用量/长上下文/批量", "月成本涨到数十万元级", "GPU 摊薄后月成本可低一个量级"],
    ];
    table(s, rows, { y: 1.4, colW: [2.0, 3.4, 3.4], rowH: 0.55});
    calloutBar(s, "提醒：“省钱”与“合规”是两个独立动因——合规是“必须本地”，成本是“划算本地”；不要用成本论证替代合规论证。", 4.85, C.bgAmber, C.accentWarm);
  }
};

