// common.js — FDE 认证培训课程 PPT 公共库
// 版式模式参照 WorkBuddy-Course/ppt/ch01；配色沿用 FDECore 风格（靛蓝主色 #3949ab + 琥珀/绿/红/浅蓝）
const pptxgen = require("pptxgenjs");
const SHAPE = { RECT: "rect", ELLIPSE: "ellipse", LINE: "line" };

// 配色体系：FDECore 靛蓝主色 + 语义色（琥珀=警示 / 绿=正向 / 红=红线 / 浅蓝=信息）
const C = {
  primary:     "3949AB",  // 靛蓝主色 — 标题、表头、卡片左色条
  primaryDark: "283593",  // 深靛蓝 — 封面/分隔页背景
  primaryLight:"5C6BC0",  // 亮靛蓝 — 强调、高亮、次级装饰
  accentWarm:  "A8895F",  // 琥珀 — 警示、互动装饰
  gold:        "8A6A42",  // 深琥珀 — 少量点缀
  green:       "5B7A5B",  // 深绿 — 正向/结论
  red:         "D94F4F",  // 红 — 红线/反面模式

  bgWhite:  "FFFFFF",
  bgLight:  "F4F6FB",  // 浅靛灰，交替页背景
  bgCard:   "ECF0F9",  // 浅靛蓝，卡片填充
  bgAccent: "E8ECF8",  // 浅靛蓝，结论/提示条背景
  bgAmber:  "F5ECE0",  // 琥珀米色 — 警示提示条
  bgGreen:  "E4EFE4",  // 浅绿 — 正向提示条
  bgRed:    "FDECEA",  // 浅红 — 红线警示条
  bgBlue:   "DBE4F0",  // 浅蓝 — 信息提示条

  textDark:  "2C3E50",  // 正文
  textMid:   "7F8C8D",  // 副文、注释
  textLight: "FFFFFF",  // 深色背景文字
  onDark:    "D9E0F5",  // 深色背景次级文字
  onDarkBright: "C5CDEC", // 深色背景装饰文字

  border: "C9D2E8",
  darkBg: "283593",  // 封面/分隔/总结背景
};

// 卡片阴影
const mkSh = () => ({
  type: "outer", color: "000000",
  blur: 6, offset: 2, angle: 135, opacity: 0.08
});

// 内容页标题 + 强调下划线
function sectionTitle(s, title, bgColor) {
  s.background = { color: bgColor || C.bgWhite };
  s.addText(title, {
    x: 0.6, y: 0.3, w: 8.8, h: 0.65,
    fontSize: 26, fontFace: "Microsoft YaHei",
    bold: true, color: C.primary, margin: 0,
  });
  s.addShape(SHAPE.RECT, {
    x: 0.6, y: 0.95, w: 1.0, h: 0.035,
    fill: { color: C.primaryLight }
  });
}

// 顶部/底部强调条
function topAccentBar(s) {
  s.addShape(SHAPE.RECT, { x: 0, y: 0, w: 10, h: 0.05, fill: { color: C.primaryLight } });
}
function bottomAccentBar(s) {
  s.addShape(SHAPE.RECT, { x: 0, y: 5.575, w: 10, h: 0.05, fill: { color: C.primaryLight } });
}

// 数字圆标
function numBadge(s, x, y, num, color) {
  s.addShape(SHAPE.ELLIPSE, { x, y, w: 0.45, h: 0.45, fill: { color: color || C.primary } });
  s.addText(String(num).padStart(2, "0"), {
    x, y, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: C.textLight, bold: true,
    align: "center", valign: "middle", margin: 0
  });
}

// 卡片（白色 + 阴影 + 左侧色条）
function card(s, x, y, w, h, stripColor) {
  s.addShape(SHAPE.RECT, { x, y, w, h, fill: { color: C.bgWhite }, shadow: mkSh() });
  s.addShape(SHAPE.RECT, { x, y, w: 0.06, h, fill: { color: stripColor || C.primary } });
}

