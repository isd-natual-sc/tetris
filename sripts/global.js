// テトリミノのおおきさ
const tetroSize = 20;

// 行とか列の数
const rowMax = 20;
const colMax = 10;

// キャンバスの大きさ
const canvasW = tetroSize * colMax;
const canvasH = tetroSize * rowMax;

// I-ミノ
const im = {
  blks: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ],
  color: "#A9CEEC",
};

// O-ミノ
const om = {
  blks: [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  color: "#FFFF00",
};
// L-ミノ
const lm = {
  blks: [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
  ],
  color: "#FD7E00",
};

// J-ミノ
const jm = {
  blks: [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
  ],
  color: "#0069D8",
};

// Z-ミノ
const zm = {
  blks: [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  color: "#F41400",
};

// S-ミノ
const sm = {
  blks: [
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  color: "#4DB56A",
};

// T-ミノ
const tm = {
  blks: [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
  ],
  color: "#E4007F",
};

const minos = [im, om, sm, zm, jm, lm, tm];

export { tetroSize, rowMax, colMax, canvasW, canvasH, minos };
