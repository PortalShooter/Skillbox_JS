'use strict'
let a = 13.890123
let b = 2.891564
let n = 3

let aN = a - Math.floor(a)
let bN = b - Math.floor(b)

console.log(Math.floor(aN * Math.pow(10, n)))
console.log(Math.floor(bN * Math.pow(10, n)))