// copying of files in node js

fs = require('node:fs')
zlib = require('node:zlib')

readableStream = fs.createReadStream('./new.txt' , {encoding:'utf-8' , highWaterMark :1})

writableStream = fs.createWriteStream('./patna.txt')

readableStream.on("data" , (chunk) =>
{
    console.log(chunk)
    writableStream.write(chunk)
})

//copy the data with the help of pipe
readableStream.pipe(writableStream)
