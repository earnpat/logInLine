const printInLine = require("./lib/PrintInLine");

// table 11 * 11
//           *         
//           *         
//           *         
//           *         
//           *         
// * * * * * * * * * * *        
//           *         
//           *         
//           *         
//           *         
//           *

const main = () => {
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (i === 5) {
        printInLine.print("*")
      } else {
        if (j === 5) {
          printInLine.print("*")
        } else {
          printInLine.print(" ")
        }
      }
    }
    printInLine.printNewLine();
  }
};

main();
