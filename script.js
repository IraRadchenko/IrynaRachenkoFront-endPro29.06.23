"use strict"

let str = prompt('введіть, будь ласка, декілька чисел через пробіл');
let arr = str.split( ' ' );

alert(arr);

arr.sort( ( a, b) => a - b );
alert(arr);

arr.splice(1, 3);
alert(arr);