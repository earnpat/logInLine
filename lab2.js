const printInLine = require("./lib/PrintInLine");

// table 10 * 10
// * * * * * * * * * *
// *                 *
// *                 *
// *                 *
// *                 *
// *                 *
// *                 *
// *                 *
// *                 *
// * * * * * * * * * *

const main = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i === 0 || i === 9 || j === 0 || j === 9) {
        printInLine.print("*");
      }
      else {
        printInLine.print(" ");
      }
    }
    printInLine.printNewLine();
  }
};

main();
