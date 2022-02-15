const prompt = require('prompt-sync')({ sigint: true });
const Field = require('./field');

// const {
//   pat, fie, hol, hat,
// } = Field;

// const field = new Field([
//   [pat, fie, hol, fie, hol, fie, fie],
//   [fie, fie, fie, fie, fie, fie, fie],
//   [hol, fie, fie, fie, fie, fie, hol],
//   [fie, fie, fie, hol, hol, fie, hol],
//   [fie, fie, hol, fie, fie, hol, hol],
//   [fie, fie, fie, fie, hat, fie, hol],
// ]);

const field = Field.generateField(10, 10);

let gameOn = true;

while (gameOn) {
  field.print();
  const input = prompt('Which way?').toLocaleLowerCase();
  if (input === 'd') {
    gameOn = field.down();
  } else if (input === 'u') {
    gameOn = field.up();
  } else if (input === 'r') {
    gameOn = field.right();
  } else if (input === 'l') {
    gameOn = field.left();
  }
}
