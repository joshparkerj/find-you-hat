const prompt = require('prompt-sync')({ sigint: true });
const Field = require('./field');

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
  } else {
    console.log('allowed inputs: u, d, l, r (for up, down, left, and right)');
  }
}
