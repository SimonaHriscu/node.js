// const print = require('./stars');
const fs = require ('fs');
const args = process.argv.slice(2);
//print(args[0],args[1]);
function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry,${arg} is not a number. Please try again.`);
    process.exit();
  }
  return number;
}

function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0); ///0 is a starting point for accumulator
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}

//const [operation, ...rest] = args;

//const numbers = rest.map(parseNum);
//user enters 3 5 6 ...
//avg 45 6 67

// switch (operation) {
//   case "sum":
//     console.log(sum(numbers));
//     break;
//   case "mid":
//     // console.log(sum(numbers));
//     break;
//   case "avg":
//     console.log(avg(numbers));
//     break;
//   default:
//     console.log("I cannot process yet ");
// }


fs.writeFile('new.txt', 'THis is text done by NodeJS \u1F63C', (err) =>{  //this is asynchronous
    if (err) throw err;
    console.log('Done \u2714');   
});

fs.appendFile("new2.txt", 'Second file with NodeJS 🐈', (err) =>{  //this is asynchronous
    if (err) throw err;
    console.log('Done \u2714');   
});

fs.readFile("./longText.txt", 'utf8', function (err, data) {  //this is asynchronous
    if (err) throw err;
    console.log(data);   
});

///Rename file

// fs.rename("./hello.txt", "./Hola.txt", (err) =>{
//     if (err) throw err;
//     console.log('Done \u2714'); 
// })

fs.unlink("./Hola.txt", (err) =>{ // to remove
    if (err) {
    console.log(err); 
    return;
    }
});