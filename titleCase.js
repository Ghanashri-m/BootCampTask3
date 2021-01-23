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
    let input2 = [];
    
    input.push(...userInput[0].toLowerCase().split(' '));
    
    input2 = [...input];
    
    console.log('input 1 is');
    console.log(input);
    
    console.log('input 2 is');
    console.log(input2);
    
    // using IIFE
    (function () {
      console.log('IIFE to Convert all the strings to title caps in a string array ');
      for (let i = 0; i < input.length; i++) {
        input[i] = input[i][0].toUpperCase() + input[i].slice(1);
      }
      console.log(input);
    })();
    
    let titleCase = function (inputVal) {
      return inputVal.toUpperCase();
    }
    
    console.log('Anonymous function Convert all the strings to title caps in a string array ');
    
    for (let i = 0; i < input2.length; i++) {
      input2[i] = titleCase(input2[i][0]) + input2[i].slice(1);
    }
    
    console.log(input2);
  });