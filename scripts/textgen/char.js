const COLORS = { RED: "#E5191C", WHITE: "#FDFDFD", BLACK: "#0F0F0F" },
  CHAR_MODE = { FIRST: 1, WHITE: 2, RED: 3, SPACE: 4 },
  MAX_ANGLE = 10;
class BoxChar {
  static BorderScale = 1.4;
  static BackgroundScale = 1.2;
  char = "";
  fontFamily = "";
  fontSize = 0;
  width = 0;
  height = 0;
  left = 0;
  top = 0;
  angle = 0;
  scale = 0;
  mode = CHAR_MODE.WHITE;
  color = COLORS.WHITE;
  constructor(t, h, i = 60, e = "CustomFont") {
    if (
      ((this.char = t),
      (this.mode = h),
      (this.fontFamily = e),
      h == CHAR_MODE.SPACE)
    )
      return;
    const a = -Math.round(10 * Math.random()) % 10;
    h == CHAR_MODE.FIRST
      ? ((this.scale = 1.1), (this.angle = a))
      : ((this.scale = 1 - (Math.floor(10 * Math.random()) % 3) / 10),
        (this.angle = a * randomOper())),
      (this.fontSize = i * this.scale),
      h == CHAR_MODE.RED && (this.color = COLORS.RED);
    const {
      width: s,
      height: o,
      top: r,
      left: n,
    } = getCharSize(t, this.fontSize, this.fontFamily, "bold");
    (this.width = s), (this.height = o), (this.top = r), (this.left = n);
  }
  get font() {
    return `bold ${this.fontSize}px ${this.fontFamily}`;
  }
  get rotateSize() {
    const t = (this.angle * Math.PI) / 180,
      h = Math.abs(Math.sin(t)),
      i = Math.abs(Math.cos(t));
    return {
      width: Math.ceil(this.width * i) + Math.ceil(this.height * h),
      height: Math.ceil(this.height * i) + Math.ceil(this.width * h),
    };
  }
  get outterSize() {
    const { width: t, height: h } = this.rotateSize,
      i =
        this.mode == CHAR_MODE.FIRST
          ? BoxChar.BorderScale
          : BoxChar.BackgroundScale;
    return { width: t * i, height: h * i };
  }
}
