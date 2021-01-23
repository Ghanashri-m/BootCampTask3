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
    let sum1 = 0;
    let sum2 = 0;
    
    input.push(...userInput[0].split(' ').map(Number));
    
    // using IIFE
    (function () {
      console.log('IIFE to print sum of all numbers in an arary');
      for (let i = 0; i < input.length; i++) {
        sum1 = sum1 + input[i];
      }
      console.log(sum1);
    })();
    
    let printOddNum = function (inputVal) {
      sum2 = sum2 + inputVal;
    }
    
    console.log('Anonymous function to print sum of all numbers in an arary');
    
    for (let i = 0; i < input.length; i++) {
      printOddNum(input[i]);
    }
    console.log(sum2);
  });