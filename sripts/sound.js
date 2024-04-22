const basePath = "../public";
const srcs = [
  "tetris-theme1.mp3", // 原点にして頂点
  "tetris-theme2.mp3",
];

const audioBtns = [...document.getElementsByClassName("bgm")];
// サウンドの再生。
audioBtns[0].addEventListener("click", () => {
  new Audio(`${basePath}/${srcs[0]}`).play();
});

audioBtns[1].addEventListener("click", () => {
  new Audio(`${basePath}/${srcs[1]}`).play();
});
