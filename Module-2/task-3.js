'use strict'
let n = -3;
let m = -10;

if (n < 0 && m < 0){
    let rN = Math.round(Math.random() * -Math.max(Math.abs(m) , Math.abs(n)))
    if(rN % 2 != 0 && rN >= -Math.min(Math.abs(m) , Math.abs(n))) {
        console.log(rN)
    }
}
else{
    let rN = Math.round(Math.random() * Math.max(m , n))
    if(rN % 2 != 0 && rN >= Math.min(m , n)) {
    console.log(rN)
    }
}


