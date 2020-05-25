// Create a program that prints headers to the terminal, this program should accept 2 arguments the first argument should be
// the number of stars to print before and after the header. The second argument should be the word to print inside the header.
// If no stars or no header are passed to the function, the function should print out 10 stars and the word Hey to the
// console by default.

const args = process.argv.slice(2);
// args.forEach((item, i) => {
//     console.log(`${i}:${item}`);
//     });
let starsArg = args[0];
let wordArg = args[1];

const print = (stars = 10, word = "Hi") => {
  if (starsArg == undefined || wordArg == undefined) {
    starsDefault = "*".repeat(stars);
    wordDefault = word;
    return `${starsDefault} \n${wordDefault} \n${starsDefault}`;
  } else {
    starsPrint = "*".repeat(starsArg);
    wordPrint = wordArg;
    return `${starsPrint}\n${wordPrint} \n${starsPrint}`;
  }
};
//console.log(print());


//---------------------!!!!-------------------
// Checking for Undefined Parameters
// Even if you explicitly pass undefined as the parameter value when calling the function, the parameter value will be 
// set to the default value.

// function foo(num1 =9) {
//     console.log(num1);
// }
// foo(undefined);
// In the code above, you are passing undefined as the value of num1; therefore, the value of num1 will set to default value 9.




///<<<<<<<<<<<<Basic Version>>>>>>>>>>>>

// console.log(process.argv);
// const args = process.argv.slice(3);
// const stars = process.argv.slice(2);

// let starsNoArg = "**********";

// stars.forEach((item, i) => {
// console.log(`${i}:${item}`);
// });

// let starsPrint = "*".repeat(stars[0]);

// if (args == "" || stars == "") {
//   console.log(`${starsNoArg} \n Hi  \n${starsNoArg}`);
// } else console.log(`${starsPrint}\n${args} \n${starsPrint}`);
