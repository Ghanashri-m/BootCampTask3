inp.on("line", (data) => {
    userInput.push(data);
  });
  
  inp.on("close", () => {
    const input = [];
    
    input.push(...userInput[0].toString().split(' '));
    
    // using IIFE
    (function () {
      console.log('IIFE for removing all duplicates in a string array ');
      let uniqueArray = input.filter((item, index) => {
        return input.indexOf(item) === index;
      });
      console.log(uniqueArray);
    })();
    
    let isDuplicate = function () {
      let uniqueArray = input.filter((item, index) => {
        return input.indexOf(item) === index;
      });
      console.log(uniqueArray);
    }
    
    console.log('Anonymous function for removing all duplicates in a string array ');
    isDuplicate();
  });
