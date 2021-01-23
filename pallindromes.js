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
    
    input.push(...userInput[0].toString().split(' '));
    
    // using IIFE
    (function () {
      console.log('IIFE to print all pallindromes in a string array ');
      for (let i = 0; i < input.length; i++) {
        let original = input[i];
        let latest = input[i].split('').reverse().join('');
        if (latest === original) {
          console.log(input[i]);
        }
      }
    })();
    
    let isPalindrome = function () {
      for (let i = 0; i < input.length; i++) {
        let original = input[i];
        let latest = input[i].split('').reverse().join('');
        if (latest === original) {
          console.log(input[i]);
        }
      }
    }
    
    console.log('Anonymous function print all pallindromes in a string array ');
    isPalindrome();
  });