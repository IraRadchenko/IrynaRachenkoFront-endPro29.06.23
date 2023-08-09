"use strict";
/*1. Дано масив з елементами різних типів.
 Створити функцію яка вираховує середнє
 арифметичне лише числових елементів даного масиву.
 */
let arr = ["k", "g", 5, 9, "g", 8];

function filterArr(arr) {
  return arr.filter((el) => typeof el === "number");
}
function calcArithmeticMean(arr) {
  let numericArr = filterArr(arr);

  let result = numericArr.reduce(function (sum, current) {
    return sum + current;
  }, 0);

  return result / numericArr.length;
}

console.log(calcArithmeticMean(arr));

/*2. Написати функцію doMath(x, znak, y),
 яка отримує 3 аргументи: числа x і y, рядок znak.
 У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
 Вивести результат математичної дії, вказаної в змінній znak.
 Обидва числа і знак виходять від користувача.
  */

let firstNumber = +prompt("введіть перше число");
let secondNumber = +prompt("введіть друге число");
let sign = prompt(
  "введіть будь-який математичний знак з представлених нижче: +, -, *, /, %, ^ (ступінь )",
);

function doMath(x, sign, y) {
  switch (sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
    case "^":
      return x ** y;
  }

  return "користувачем були введені не коректні дані";
}
console.log(doMath(firstNumber, sign, secondNumber));

/*3. Написати функцію заповнення даними користувача
 двомірного масиву. Довжину основного масиву і
 внутрішніх масивів задає користувач.
 Значення всіх елементів всіх масивів задає користувач.
 */
let lengthOfMainArr = +prompt(
  "Введіть число, яке доравнюватиме довжині основного масиву",
);
let lengthOfSubArr = +prompt(
  "Введіть число, яке доравнюватиме довжині внутрішнього масиву",
);
function createArr(lengthOfMainArr, lengthOfSubArr) {
  let arr = [];
  for (let i = 0; i < lengthOfMainArr; i++) {
    arr[i] = [];
    for (let j = 0; j < lengthOfSubArr; j++) {
      arr[i][j] = prompt("введіть елементи масиву");
    }
  }
  return arr;
}
console.log(createArr(lengthOfMainArr, lengthOfSubArr));

/*4. Створити функцію, яка прибирає з рядка всі
 символи, які ми передали другим аргументом.
 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
 Вихідний рядок та символи для видалення задає користувач.
 */
let str = "hello world";
let arr1 = ["l", "d"];

function deleteSigns(str, arr) {
  let arrayFromString = str.split("");
  let renovatedArr = arrayFromString.filter((el) => !arr.includes(el));
  return renovatedArr.join("");
}
console.log(deleteSigns(str, arr1));
