class PrintInLine {
  constructor() {
    this.defaultData = "";
  }

  print(input) {
    this.defaultData += `${input} `;
  }

  printNewLine() {
    console.log(this.defaultData);
    this.defaultData = "";
  }
}

module.exports = new PrintInLine();
