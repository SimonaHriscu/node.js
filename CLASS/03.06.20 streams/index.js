const fs = require("fs");

//Streams
let writer = fs
  .createWriteStream("newBigTest.txt", { flags: "w" })
  .on("error", (er) => {
    console.log(er);
  })
  .on("open", function (fileData) {
    console.log("file is open");
    console.log(`file data : ${fileData}`);
  });
writer.write("Hi this is new file done by Nodejs");

///Pipes
let newWriter = fs.createWriteStream("newText.txt", { flags: "w" });
newWriter.on("pipe", () => {
  console.log("cool something is piped in");
});

let reader = fs.createReadStream("newText.txt").pipe(newWriter); //we can only use pipe from a readable stream to a writable stream ;
