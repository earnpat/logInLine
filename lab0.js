const printInLine = require("./lib/PrintInLine");

// 1 2 3 4 5 6 7 8 9 10
// 2 3 4 5 6 7 8 9 10
// 3 4 5 6 7 8 9 10
// 4 5 6 7 8 9 10
// 5 6 7 8 9 10
// 6 7 8 9 10
// 7 8 9 10
// 8 9 10
// 9 10
// 10

const main = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10 ; j++) {
      if (j >= i) {
        printInLine.print(j+1)
      }
    }
    printInLine.printNewLine();
  }
};

main();
