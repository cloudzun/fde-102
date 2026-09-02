// slide-16.js — 2.3.3 两种勇气 + 切换成本
const { C, sectionTitle, calloutBar, bigCallout } = require("../common");
module.exports = {
  slideConfig: { type: "cards", index: 16, title: "两种勇气" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.bgLight };
    sectionTitle(s, "两种“勇气”的承接反转", C.bgLight);
    const items = [
      { t: "启动期（约前 5 个）", sub: "稀缺：行业 Know-how · 种子逻辑：广撒种赌通用", d: "敢于为通用性亏钱（抢种子）", fill: C.bgAmber, strip: C.accentWarm },
      { t: "成熟期", sub: "稀缺：交付带宽 · 杠杆逻辑：精挑选收割红利", d: "敢于为通用性拒单（防稀释）", fill: C.bgGreen, strip: C.green },
    ];
    items.forEach((it, i) => {
      const x = 0.6 + i * 4.55;
      const y = 1.35;
      s.addShape("rect", { x, y, w: 4.3, h: 2.0, fill: { color: it.fill }, shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 } });
      s.addShape("rect", { x, y, w: 0.06, h: 2.0, fill: { color: it.strip } });
      s.addText(it.t, { x: x + 0.2, y: y + 0.14, w: 3.9, h: 0.45, fontSize: 15, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0 });
      s.addText(it.sub, { x: x + 0.2, y: y + 0.62, w: 3.9, h: 0.55, fontSize: 10.5, fontFace: "Microsoft YaHei", color: C.textDark, margin: 0, lineSpacingMultiple: 1.25 });
      s.addText(it.d, { x: x + 0.2, y: y + 1.25, w: 3.9, h: 0.65, fontSize: 11.5, fontFace: "Microsoft YaHei", bold: true, color: C.textDark, margin: 0, lineSpacingMultiple: 1.25 });
    });
    bigCallout(s, "启动期敢为通用性亏钱（怕错过种子），成熟期敢为通用性拒单（怕稀释资产）——两种矛盾的勇气要同时具备。", 3.65, 0.6);
    calloutBar(s, "乙方为什么愿意？切换成本：业务逻辑固化进系统后客户几乎无法迁移——“落地生根”带来公用事业般稳定 + 软件毛利；外包相反，人走价值走。", 4.5, C.bgBlue, C.primary);
  }
};
