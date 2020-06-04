const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();

const args = process.argv.slice(2);
if (args[0] === undefined) {
  //Reading the file
  const myReadStream = fs.createReadStream("input.txt", "utf-8");
  const myWriteStream = fs.createWriteStream("input.txt.gz");

  myReadStream.on("error", (err) => {
    console.log(err);
  });

  //with PIPE from a readable stream.
  // myReadStream.pipe(myWriteStream);

  // with zlib and pipe
  myReadStream.pipe(gzip).pipe(myWriteStream);
  console.log("File compressed");
} else if (args[0]) {
  let arrArgs = args[0].split("/");
  directoryName = `./${arrArgs[1]}/`;
  fileName = `./${arrArgs[1]}/${arrArgs[2]}`;

  fs.mkdir(directoryName, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("New directory successfully created.");
    }
  });

  fs.writeFile(fileName, "Second file with NodeJS 🐈", function (err) {
    //this is asynchronous
    if (err) {
      console.log(err);
    } else {
      console.log("Done \u2714");
    }
  });

  const myReadStreamArg = fs.createReadStream(`${fileName}`, "utf-8");
  const myWriteStreamArg = fs.createWriteStream(`${fileName}.gz`);

  myReadStreamArg.on("error", (err) => {
    console.log(err);
  });

  myReadStreamArg.pipe(gzip).pipe(myWriteStreamArg);
  console.log("File from argument compressed");
}


//version 2

// const fs = require("fs");
// const zlib = require("zlib");
// const path = require("path");

// //console.log(__dirname);

// const [filePath = path.join(__dirname, "input.txt")] = process.argv.slice(2); // ['index.txt','Hi','cool']

// const stream = fs
//   .createReadStream(filePath)
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream(filePath + ".gz"));

// stream.on("close", () => console.log("Done 👍🏻"));