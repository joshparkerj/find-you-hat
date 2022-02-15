class Field {
  static hat = '^';

  static hol = 'O';

  static fie = '░';

  static pat = '*';

  static generateField(height, width, percentage = 20) {
    const fieldLength = height * width;
    const holes = Math.round(fieldLength * (percentage / 100));
    const fields = fieldLength - holes - 2;
    console.log(fieldLength, holes, fields);
    const shuffle = (arr) => {
      const swap = (i, j) => {
        const temp = arr[i];
        // eslint-disable-next-line no-param-reassign
        arr[i] = arr[j];
        // eslint-disable-next-line no-param-reassign
        arr[j] = temp;
      };

      for (let i = 0; i < arr.length; i += 1) {
        const j = Math.floor(Math.random() * (arr.length - i)) + i;
        swap(i, j);
      }

      return arr;
    };

    const linearField = [Field.pat].concat(shuffle([...`${Field.hat}${Field.hol.repeat(holes)}${Field.fie.repeat(fields)}`]));
    const field = [];
    for (let i = 0; i < linearField.length; i += 1) {
      if (i % width === 0) {
        field.push([]);
      }

      field[field.length - 1].push(linearField[i]);
    }

    return new Field(field);
  }

  constructor(field) {
    if (Array.isArray(field)) {
      this.field = field;
      this.x = 0;
      this.y = 0;
    }
  }

  print() {
    console.log(this.field.map((row) => row.join('')).join('\n'));
  }

  move(x, y) {
    if (x < 0 || y < 0 || x > this.field[0].length || y > this.field.length) {
      console.log('Out of bounds');
      return false;
    }

    const spot = this.field[y][x];
    if (spot === Field.fie || spot === Field.pat) {
      this.x = x;
      this.y = y;
      this.field[y][x] = Field.pat;
      return true;
    }

    if (spot === Field.hol) {
      console.log('You fell down a hole!');
      return false;
    }

    if (spot === Field.hat) {
      console.log('Congratulations! You found your hat!');
      return false;
    }

    console.error('unexpected value in field');
    return false;
  }

  up() {
    return this.move(this.x, this.y - 1);
  }

  down() {
    return this.move(this.x, this.y + 1);
  }

  left() {
    return this.move(this.x - 1, this.y);
  }

  right() {
    return this.move(this.x + 1, this.y);
  }
}

module.exports = Field;
