import { minos } from "./global.js";
import { fields } from "./main.js";

const canvas = document.querySelector("canvas");
const blkSize = 30;
canvas.width = blkSize * 10;
canvas.height = blkSize * 20;
const ctx = canvas.getContext("2d");

// 配列から適当に選ぶ。
const choice = (array) => {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

// テトロミノの座標
let tetroX = 0;
let tetroY = 0;

// テトリミノ本体
const tetroBody = choice(minos);
const tetro = tetroBody.blk;

// field本体を作成。
let field = [];
for (let y = 0; y < canvas.height / blkSize; y++) {
  field.push([]);
  for (let x = 0; x < canvas.width / blkSize; x++) {
    field.push(0);
  }
}
console.log(field);

// テトロミノを描画する関数
function drowTetro() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y in tetro) {
    for (let x in tetro) {
      if (tetro[y][x]) {
        let px = tetroX * blkSize + x * blkSize;
        let py = tetroY * blkSize + y * blkSize;
        if (py >= canvas.height - y * blkSize) {
          tetroY = canvas.height - y * blkSize;
          py = tetroY;

          ctx.beginPath();
          ctx.fillStyle = tetroBody.color;
          ctx.fillRect(px, py, blkSize, blkSize);
          ctx.strokeStyle = "black";
          ctx.strokeRect(px, py, blkSize, blkSize);
          ctx.closePath();
        } else {
          ctx.beginPath();
          ctx.fillStyle = tetroBody.color;
          ctx.fillRect(px, py, blkSize, blkSize);
          ctx.strokeStyle = "black";
          ctx.strokeRect(px, py, blkSize, blkSize);
          ctx.closePath();
        }
      }
    }
  }
}

function drowField() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < canvas.height / blkSize; y++) {
    for (let x = 0; x < canvas.width / blkSize; x++) {
      const px = x * blkSize;
      const py = y * blkSize;
      if (fields[x][y]) {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(px, py, blkSize, blkSize);
        ctx.strokeStyle = "black";
        ctx.strokeRect(px, py, blkSize, blkSize);
        ctx.closePath();
      }
    }
  }
}

function checkMove(moveX, moveY) {
  for (const row in tetro) {
    for (const col in tetro) {
      const numCol = parseInt(col);
      const numRow = parseInt(row);

      if (tetro[numRow][numCol]) {
        const nextX = x + moveX + numCol;
        const nextY = y + moveY + numRow;
        if (
          nextX < 0 ||
          nextY < 0 ||
          nextX >= colMax ||
          nextY >= rowMax ||
          fields[nextY][nextX]
        ) {
          return false;
        }
      }
    }
  }

  if (tetroY === 17) {
    return false;
  }

  return true;
}

drowField();
drowTetro();
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (checkMove(-1, 0)) tetroX--;
      break;
    case "ArrowRight":
      if (checkMove(1, 0)) tetroX++;
      break;
    case "ArrowDown":
      if (checkMove(0, 1)) tetroY++;
      break;
    // やりやすくするため（削除予定）
    case "ArrowUp":
      if (checkMove(0, -1)) tetroY--;
      break;
    case " ":
      if (checkMove(minos.length, 0)) rotate();
      break;
    default:
      return;
  }
  drowTetro();
});

window.addEventListener("keyup", () => drowTetro());

setInterval(() => {
  if (checkMove(0, 1)) tetroY--;
  drowTetro();
}, 300);
