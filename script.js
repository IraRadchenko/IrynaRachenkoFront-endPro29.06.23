"use strict"
//Дано масив
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1.Знайти суму та кількість позитивних елементів.
let arrPosit = arr.filter(el => el > 0);
let summ = 0;

arrPosit.forEach(item => summ += item);

alert(`Сума позитивних елементів масиву = ${summ}
Кількість позитивних елементів масиву = ${arrPosit.length}`);


//2.Знайти мінімальний елемент масиву та його порядковий номер.
let minNumber = arr[0];
let indexOfMinNumber = 0;
arr.forEach((el, index) => { if (minNumber > el) {minNumber = el;
        indexOfMinNumber = index + 1}
    }
);

alert(`мінімальний елемент масиву ${minNumber}
порядковий номер найменшого елементу  ${indexOfMinNumber}`);


//3.Знайти максимальний елемент масиву та його порядковий номер.
let maxNumber = arr[0];
let indexOfMaxNumber = 0;
arr.forEach((el, index) => { if (maxNumber < el) {maxNumber = el;
        indexOfMaxNumber = index}
    }
);

alert(`максимальний елемент масиву ${maxNumber}
порядковий номер найбільшого елементу  ${indexOfMaxNumber}`);


//4.Визначити кількість негативних елементів.
let arrNeg = arr.filter(em => em < 0);

alert(`Кількість негативних елементів масиву = ${arrNeg.length}`);


//5.Знайти кількість непарних позитивних елементів.
let arrPosit5 = arr.filter(el => el > 0 && el % 2 !== 0);
//let arrPositNPar = arrPosit5.filter(el => el % 2 !== 0);

alert(`Кількість непарних позитивних елементів масиву = ${arrPosit5.length}`);


//6.Знайти кількість парних позитивних елементів.
let arrPosit6 = arr.filter(el => el > 0 && el % 2 === 0);

alert(`Кількість парних позитивних елементів масиву = ${arrPosit6.length}`);


//7.Знайти суму парних позитивних елементів.
let arrPosit7 = arr.filter(el => el > 0 && el % 2 === 0);
let summPositPar = 0;
arrPosit7.forEach(item => summPositPar += item);

alert(`сума парних позитивних елементів масиву = ${summPositPar}`);


//8.Знайти суму непарних позитивних елементів.
let arrPosit8 = arr.filter(el => el > 0 && el % 2 !== 0);
let summPositNPar = 0;
arrPosit8.forEach(item => summPositNPar += item);

alert(`сума непарних позитивних елементів масиву = ${summPositNPar}`);


//9.Знайти добуток позитивних елементів.
let arrPosit1 = arr.filter(el => el > 0);
let mult = 1;
arrPosit1.forEach(item => mult *= item);

alert(`Добуток позитивних елементів масиву = ${mult}`);


//10.Знайти найбільший серед елементів масиву, остальні обнулити.
let maxNumber1 = arr[0];
let indexOfMaxNumber1 = 0;
arr.forEach((el, index) =>  {if (maxNumber1 < el) {maxNumber1 = el;
    indexOfMaxNumber1 = index}});
let newArr = arr.map((em, index) =>
{if (index !== indexOfMaxNumber1 )
{return (em = 0);
}
else
{return em;
}
});

alert(`максимальний елемент масиву ${maxNumber1}
${newArr}`);