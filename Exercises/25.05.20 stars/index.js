//console.log(process.argv);
const args = process.argv.slice(3);
const stars = process.argv.slice(2);
let starsNoArg = "**********";
// stars.forEach((item, i) => {
// console.log(`${i}:${item}`);   
// });
let starsPrint = "*".repeat(stars[0]);
if (args == "" || stars == "") {
  console.log(`${starsNoArg} \n Hi  \n${starsNoArg}`);
} else console.log(`${starsPrint}\n${args} \n${starsPrint}`);
//console.log(`${args}`);
