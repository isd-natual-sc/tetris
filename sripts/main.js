import { canvasH, canvasW, colMax, rowMax, tetroSize } from "./global.js";
import { Mino } from "./mino.js";
import { Random } from "./lib.js";

const rand = new Random();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvasW;
canvas.height = canvasH;

export const fields = [];
for (let row = 0; row < rowMax; row++) {
  fields[row] = [];
  for (let col = 0; col < colMax; col++) {
    fields[row][col] = 0;
  }
}

function main() {
  const field = new Mino(ctx, fields, "#000000");
  field.render();
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

  const generate = () => {
    // 配列から取り出したテトリミノ
    const mino = rand.randomChoice(minos);
    return new Mino(ctx, mino.blks, mino.color);
  };

  // テトリミノのインスタンス
  const mino = generate();
  mino.render();

  console.log("Start");
  window.addEventListener("keydown", (e) => {
    mino.move(e);
  });

  // 表示しているテトリミノ
  const displayMinos = [];

  window.addEventListener("keyup", () => mino.render());

  setInterval(() => {
    if (mino.y === 17) {
    }
  }, 300);
}

window.onload = () => main();