// 底部调用条（默认浅靛蓝 / 信息）
function calloutBar(s, text, y, color, strip) {
  const by = y || 4.75;
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 8.8, h: 0.44, fill: { color: color || C.bgAccent } });
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 0.05, h: 0.44, fill: { color: strip || C.primary } });
  s.addText(text, {
    x: 0.85, y: by, w: 8.3, h: 0.44,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: C.textDark, valign: "middle", margin: 0
  });
}

// 警示条（琥珀左侧条）——反模式/红线
function warnBar(s, text, y) {
  const by = y || 4.75;
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 8.8, h: 0.44, fill: { color: C.bgAmber } });
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 0.05, h: 0.44, fill: { color: C.accentWarm } });
  s.addText(text, {
    x: 0.85, y: by, w: 8.3, h: 0.44,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: C.textDark, valign: "middle", margin: 0
  });
}

// 红线条（红左侧条）——四条红线/纪律
function redBar(s, text, y) {
  const by = y || 4.75;
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 8.8, h: 0.44, fill: { color: C.bgRed } });
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 0.05, h: 0.44, fill: { color: C.red } });
  s.addText(text, {
    x: 0.85, y: by, w: 8.3, h: 0.44,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: C.textDark, valign: "middle", margin: 0
  });
}

// 分隔页（深靛蓝底）：大节号 + 节标题 + 要点列表
function divider(s, num, title, points) {
  s.background = { color: C.darkBg };
  topAccentBar(s);
  bottomAccentBar(s);
  // 装饰层
  s.addText(num, {
    x: 6.6, y: 0.1, w: 3.4, h: 3.4,
    fontSize: 150, fontFace: "Arial", bold: true,
    color: C.primaryLight, transparency: 82, align: "center", valign: "middle", margin: 0
  });
  s.addShape(SHAPE.ELLIPSE, { x: 7.9, y: -1.3, w: 3.6, h: 3.6, fill: { color: "FFFFFF", transparency: 93 }, line: { color: C.onDarkBright, width: 1.2, transparency: 60 } });
  s.addShape(SHAPE.ELLIPSE, { x: 8.5, y: -0.7, w: 2.4, h: 2.4, fill: { color: C.primaryLight, transparency: 87 }, line: { color: C.onDarkBright, width: 1, transparency: 65 } });
  s.addShape(SHAPE.ELLIPSE, { x: -1.3, y: 4.1, w: 2.8, h: 2.8, fill: { color: C.primary, transparency: 85 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
  s.addShape(SHAPE.ELLIPSE, { x: 0.55, y: 0.5, w: 0.32, h: 0.32, fill: { color: C.onDarkBright, transparency: 55 } });
  // 左侧品牌竖线
  s.addShape(SHAPE.RECT, { x: 0.8, y: 1.0, w: 0.07, h: 2.2, fill: { color: C.onDarkBright } });
  // 标题区
  s.addText(num, {
    x: 1.2, y: 0.9, w: 2.5, h: 0.9,
    fontSize: 32, fontFace: "Microsoft YaHei", bold: true,
    color: C.onDarkBright, margin: 0
  });
  s.addText(title, {
    x: 1.2, y: 1.85, w: 7.5, h: 0.8,
    fontSize: 24, fontFace: "Microsoft YaHei", bold: true,
    color: C.textLight, margin: 0
  });
  let y = 3.0;
  points.forEach(pt => {
    s.addShape(SHAPE.ELLIPSE, { x: 1.3, y: y + 0.14, w: 0.18, h: 0.18, fill: { color: C.primaryLight } });
    s.addText(pt, {
      x: 1.65, y, w: 7.4, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: C.onDark, margin: 0
    });
    y += 0.5;
  });
}

// 金句/大结论条（强调页用）——字号 12，高度按文本长度自适应
function bigCallout(s, text, y, h, color) {
  const by = y || 2.2;
  const lines = Math.max(1, Math.ceil(text.length / 44));
  const bh = h || (0.2 + lines * 0.24);
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 8.8, h: bh, fill: { color: C.bgAccent }, shadow: mkSh() });
  s.addShape(SHAPE.RECT, { x: 0.6, y: by, w: 0.07, h: bh, fill: { color: C.primary } });
  s.addText(text, {
    x: 0.95, y: by, w: 8.2, h: bh,
    fontSize: 12, fontFace: "Microsoft YaHei", bold: true,
    color: color || C.primary, valign: "middle", margin: 0, lineSpacingMultiple: 1.2, fit: "shrink"
  });
}

// 代码块（深底等宽）
function codeBlock(s, x, y, w, h, code, size) {
  s.addShape(SHAPE.RECT, { x, y, w, h, fill: { color: "2C3E50" }, shadow: mkSh() });
  s.addText(code, {
    x: x + 0.2, y, w: w - 0.4, h,
    fontSize: size || 12, fontFace: "Consolas",
    color: "DBE4F0", valign: "top", margin: 0, lineSpacingMultiple: 1.25
  });
}

// 通用表格（靛蓝表头 + 隔行浅底）
function table(s, rows, opts) {
  const o = opts || {};
  const hdr = { bold: true, color: C.textLight, fill: { color: C.primary }, align: "center", valign: "middle", fontFace: "Microsoft YaHei", fontSize: 12 };
  const celA = { fill: { color: C.bgCard }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.textDark, valign: "middle" };
  const celB = { fill: { color: C.bgWhite }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.textDark, valign: "middle" };
  const mkF = (i) => ({ fill: { color: i % 2 ? C.bgWhite : C.bgCard }, fontFace: "Microsoft YaHei", fontSize: 11.5, color: C.primary, bold: true, valign: "middle" });
  const body = rows.map((r, ri) => r.map((c, ci) => {
    if (typeof c === "string") {
      return { text: c, options: ri === 0 ? hdr : (ci === 0 ? mkF(ri) : (ri % 2 ? celB : celA)) };
    }
    return { text: c.text, options: Object.assign({}, ri === 0 ? hdr : (ci === 0 ? mkF(ri) : (ri % 2 ? celB : celA)), c.options || {}) };
  }));
  s.addTable(body, {
    fontFace: "Microsoft YaHei",
    x: o.x || 0.6, y: o.y || 1.3, w: o.w || 8.8,
    colW: o.colW, border: { type: "solid", pt: 0.5, color: o.border || C.border },
    rowH: o.rowH || 0.55, autoPage: false,
  });
}

// 封面（深靛蓝底）
function cover(s, chapterNo, title, subtitle, points, totalChapters) {
  s.background = { color: C.darkBg };
  topAccentBar(s);
  bottomAccentBar(s);
  // 装饰层
  s.addText(chapterNo, {
    x: 5.6, y: 0.1, w: 4.4, h: 4.4,
    fontSize: 190, fontFace: "Arial", bold: true,
    color: C.primaryLight, transparency: 80, align: "center", valign: "middle", margin: 0
  });
  s.addShape(SHAPE.ELLIPSE, { x: 7.7, y: -1.5, w: 4.2, h: 4.2, fill: { color: "FFFFFF", transparency: 92 }, line: { color: C.onDarkBright, width: 1.5, transparency: 55 } });
  s.addShape(SHAPE.ELLIPSE, { x: 8.35, y: -0.85, w: 2.9, h: 2.9, fill: { color: C.primaryLight, transparency: 88 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
  s.addShape(SHAPE.ELLIPSE, { x: -1.4, y: 3.9, w: 2.9, h: 2.9, fill: { color: C.primary, transparency: 85 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
  s.addShape(SHAPE.ELLIPSE, { x: 7.2, y: 0.45, w: 0.4, h: 0.4, fill: { color: C.onDarkBright, transparency: 55 } });
  s.addShape(SHAPE.ELLIPSE, { x: 6.9, y: 0.25, w: 0.22, h: 0.22, fill: { color: C.accentWarm, transparency: 45 } });
  s.addShape(SHAPE.ELLIPSE, { x: 0.6, y: 5.0, w: 0.5, h: 0.5, fill: { color: C.onDarkBright, transparency: 70 } });
  s.addShape(SHAPE.RECT, { x: 0.8, y: 1.0, w: 0.07, h: 2.6, fill: { color: C.onDarkBright } });
  // 标题区
  s.addText(`第 ${chapterNo} 章`, {
    x: 1.2, y: 1.02, w: 7.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: C.onDarkBright, margin: 0
  });
  s.addText(title, {
    x: 1.2, y: 1.55, w: 8.2, h: 1.0,
    fontSize: 40, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0
  });
  s.addShape(SHAPE.RECT, { x: 1.25, y: 2.72, w: 2.2, h: 0.045, fill: { color: C.primaryLight } });
  s.addText(subtitle, {
    x: 1.2, y: 2.98, w: 8.2, h: 0.6,
    fontSize: 15, fontFace: "Microsoft YaHei", italic: true, color: C.onDark, margin: 0
  });
  // 底部章节进度点
  const n = totalChapters || 16;
  const idx = parseInt(chapterNo, 10) || 0;
  for (let i = 0; i < n; i++) {
    s.addShape(SHAPE.ELLIPSE, {
      x: 1.2 + i * 0.26, y: 4.5, w: 0.13, h: 0.13,
      fill: { color: i < idx ? C.primaryLight : "FFFFFF", transparency: i < idx ? 25 : 75 }
    });
  }
  s.addText("《人工智能工程师（高级）FDE 认证培训》教科书配套课件 · 西岭市民服务平台单案例贯穿", {
    x: 1.2, y: 4.9, w: 8.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei", color: C.onDarkBright, margin: 0
  });
}

// 本章小结页（深靛蓝底）
function summarySlide(s, chapterNo, title, points) {
  s.background = { color: C.darkBg };
  topAccentBar(s);
  bottomAccentBar(s);
  s.addText(`第 ${chapterNo} 章小结`, {
    x: 0.8, y: 0.55, w: 8.0, h: 0.7,
    fontSize: 26, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0
  });
  s.addShape(SHAPE.RECT, { x: 0.85, y: 1.3, w: 1.0, h: 0.035, fill: { color: C.primaryLight } });
  s.addText(title, {
    x: 0.8, y: 1.35, w: 8.4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei", color: C.onDark, margin: 0
  });
  let y = 1.85;
  points.forEach(pt => {
    s.addShape(SHAPE.ELLIPSE, { x: 1.0, y: y + 0.1, w: 0.15, h: 0.15, fill: { color: C.primaryLight } });
    s.addText(pt, {
      x: 1.35, y, w: 7.6, h: 0.52,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: C.textLight, margin: 0, valign: "top", lineSpacingMultiple: 1.15, fit: "shrink"
    });
    y += 0.56;
  });
}

// 实操课封面（深靛蓝底 · 独特花纹：菱形点阵 + LAB 水印 + 实验流程条；配色与普通封面一致）
function labCover(s, chapterNo, labName, title, subtitle, flowSteps) {
  s.background = { color: C.darkBg };
  topAccentBar(s);
  bottomAccentBar(s);
  // 水印 "LAB"（区别于普通章的章节数字）
  s.addText("LAB", {
    x: 5.9, y: 0.1, w: 4.1, h: 3.6,
    fontSize: 170, fontFace: "Arial", bold: true,
    color: C.primaryLight, transparency: 82, align: "center", valign: "middle", margin: 0
  });
  // 菱形装饰（区别于普通章的圆环）
  s.addShape(SHAPE.RECT, { x: 8.0, y: -1.2, w: 3.4, h: 3.4, rotate: 45, fill: { color: "FFFFFF", transparency: 93 }, line: { color: C.onDarkBright, width: 1.3, transparency: 55 } });
  s.addShape(SHAPE.RECT, { x: 8.55, y: -0.65, w: 2.3, h: 2.3, rotate: 45, fill: { color: C.primaryLight, transparency: 88 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
  s.addShape(SHAPE.RECT, { x: -1.3, y: 3.8, w: 2.6, h: 2.6, rotate: 45, fill: { color: C.primary, transparency: 85 }, line: { color: C.onDarkBright, width: 1, transparency: 60 } });
  s.addShape(SHAPE.RECT, { x: 7.3, y: 0.5, w: 0.32, h: 0.32, rotate: 45, fill: { color: C.onDarkBright, transparency: 50 } });
  s.addShape(SHAPE.RECT, { x: 6.85, y: 0.28, w: 0.2, h: 0.2, rotate: 45, fill: { color: C.accentWarm, transparency: 40 } });
  s.addShape(SHAPE.RECT, { x: 0.65, y: 4.75, w: 0.4, h: 0.4, rotate: 45, fill: { color: C.onDarkBright, transparency: 65 } });
  // 左侧品牌竖线
  s.addShape(SHAPE.RECT, { x: 0.8, y: 1.0, w: 0.07, h: 2.6, fill: { color: C.onDarkBright } });
  // 实操标签
  s.addShape(SHAPE.RECT, { x: 1.2, y: 0.95, w: 1.1, h: 0.34, fill: { color: C.primaryLight } });
  s.addText("实操课", {
    x: 1.2, y: 0.95, w: 1.1, h: 0.34,
    fontSize: 12, fontFace: "Microsoft YaHei", bold: true, color: "FFFFFF",
    align: "center", valign: "middle", margin: 0
  });
  // 章号 + 标题
  s.addText(`第 ${chapterNo} 章 · ${labName}`, {
    x: 1.2, y: 1.45, w: 7.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei", bold: true, color: C.onDarkBright, margin: 0
  });
  s.addText(title, {
    x: 1.2, y: 2.0, w: 8.2, h: 0.95,
    fontSize: 36, fontFace: "Microsoft YaHei", bold: true, color: C.textLight, margin: 0
  });
  s.addShape(SHAPE.RECT, { x: 1.25, y: 3.1, w: 2.2, h: 0.045, fill: { color: C.primaryLight } });
  s.addText(subtitle, {
    x: 1.2, y: 3.35, w: 8.2, h: 0.6,
    fontSize: 15, fontFace: "Microsoft YaHei", italic: true, color: C.onDark, margin: 0
  });
  // 实验流程条（区别于普通章的章节进度点）
  s.addText("实验流程", { x: 1.2, y: 4.1, w: 2.0, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", bold: true, color: C.onDarkBright, margin: 0 });
  const segW = 1.22, gap = 0.1;
  let x = 1.2;
  flowSteps.forEach((st, i) => {
    s.addShape(SHAPE.RECT, { x, y: 4.4, w: segW, h: 0.32, fill: { color: i === 0 ? C.primaryLight : "FFFFFF", transparency: i === 0 ? 12 : 78 } });
    s.addText(String(i + 1), { x, y: 4.4, w: segW, h: 0.32, fontSize: 11, fontFace: "Arial", bold: true, color: "FFFFFF", align: "center", valign: "middle", margin: 0 });
    s.addText(st, { x: x - 0.1, y: 4.76, w: segW + 0.2, h: 0.3, fontSize: 8.5, fontFace: "Microsoft YaHei", color: C.onDark, align: "center", margin: 0 });
    x += segW + gap;
  });
  // 底部
  s.addText("《人工智能工程师（高级）FDE 认证培训》教科书配套课件 · 西岭市民服务平台单案例贯穿", {
    x: 1.2, y: 5.2, w: 8.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: C.onDarkBright, margin: 0
  });
}

module.exports = { SHAPE, C, mkSh, sectionTitle, topAccentBar, bottomAccentBar,
  numBadge, card, calloutBar, warnBar, redBar, divider, bigCallout, codeBlock,
  table, cover, labCover, summarySlide };

