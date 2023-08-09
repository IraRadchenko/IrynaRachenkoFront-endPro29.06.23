"use strict";
/*
Реалізуйте функцію generateKey(length, characters),
яка повертає рядок випадкових символів із
набору characters довжиною length. span>

Наприклад:
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
 */

let str = "abcdefghijklmnopqrstuvwxyz0123456789";
let length = 16;
function generateKey(length, characters) {
  let arr = str.split("");
  let randomArr = arr.sort((el) => 0.5 - Math.random());
  let key = randomArr.slice(0, length);
  return key.join("");
}
console.log(generateKey(length, str));
