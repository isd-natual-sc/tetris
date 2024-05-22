const audioSrcs = [
  new Audio("../public/tetris-theme1.mp3"),
  new Audio("../public/tetris-theme2.mp3"),
];

// buttonタグの取得
const audioBtns = [...document.getElementsByClassName("bgm")];

// サウンドの再生。
audioBtns[0].addEventListener("click", () => {
  audioSrcs[1].pause();
  audioSrcs[0].play();

  audioSrcs[0].onended = () => {
    audioSrcs[0].play();
  };
});

audioBtns[1].addEventListener("click", () => {
  audioSrcs[0].pause();
  audioSrcs[1].play();

  audioSrcs[1].onended = () => {
    audioSrcs[1].play();
  };
});
