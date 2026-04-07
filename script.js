// ============================================
// ЛАБОРАТОРНАЯ РАБОТА №7
// Работа с формами и валидация данных
// ============================================

let form = document.getElementById("registrationForm");
let successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
    // Задание 2: Отменяем стандартную отправку формы
    event.preventDefault();
    
    // Задание 2: Получаем значения всех полей
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    // Убираем лишние пробелы
    name = name.trim();
    email = email.trim();
    password = password.trim();
    
    // Получаем элементы для вывода ошибок
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    
    // Очищаем старые сообщения об ошибках
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";
    
    let isValid = true;
    
    // Задание 3 и 4: Проверка имени (не менее 3 символов)
    if (name === "") {
        nameError.textContent = "Имя обязательно для заполнения";
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Имя должно содержать не менее 3 символов";
        isValid = false;
    }
    
    // Задание 3 и 4: Проверка email (содержит @)
    if (email === "") {
        emailError.textContent = "Email обязателен для заполнения";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Введите корректный email (с символом @)";
        isValid = false;
    }
    
    // Задание 3 и 4: Проверка пароля (не менее 6 символов)
    if (password === "") {
        passwordError.textContent = "Пароль обязателен для заполнения";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Пароль должен содержать не менее 6 символов";
        isValid = false;
    }
    
    // Задание 5 и 6: Если все данные корректны
    if (isValid) {
        successMessage.textContent = "Регистрация успешна!";
        successMessage.className = "success";
        
        // Задание 6: Очищаем форму после успешной проверки
        form.reset();
    }
});