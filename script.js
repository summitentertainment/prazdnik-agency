// ============================================
// ЛАБОРАТОРНАЯ РАБОТА №4
// JavaScript для сайта праздничного агентства
// ============================================

console.log("=========================================");
console.log("Лабораторная работа №4");
console.log("Сайт праздничного агентства «ПраздникPRO»");
console.log("=========================================");

// ========== ЗАДАНИЕ 2 ==========
// Создать переменную с именем пользователя и вывести её в консоль

let userName = "Анна";
console.log("Задание 2 - Имя пользователя:", userName);
console.log("Тип данных:", typeof userName);

// ========== ЗАДАНИЕ 3 ==========
// Создать две числовые переменные и вывести их сумму

let num1 = 15;
let num2 = 28;
let sum = num1 + num2;
console.log("Задание 3 - Числовые переменные:", num1, "и", num2);
console.log("Их сумма:", sum);
console.log("Тип данных num1:", typeof num1);

// ========== ЗАДАНИЕ 4 ==========
// Создать функцию приветствия, которая принимает имя и выводит сообщение в консоль

function greetUser(name) {
    console.log("Задание 4 - Приветствие: Привет, " + name + "! Добро пожаловать на сайт праздничного агентства!");
}

// Вызов функции
greetUser(userName);
greetUser("Максим");

// ========== ЗАДАНИЕ 5 ==========
// Создать функцию, которая принимает число и возвращает его квадрат

function squareNumber(num) {
    return num * num;
}

// Проверка работы функции
console.log("Задание 5 - Квадрат числа 7 =", squareNumber(7));
console.log("Квадрат числа 4 =", squareNumber(4));
console.log("Квадрат числа 10 =", squareNumber(10));

// ========== ЗАДАНИЕ 6 ==========
// Мини-задание «Калькулятор в консоли»
// Пользователь вводит два числа через prompt, программа выводит их сумму

function runCalculator() {
    console.log("\n========== КАЛЬКУЛЯТОР ==========");
    
    let input1 = prompt("Введите первое число:");
    console.log("Пользователь ввел (первое число):", input1);
    
    let input2 = prompt("Введите второе число:");
    console.log("Пользователь ввел (второе число):", input2);
    
    let numberA = Number(input1);
    let numberB = Number(input2);
    
    if (isNaN(numberA) || isNaN(numberB)) {
        console.log("Ошибка: Пожалуйста, введите корректные числа!");
        alert("Ошибка! Нужно ввести числа.");
    } else {
        let result = numberA + numberB;
        console.log("Результат сложения:", numberA, "+", numberB, "=", result);
        alert("Результат: " + numberA + " + " + numberB + " = " + result);
    }
    
    console.log("==================================\n");
}

// ========== ДОПОЛНИТЕЛЬНО ==========
// Функция для подписки (демонстрация работы с DOM)

function subscribeUser() {
    let email = document.getElementById("emailInput").value;
    if (email === "") {
        alert("Введите ваш e-mail!");
    } else {
        console.log("Подписался пользователь с email:", email);
        alert("Спасибо за подписку! " + email);
        document.getElementById("emailInput").value = "";
    }
}

// ========== ВЫВОД ТИПОВ ДАННЫХ ==========
console.log("\n========== ТИПЫ ДАННЫХ ==========");
let stringVar = "Привет мир";
let numberVar = 42;
let booleanVar = true;
console.log("stringVar =", stringVar, "-> тип:", typeof stringVar);
console.log("numberVar =", numberVar, "-> тип:", typeof numberVar);
console.log("booleanVar =", booleanVar, "-> тип:", typeof booleanVar);
console.log("=========================================");

console.log("\n✅ Сайт праздничного агентства загружен!");
console.log("📌 Нажмите кнопку «Калькулятор» на сайте, чтобы запустить задание 6");
console.log("=========================================");