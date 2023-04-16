const fs = require("fs")
const crypto = require("crypto")
setTimeout(()=> console.log("1st timer with 0 seconds"),0)

setImmediate(()=> console.log("setImmediate CB"))
const currentDate =  Date.now()
process.env.UV_THREADPOOL_SIZE = 4


fs.readFile("./textFile.txt","utf-8",(err,data)=>{
    if(err) return console.log("err : ",err)
    console.log("I/O polling")
    setTimeout(()=> console.log("2st timer inside callback of i/o"),0)
    setTimeout(()=> console.log("3rd timer inside callback with 2 sec of i/o"),2000)
    setImmediate(()=> console.log("setImmediate CB inside i/o"))

    process.nextTick(()=> console.log("process.nextTick cb"))

    crypto.pbkdf2Sync('password','salt',10000,1024,'sha512')
    console.log("cryptoSync done ")

    crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
        console.log(Date.now() - currentDate,"crypto done")
    })
    crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
        console.log(Date.now() - currentDate,"crypto done")
    })
    crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
        console.log(Date.now() - currentDate,"crypto done")
    })
    crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
        console.log(Date.now() - currentDate,"crypto done")
    })

    console.log("-----------------------------------------")

})