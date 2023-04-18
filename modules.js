// console.log(arguments)
//console.log(require('module').wrapper)

//two ways of requiring dev imports
//1
const firstmodule = require('./firstModule')
const {add} = require('./secondModule')

console.log(firstmodule(1,4))

//2
console.log(add(1,4))