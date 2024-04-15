import { canvasH, canvasW, colMax, rowMax, tetroSize } from "./global.js";
import { Mino } from "./mino.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colors = ["red", "blue", "green"];

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
  const field = new Mino(0, 0, tetroSize, ctx, fields, "#000000");
  field.render();
  // I-ミノ
  const im = new Mino(
    0,
    0,
    tetroSize,
    ctx,
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    "#A9CEEC"
  );

  im.render();
  console.log("Start");
  window.addEventListener("keydown", (e) => {
    im.move(e);
  });

  window.addEventListener("keyup", () => im.render);

  const frame = () => {
    im.gravity();
  };
  window.requestAnimationFrame(frame);
}

window.onload = () => main();
