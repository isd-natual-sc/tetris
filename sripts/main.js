import {
  canvasH,
  canvasW,
  colMax,
  minos,
  rowMax,
  tetroSize,
} from "./global.js";
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

  console.log("Start");

  // 表示しているテトリミノ
  const displayMinos = [];

  // テトリミノを生成する関数。
  const generate = () => {
    // 配列から取り出したテトリミノ
    const mino = rand.randomChoice(minos);
    const mi = new Mino(ctx, mino.blks, mino.color);
    displayMinos.push(mi);
  };

  //ブロック一つを描画する
  // function drawBlock(x, y) {
  //   let px = x * tetroSize;
  //   let py = y * tetroSize;
  //   con.fillStyle = "red";
  //   con.fillRect(px, py, tetroSize, tetroSize);
  //   con.strokeStyle = "black";
  //   con.strokeRect(px, py, tetroSize, tetroSize);
  // }

  const drowMain = () => {
    displayMinos.forEach((mino) => {
      window.addEventListener("keydown", (e) => mino.move(e));
      window.addEventListener("keyup", () => mino.render());

      setInterval(() => {
        if (mino.y === 17) {
          generate();
          drowMain();
        } else {
          mino.gravity();
        }
      }, 300);
    });
  };
  // テトリミノの初期セットアップ
  generate();
  drowMain();
}

window.onload = () => main();
