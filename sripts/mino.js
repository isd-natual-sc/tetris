import { canvasH, canvasW, colMax, rowMax, tetroSize } from "./global.js";
import { fields } from "./main.js";

// テトリミノの設計図
export class Mino {
  constructor(ctx, minos, fillColor) {
    this.x = 0;
    this.y = 0;
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
          const px = (this.x + parseInt(col)) * tetroSize;
          // y座標
          const py = (this.y + parseInt(row)) * tetroSize;

          // 描画
          this.ctx.beginPath();
          this.ctx.fillStyle = this.fillColor;
          this.ctx.fillRect(px, py, tetroSize, tetroSize);
          this.ctx.fill();
          this.ctx.strokeStyle = "#000000";
          this.ctx.strokeRect(px, py, tetroSize, tetroSize);
          this.ctx.stroke();
        }
      }
    }
  }

  checkMove(moveX, moveY) {
    for (const row in this.minos) {
      for (const col in this.minos) {
        const numCol = parseInt(col);
        const numRow = parseInt(row);

        if (this.minos[numRow][numCol]) {
          const nextX = this.x + moveX + numCol;
          const nextY = this.y + moveY + numRow;
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

    if (this.y === 17) {
      return false;
    }

    return true;
  }

  gravity() {
    if (this.checkMove(0, 1)) {
      this.y++;
      this.render();
    }
  }

  rotate() {
    // minos配列を倒す
    const lay = (a) => a[0].map((_, c) => a.map((r) => r[c])).reverse();

    this.minos = lay(this.minos);
  }

  move(e) {
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
      // やりやすくするため（削除予定）
      case "ArrowUp":
        if (this.checkMove(0, -1)) this.y--;
        break;
      case " ":
        if (this.checkMove(this.minos, 0)) this.rotate();
        break;
      default:
        return;
    }
    console.log(this.x, this.y, this.minos);
    this.render();
  }
}
