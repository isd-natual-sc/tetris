export class Random {
  constructor() {}
  rangeRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  randomChoice(array) {
    const rand = Math.floor(Math.random() * array.length);
    return array[rand];
  }
  replacement(...prevList) {
    // result container
    const afterList = [];
    let after;
    while (prevList.length !== afterList.length) {
      after = this.randomChoice(prevList);
      if (afterList.includes(after)) {
        // if include skip --> don't do anything, and go to head.
        continue;
      } else {
        // if passed add.
        afterList.push(after);
      }
    }
    return afterList;
  }
  rangeRandoms(min, max, piece) {
    let rands = [];
    for (let times = 0; times < piece; times++) {
      rands.push(this.rangeRandom(min, max));
    }
    return rands;
  }
  rangeRandomsNoRepeat(min, max, piece) {
    if (max - min < piece) {
      throw new Error("Value Error! max-min < piece => I must be repeat!!");
    }
    const rands = [];
    while (rands.length !== piece) {
      let rand = this.rangeRandom(min, max);
      if (rands.includes(rand)) {
        continue;
      } else {
        rands.push(rand);
      }
    }
    return rands;
  }
  randomString(letterPiece) {
    const alphabetsAndNumsAndSymbols = [
      ..."abcdefghijklmnopqrstuvwxyz",
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      ..."1234567890",
      ..."!#$%&'()=~|-^+*;:{}[]?<>,._",
    ];
    let text = "";
    for (let i = 0; i < letterPiece; i++) {
      text += this.randomChoice(alphabetsAndNumsAndSymbols);
    }
    return text;
  }
}

export const stepNumbers = (first, second, last) => {
  const difference = second - first;
  const sequences = [];

  for (let el = first; el < last; el += difference) {
    sequences.push(el);
  }

  return sequences;
};
