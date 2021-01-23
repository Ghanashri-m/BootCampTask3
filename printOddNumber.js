const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const input = [];
  input.push(...userInput[0].split(' ').map(Number));
  
  // using IIFE
  (function () {
    console.log('IIFE to print all the odd numbers in an arary');
    for (let i = 0; i < input.length; i++) {
      if (input[i] % 2 !== 0) {
        console.log(input[i]);
      }
    }
  })();
  
  let printOddNum = function (inputVal) {
    if (inputVal % 2 !== 0) {
      console.log(inputVal);
    }
  }
  
  console.log('Anonymous function to print all the odd numbers in an arary');
  
  for (let i = 0; i < input.length; i++) {
    printOddNum(input[i]);
  }
});