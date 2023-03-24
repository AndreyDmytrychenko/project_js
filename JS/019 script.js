"use strict";

let obj = {
    a: 2,
    b: 4,
    c: 7,
    d: {
        s: 5,
        c: 7
    } 
}

let copy = Object.assign({}, obj);

copy.a = 4;
copy.d.s = 19;

console.log(copy);
console.log(obj);