// const{sum} = require ('./script') //i grab only a function from the entire file
const { prepareString } = require("./script");
const { showHelp } = require("./messaging");
const args = process.argv.slice(2);

//console.log(args);
// let x = parseFloat(args[0]);
// let y = parseFloat(args[1]);
// console.log(`x + y = ${sum(x,y)}`);

if (args.includes("--help")) {
  showHelp();
}

let joinedArr = args.join(" "); //here no more space
let str = joinedArr;
console.log(`                 ${prepareString(str)}`);


/*
in script.js you have function called prepareString. 
This function should take a string as a parameter, 
and return it with only the first letter capitalized.
Example output:
'europe' => 'Europe'
'BERLIN' => 'Berlin'
'aSIa' => 'Asia'
*/
//  let strUpperCase = args.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase());
//     console.log(`                 ${strUpperCase.join(" ")}`);
