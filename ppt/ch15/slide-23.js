// slide-23.js — 15.4.4 西岭最小业务本体
const { C, sectionTitle, calloutBar } = require("../common");
module.exports = {
  slideConfig: { type: "diagram", index: 23, title: "西岭最小业务本体" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgWhite };
    sectionTitle(s, "西岭最小业务本体：把三个 Demo 统一到同一业务世界", C.bgWhite);
    const nodes = [
      { t: "市民诉求", fill: C.bgBlue, strip: C.primary },
      { t: "政策条款", fill: C.bgAmber, strip: C.accentWarm },
      { t: "政策文件", fill: C.bgAmber, strip: C.accentWarm },
      { t: "工单", fill: C.bgCard, strip: C.primary },
      { t: "责任部门", fill: C.bgGreen, strip: C.green },
      { t: "人工审核任务", fill: C.bgRed, strip: C.red },
    ];
    const pos = [
      { x: 0.7, y: 1.5 }, { x: 3.7, y: 1.5 }, { x: 6.7, y: 1.5 },
      { x: 1.2, y: 3.2 }, { x: 4.2, y: 3.2 }, { x: 7.0, y: 3.2 },
    ];
    nodes.forEach((n, i) => {
      const p = pos[i];
      s.addShape("rect", { x: p.x, y: p.y, w: 2.4, h: 0.7, fill: { color: n.fill }, shadow: { type: "outer", color: "000000", blur: 4, offset: 1.5, angle: 135, opacity: 0.06 } });
      s.addShape("rect", { x: p.x, y: p.y, w: 2.4, h: 0.05, fill: { color: n.strip } });
      s.addText(n.t, { x: p.x, y: p.y, w: 2.4, h: 0.7, fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, align: "center", valign: "middle", margin: 0 });
    });
    s.addText("关系：诉求→依据→条款→属于→文件；诉求→生成→工单→分派给→部门；工单→触发→人工审核任务→审核→工单", {
      x: 0.6, y: 4.15, w: 8.8, h: 0.4, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    s.addText("工单状态：待分类 → 待分派 → 处理中 → 待人工审核 → 已解决 / 已驳回 / 已关闭", {
      x: 0.6, y: 4.6, w: 8.8, h: 0.35, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0
    });
    calloutBar(s, "三个 Demo 不是互不相关的技术盒子：分类器补“类别+置信度”、RAG 建“诉求—条款—文件”依据、路由执行“分派—升级—审核”——统一建模才可跨城市复用。", 5.15, C.bgAmber, C.accentWarm);
  }
};
