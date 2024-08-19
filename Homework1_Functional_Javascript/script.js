"use strict";

// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];

function getMin(array) {
    return Math.min(...array);
}

console.log(getMin(arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.


function createCounter(initValue) {
    function increment() {
        return initValue += 1;
    }
    function decrement() {
        return initValue -= 1;
    }
    function showInitValue() {
        return initValue;
    }
    return { increment, decrement, showInitValue };
}

const myCounter = createCounter(5);

myCounter.increment();
myCounter.increment();
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.showInitValue());



// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);



