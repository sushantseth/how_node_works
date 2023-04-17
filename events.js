const event = require('events')
const http = require('http')
const eventEmmiter = new event.EventEmitter()

//oberver that observes the event and has a callback function
eventEmmiter.on('newSale',(stock)=>{
    console.log("new sale done of value : ",stock)
})

//object that emits the events
eventEmmiter.emit("newSale",10)


//////////////////////////////////////////////////////////////////////////////

//created server
const server  = http.createServer()


//created server 'request' event listener
server.on('request',(req,res)=>{
    console.log('request received')
    res.end("request received")
})


//server start
server.listen('8080', '127.0.0.1',()=>{
    console.log("server started")
})