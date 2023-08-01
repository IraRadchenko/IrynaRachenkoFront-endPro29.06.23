'use strict';

//1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
let str1 = '';

for (let i = 10; i <= 20; i++) {
    if (i === 20) {
        str1 += i;
    } else {
        str1 += i + ', ';
    }
}

console.log(str1);

//2 Вивести квадрати чисел від 10 до 20.

let str2 = '';

for (let i = 10; i <= 20; i++) {
    str2 += i ** 2 + ' ';
}

console.log(str2);

//3 Вивести таблицю множення на 7.

let str3 = '';

for (let i = 1; i <= 10; i++) {
    str3 += `${i} * 7 = ${i * 7} \n`;
}

console.log(str3);

//4 Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}

console.log(sum);

//5 Знайти добуток усіх цілих чисел від 15 до 35.

let mul = 1;

for (let i = 15; i <= 35; i++) {
    mul *= i;
}

console.log(mul);

//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let summaryOfNumbers = 0;

for (let i = 1; i <= 500; i++) {
    summaryOfNumbers += i;
}

let arithmeticMean = summaryOfNumbers / 500;

console.log(arithmeticMean);

//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum2 = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}

console.log(sum2);

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let str8 = '';

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        str8 += i + ', ';
    }
}

console.log(str8);

//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let naturalNum = +prompt('Введіть будь-яке натуральне число');
let dividers = '';
let quantityOfEvenDividers = 0;
let sumOfEvenDividers = 0;

for (let i = 1; i <= naturalNum; i++) {
    if (naturalNum % i === 0) {
        dividers += i + ', ';
        //10 Визначити кількість його парних дільників.
        if (i % 2 === 0) {
            quantityOfEvenDividers++;
            //11 Знайти суму його парних дільників.
            sumOfEvenDividers += i;
        }
    }
}

alert(`дільники вашого числа ${dividers}
кількість парних дільників вашого числа = ${quantityOfEvenDividers}
сума парних дільників вашого числа = ${sumOfEvenDividers}`);

//12 Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(`${j} * ${i} = ${j * i}` + '<br>');
    }
    document.write('<br>');
}
