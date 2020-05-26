//Assignment : add the function to calculate the median number:

const fs = require("fs");
const args = process.argv.slice(2);

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
function mid(numArray) {
  let sortedArr = numArray.sort((a,b) => a-b); //here we sort the array
  console.log(sortedArr);
  let half = Math.floor(sortedArr.length / 2);//here we split the array in 2
  if (sortedArr.length % 2) {
    return sortedArr[half]; //here is the last array with the index of the length of the first half
  } else return (sortedArr[half - 1] + sortedArr[half]) / 2; // last num of the first half + first num of
  //the second half all divided by 2
}

const [operation, ...rest] = args;

const numbers = rest.map(parseNum);
// user enters 3 5 6 ...
// avg 45 6 67

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "mid":
    console.log(mid(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  default:
    console.log("I cannot process yet ");
}
