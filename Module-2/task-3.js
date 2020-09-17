'use strict'
let n = 100;
let m = -5;

let u = Math.max(n , m)
let d = Math.min(n , m)

let pN = Math.round(Math.random() * (u - d) + d)

if(pN % 2 != 0 && pN >= d){
    console.log(pN)
}

