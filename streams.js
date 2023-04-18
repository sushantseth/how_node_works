const server = require('http').createServer()
const fs = require('fs')

server.on('request',(req,res)=>{
    const readable = fs.createReadStream('./textFile.txt')

    // process 1
    // readable.on('data', chunk => {
    //     res.write(chunk)
    // })
    // readable.on('end', ()=> {
    //     res.end()
    // })

    //process 2
    //pipe is used to handle the problem of backpressure by controlling the speed of data coming in and the speed of data coming out
    readable.pipe(res)
})

server.listen('8080','127.0.0.1',()=>{
    console.log("listening...")
})
