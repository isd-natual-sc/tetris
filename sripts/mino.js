import { canvasH, canvasW, colMax, rowMax } from "./global.js";
import { fields } from "./main.js";

// テトリミノの設計図
export class Mino {
  constructor(x, y, oneSide, ctx, minos, fillColor) {
    this.x = x;
    this.y = y;
    this.width = oneSide;
    this.height = oneSide;
    this.ctx = ctx;
    this.minos = minos;
    this.fillColor = fillColor;
  }

  render() {
    this.ctx.clearRect(0, 0, canvasW, canvasH);
    for (const row in this.minos) {
      for (const col in this.minos) {
        if (this.minos[row][col]) {
          // x座標
          const px = (this.x + parseInt(col)) * this.width;
          // y座標
          const py = (this.y + parseInt(row)) * this.height;

          // 描画
          this.ctx.beginPath();
          this.ctx.fillStyle = this.fillColor;
          this.ctx.fillRect(px, py, this.width, this.height);
          this.ctx.fill();
          this.ctx.strokeStyle = "#000000";
          this.ctx.strokeRect(px, py, this.width, this.height);
          this.ctx.stroke();
        }
      }
    }
  }

  checkMove(moveX, moveY) {
    for (let row in this.minos) {
      for (let col in this.minos) {
        const numCol = parseInt(col);
        const numRow = parseInt(row);

        if (this.minos[numRow][numCol]) {
          const nextX = this.x + moveX + numCol;
          const nextY = this.y + moveY + numRow;

          console.log(nextX, nextY, fields);
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
    return true;
  }

  gravity() {
    if (this.checkMove(0, 1)) this.render();
  }

  move(e) {
    console.log(this.x, this.y);
    switch (e.key) {
      case "ArrowLeft":
        if (this.checkMove(-1, 0)) this.x--;
        break;
      case "ArrowRight":
        if (this.checkMove(1, 0)) this.x++;
        break;
      case "ArrowDown":
        if (this.checkMove(0, 1)) this.y++;
        break;
      case "Space":
        break;
      default:
        return;
    }
    this.render();
  }
}
