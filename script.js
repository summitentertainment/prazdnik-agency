// ============================================
// ЛАБОРАТОРНАЯ РАБОТА №5
// События и обработчики событий в JavaScript
// ============================================

console.log("=========================================");
console.log("Лабораторная работа №5");
console.log("События и обработчики событий");
console.log("=========================================");

// ========== ЗАДАНИЯ 1-2 ==========
// Кнопка «Нажми меня» с выводом alert

let alertButton = document.getElementById("alertBtn");
if (alertButton) {
    alertButton.onclick = function() {
        alert("Привет! Вы нажали на кнопку!");
        console.log("Задания 1-2: Нажата кнопка с alert");
    };
}

// ========== ЗАДАНИЕ 3 ==========
// Изменение текста заголовка h1

let title = document.getElementById("mainTitle");
let changeTextBtn = document.getElementById("changeTextBtn");

if (changeTextBtn && title) {
    changeTextBtn.onclick = function() {
        title.textContent = "Новый заголовок! Текст изменён!";
        console.log("Задание 3: Заголовок изменён на:", title.textContent);
    };
}

// ========== ЗАДАНИЕ 4 ==========
// Изменение цвета фона страницы

let changeColorBtn = document.getElementById("changeColorBtn");

if (changeColorBtn) {
    changeColorBtn.onclick = function() {
        let colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dfe6e9", "#e74c3c", "#3498db"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        console.log("Задание 4: Цвет фона изменён на", randomColor);
    };
}

// ========== ЗАДАНИЕ 5 ==========
// Счётчик кликов

let count = 0;
let counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");
let resetBtn = document.getElementById("resetBtn");

if (incrementBtn && resetBtn && counterValue) {
    incrementBtn.onclick = function() {
        count++;
        counterValue.textContent = count;
        console.log("Задание 5: Счётчик =", count);
    };
    
    resetBtn.onclick = function() {
        count = 0;
        counterValue.textContent = count;
        console.log("Задание 5: Счётчик сброшен на 0");
    };
}

// ========== ЗАДАНИЕ 6 ==========
// Форма с отменой отправки и выводом в консоль

let form = document.getElementById("myForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Отменяем стандартную перезагрузку страницы
        
        let inputField = document.getElementById("userInput");
        let userText = inputField.value;
        
        if (userText === "") {
            console.log("Задание 6: Пользователь отправил пустую форму");
            alert("Пожалуйста, введите текст!");
        } else {
            console.log("Задание 6: Введённый текст —", userText);
            alert("Текст отправлен! Смотрите консоль (F12)");
            inputField.value = ""; // Очищаем поле
        }
    });
}

console.log("=========================================");
console.log("✅ Все обработчики событий загружены!");
console.log("📌 Попробуйте:");
console.log("   - Нажать кнопки");
console.log("   - Изменить заголовок");
console.log("   - Сменить цвет фона");
console.log("   - Поработать со счётчиком");
console.log("   - Отправить форму");
console.log("=========================================");