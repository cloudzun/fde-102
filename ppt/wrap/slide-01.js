// slide-01.js — 总封面
const { C, topAccentBar, bottomAccentBar } = require("../common");
module.exports = {
  slideConfig: { type: "cover", index: 1, title: "课程总封面" },
  createSlide(pres) {
    const s = pres.addSlide();
    s.background = { color: C.darkBg };
    topAccentBar(s);
    bottomAccentBar(s);
    // 装饰层：水印 FDE + 圆环（右侧，避开文字区）
    s.addText("FDE", {
      x: 6.2, y: 0.2, w: 3.7, h: 3.6,
      fontSize: 150, fontFace: "Arial", bold: true,
      color: C.primaryLight, transparency: 82, align: "center", valign: "middle", margin: 0
    });
    s.addShape("ellipse", { x: 7.7, y: -1.5, w: 4.2, h: 4.2, fill: { color: "FFFFFF", transparency: 92 }, line: { color: C.onDarkBright, width: 1.5, transparency: 55 } });
    s.addShape("ellipse", { x: 8.35, y: -0.85, w: 2.9, h: 2.9, fill: { color: C.primaryLight, transparency: 88 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
    s.addShape("ellipse", { x: -1.4, y: 3.9, w: 2.9, h: 2.9, fill: { color: C.primary, transparency: 85 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
    s.addShape("ellipse", { x: 7.2, y: 0.45, w: 0.4, h: 0.4, fill: { color: C.onDarkBright, transparency: 55 } });
    // 左侧品牌竖线
    s.addShape("rect", { x: 0.8, y: 1.0, w: 0.07, h: 2.6, fill: { color: C.onDarkBright } });
    // 标题区
    s.addText("《人工智能工程师（高级）FDE 认证培训》", {
      x: 1.2, y: 1.02, w: 5.6, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: C.onDarkBright, margin: 0
    });
    s.addText("教科书配套课件 · 全套 16 章", {
      x: 1.2, y: 1.55, w: 5.6, h: 1.0,
      fontSize: 38, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0
    });
    s.addShape("rect", { x: 1.25, y: 2.7, w: 2.2, h: 0.045, fill: { color: C.primaryLight } });
    s.addText("西岭市民服务平台单案例贯穿 · 323 页 · 五个实操总分总", {
      x: 1.2, y: 2.95, w: 5.6, h: 0.6,
      fontSize: 15, fontFace: "Microsoft YaHei", italic: true, color: C.onDark, margin: 0
    });
    // 章节进度点（16 章全部点亮）
    for (let i = 0; i < 16; i++) {
      s.addShape("ellipse", {
        x: 1.2 + i * 0.26, y: 4.45, w: 0.13, h: 0.13,
        fill: { color: C.primaryLight, transparency: 25 }
      });
    }
    s.addText("把问题变成答案，把定制变成能力", {
      x: 1.2, y: 4.85, w: 5.6, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true, color: C.onDarkBright, margin: 0
    });
    s.addText("从交付项目，到交付能力", {
      x: 1.2, y: 5.18, w: 5.6, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei", color: C.onDark, margin: 0
    });
  }
};
