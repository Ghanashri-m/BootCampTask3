const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
  });
  
  inp.on("close", () => {
    let input = [];
    
    input.push(...userInput[0].split(' ').map(Number));
    
    // using IIFE
    (function () {
      console.log('IIFE to print all prime numbers in an arary');
      input = input.filter((number) => {
      for (let i = 2; number > i; i++) {
        if (number % i === 0)
        return false;
      }
      return number > 1;
      });
      
      console.log(input);
    })();
    
    let isPrime = function () {
      input = input.filter((number) => {
      for (let i = 2; number > i; i++) {
        if (number % i === 0)
        return false;
      }
      return number > 1;
      });
      console.log('Anonymous function to print all prime numbers in an arary');
      console.log(input);
    }
    
    isPrime();
  });