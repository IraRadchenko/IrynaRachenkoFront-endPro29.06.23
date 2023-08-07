"use strict";

function makeAdder(a) {
  let startNumber = 0;
  return function (b) {
    return (startNumber += b);
  };
}

let sum = makeAdder();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
