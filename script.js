"use strict"

let math = prompt('Введіть, будь ласка, одну з представлених дій: add, sub, mul, div');
let firstNumber = Number(prompt('Введіть перше число'));
let secondNumber = Number(prompt('Введіть друге число'));
switch (math) {
    case 'add':
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
    case 'sub':
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
    case 'mul':
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
    case 'div':
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
    default:
        alert('Неможливо здійснити математичні дії. Користувачем введені не коректні дані.');
}