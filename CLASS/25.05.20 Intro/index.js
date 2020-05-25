//What is Node.js

//Why NodeJs

//process object
//console.log(process);
// console.log(process.argv);
// process.argv.forEach((item, i) => {
// console.log(`${i}:${item}`);

    
// });
const args = process.argv.slice(2);
console.log(args);

console.log(`Hey ${args[0]}`);

//fs (File System) build-in module in Node.js
const fs = require('fs');
//to read a file
fs.readFile('./longText.txt', 'utf8', function(error, data){
    if(error) throw error;
    console.log(data);
});

//write file
fs.writeFile('new.txt', 'This is created by Simona', (error)=>{
    if(error) throw error;
    console.log('Done ✔');
    
})
console.log('Hi this is too much fun');
