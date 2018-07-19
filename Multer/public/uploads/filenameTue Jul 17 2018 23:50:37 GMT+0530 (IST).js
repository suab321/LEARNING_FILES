const fs = require('fs');
 
fs.readFile('./input.txt', (err, data) => {
 console.time('execution');
 if (err) {
 console.log('An error occured. The file could not be read');
 }
 const inputString = data.toString();
 let floorCounter = 0;
 let basement;
 
 for (var i = 0; i <= inputString.length; i++) {
     if (inputString[i] === '(') {
         floorCounter++;
     } else if (inputString[i] === ')') {
         floorCounter--;
     }
     if (!basement && floorCounter < 0) {
         basement = i + 1;
     }
 }
 
 console.log('Final Position:', floorCounter);
})