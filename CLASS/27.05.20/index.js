// module exports
const fs = require('fs');
const math = require('./math');
console.log(math);

let x = 5,
y = 4;
console.log(`x+y = ${math.sum(x,y)}`);
console.log(`x-y = ${math.sub(x,y)}`);
console.log(`x*y = ${math.multi(x,y)}`);

fs.copyFile('original.txt', 'copyFromText.txt', (err)=>{
    if (err) throw err;
    console.log("text copied");
});

const data = fs.readFileSync('longText.txt');
console.log(data.toString());
console.log("Done \u2714");

fs.open('new.txt', 'w', (err, data)=>{
    if (err) throw err;
    console.log(data.toString());
    console.log("doneeeeeee")
    
})

