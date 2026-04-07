// ============================================
// ПРАЗДНИЧНОЕ АГЕНТСТВО «ПраздникPRO»
// Объединение лабораторных работ №1,4,5,6,7,8,9 + ИТОГОВОЕ ЗАДАНИЕ
// ============================================

console.log("ПраздникPRO - Сайт праздничного агентства загружен");

// ========== ЛАБА №4: КАЛЬКУЛЯТОР ==========
function runCalculator() {
    let input1 = prompt("Введите стоимость мероприятия:");
    let input2 = prompt("Введите стоимость дополнительных услуг:");
    let numA = Number(input1);
    let numB = Number(input2);
    if (isNaN(numA) || isNaN(numB)) {
        alert("Пожалуйста, введите числа!");
    } else {
        alert("Общий бюджет праздника: " + (numA + numB) + " ₽");
        console.log("Калькулятор:", numA, "+", numB, "=", numA + numB);
    }
}

let calculatorBtn = document.getElementById("calculatorBtn");
if (calculatorBtn) {
    calculatorBtn.onclick = runCalculator;
}

// ========== ЛАБА №5: СЧЁТЧИК КЛИКОВ ==========
let count = 0;
let counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");
let resetBtn = document.getElementById("resetBtn");

if (incrementBtn && resetBtn && counterValue) {
    incrementBtn.onclick = function() {
        count++;
        counterValue.textContent = count;
        console.log("Счётчик клиентов:", count);
    };
    resetBtn.onclick = function() {
        count = 0;
        counterValue.textContent = count;
        console.log("Счётчик сброшен");
    };
}

// ========== ЛАБА №5: СМЕНА ФОНА ==========
let changeColorBtn = document.getElementById("changeColorBtn");
if (changeColorBtn) {
    changeColorBtn.onclick = function() {
        let colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#ff9999"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        console.log("Цвет фона изменён на", randomColor);
    };
}

// ========== ЛАБА №6: ТЁМНАЯ ТЕМА ==========
let themeToggleBtn = document.getElementById("themeToggleBtn");
if (themeToggleBtn) {
    themeToggleBtn.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            themeToggleBtn.textContent = "☀️ Светлая тема";
            console.log("Включена тёмная тема");
        } else {
            themeToggleBtn.textContent = "🌙 Тёмная тема";
            console.log("Включена светлая тема");
        }
    };
}

// ========== ЛАБА №6: ИЗМЕНЕНИЕ ЗАГОЛОВКА ==========
let title = document.querySelector("header h1");
let changeTitleBtn = document.getElementById("changeTitleBtn");
if (changeTitleBtn && title) {
    changeTitleBtn.onclick = function() {
        title.innerHTML = "🎉 ПраздникPRO - Ваше счастье в наших руках 🎈";
        console.log("Заголовок изменён");
    };
}

// ========== ЛАБА №6: СКРЫТЬ/ПОКАЗАТЬ БЛОК ==========
let myBlock = document.getElementById("myBlock");
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");

if (hideBtn && showBtn && myBlock) {
    hideBtn.onclick = function() {
        myBlock.style.display = "none";
        console.log("Блок со спецпредложением скрыт");
    };
    showBtn.onclick = function() {
        myBlock.style.display = "block";
        console.log("Блок со спецпредложением показан");
    };
}

// ========== ЛАБА №7: РЕГИСТРАЦИЯ / ЗАЯВКА ==========
let regForm = document.getElementById("registrationForm");
let regSuccessMessage = document.getElementById("regSuccessMessage");

if (regForm) {
    regForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("regName").value.trim();
        let email = document.getElementById("regEmail").value.trim();
        let password = document.getElementById("regPassword").value;
        
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");
        
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        regSuccessMessage.textContent = "";
        
        let isValid = true;
        
        if (name === "") {
            nameError.textContent = "Введите имя";
            isValid = false;
        } else if (name.length < 3) {
            nameError.textContent = "Имя должно быть не менее 3 символов";
            isValid = false;
        }
        
        if (email === "") {
            emailError.textContent = "Введите email";
            isValid = false;
        } else if (!email.includes("@")) {
            emailError.textContent = "Email должен содержать символ @";
            isValid = false;
        }
        
        if (password === "") {
            passwordError.textContent = "Введите пароль";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Пароль должен быть не менее 6 символов";
            isValid = false;
        }
        
        if (isValid) {
            regSuccessMessage.textContent = "Заявка отправлена! Менеджер свяжется с вами.";
            regSuccessMessage.className = "success";
            regForm.reset();
            console.log("Новая заявка:", { name, email });
        }
    });
}

// ========== ЛАБА №8: ПОЛЬЗОВАТЕЛИ ==========
let users = [
    { name: "Анна Смирнова", age: 22, city: "Москва" },
    { name: "Максим Иванов", age: 28, city: "Санкт-Петербург" },
    { name: "Елена Петрова", age: 25, city: "Казань" }
];

function displayUsers() {
    let userList = document.getElementById("userList");
    if (!userList) return;
    userList.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        userList.innerHTML += "<li class='user-item'>👤 " + users[i].name + ", " + users[i].age + " лет, " + users[i].city + "</li>";
    }
    console.log("Список клиентов обновлён");
}

displayUsers();

let addUserBtn = document.getElementById("addUserBtn");
if (addUserBtn) {
    addUserBtn.onclick = function() {
        let newName = document.getElementById("newName").value;
        let newAge = document.getElementById("newAge").value;
        let newCity = document.getElementById("newCity").value;
        
        if (newName === "" || newAge === "" || newCity === "") {
            alert("Заполните все поля!");
            return;
        }
        
        let newUser = {
            name: newName,
            age: Number(newAge),
            city: newCity
        };
        
        users.push(newUser);
        displayUsers();
        
        document.getElementById("newName").value = "";
        document.getElementById("newAge").value = "";
        document.getElementById("newCity").value = "";
        
        console.log("Добавлен клиент:", newUser);
        alert("Клиент добавлен!");
    };
}

// ========== ЛАБА №9: СПИСОК ЗАДАЧ ==========
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

function createTaskItem(taskText) {
    let li = document.createElement("li");
    li.className = "task-item";
    
    let span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";
    
    deleteBtn.onclick = function() {
        li.remove();
        console.log("Удалена задача:", taskText);
        if (taskList.children.length === 0) {
            showEmptyTaskMessage();
        }
    };
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    return li;
}

function showEmptyTaskMessage() {
    if (taskList.children.length === 0) {
        let emptyLi = document.createElement("li");
        emptyLi.className = "task-item";
        emptyLi.textContent = "📋 Нет активных задач. Добавьте новую!";
        emptyLi.style.textAlign = "center";
        emptyLi.style.justifyContent = "center";
        emptyLi.style.color = "#999";
        emptyLi.id = "emptyTaskMessage";
        taskList.appendChild(emptyLi);
    }
}

function removeEmptyTaskMessage() {
    let emptyMessage = document.getElementById("emptyTaskMessage");
    if (emptyMessage) {
        emptyMessage.remove();
    }
}

showEmptyTaskMessage();

if (addTaskBtn && taskInput && taskList) {
    addTaskBtn.onclick = function() {
        let taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Введите задачу!");
            return;
        }
        
        removeEmptyTaskMessage();
        let newTask = createTaskItem(taskText);
        taskList.appendChild(newTask);
        
        console.log("Добавлена задача:", taskText);
        taskInput.value = "";
    };
    
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
}

// ========== ИТОГОВОЕ ЗАДАНИЕ: МЕНЕДЖЕР ЗАМЕТОК ==========
let notes = []; // Массив для хранения заметок
let nextId = 1; // Следующий ID для новой заметки

// Получаем элементы
let noteInput = document.getElementById("noteInput");
let addNoteBtn = document.getElementById("addNoteBtn");
let noteList = document.getElementById("noteList");
let noteError = document.getElementById("noteError");

// Функция отображения заметок (перерисовка списка)
function displayNotes() {
    if (!noteList) return;
    noteList.innerHTML = "";
    
    if (notes.length === 0) {
        let emptyLi = document.createElement("li");
        emptyLi.className = "note-item";
        emptyLi.textContent = "📭 Нет заметок. Добавьте первую!";
        emptyLi.style.textAlign = "center";
        emptyLi.style.justifyContent = "center";
        emptyLi.style.color = "#999";
        noteList.appendChild(emptyLi);
        return;
    }
    
    for (let i = 0; i < notes.length; i++) {
        let li = document.createElement("li");
        li.className = "note-item";
        
        let span = document.createElement("span");
        span.textContent = notes[i].text;
        span.className = "note-text";
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.className = "delete-btn";
        
        // Создаём замыкание с текущим ID
        deleteBtn.onclick = (function(id) {
            return function() {
                deleteNoteById(id);
            };
        })(notes[i].id);
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        noteList.appendChild(li);
    }
    
    console.log("Список заметок обновлён, всего заметок:", notes.length);
}

// Функция удаления заметки по ID
function deleteNoteById(id) {
    // Находим индекс заметки в массиве
    let index = notes.findIndex(function(note) {
        return note.id === id;
    });
    
    if (index !== -1) {
        let deletedText = notes[index].text;
        notes.splice(index, 1); // Удаляем из массива
        displayNotes(); // Перерисовываем список
        console.log("Удалена заметка:", deletedText);
    }
}

// Функция добавления заметки
function addNote() {
    // Очищаем предыдущую ошибку
    noteError.textContent = "";
    
    // Получаем текст и убираем пробелы
    let noteText = noteInput.value.trim();
    
    // Проверка 1: пустая строка
    if (noteText === "") {
        noteError.textContent = "Введите текст заметки!";
        console.log("Ошибка: попытка добавить пустую заметку");
        return;
    }
    
    // Проверка 2: минимальная длина 3 символа
    if (noteText.length < 3) {
        noteError.textContent = "Заметка должна содержать не менее 3 символов!";
        console.log("Ошибка: заметка слишком короткая");
        return;
    }
    
    // Создаём объект заметки
    let newNote = {
        id: nextId,
        text: noteText
    };
    
    // Добавляем в массив
    notes.push(newNote);
    nextId++;
    
    // Очищаем поле ввода
    noteInput.value = "";
    
    // Перерисовываем список
    displayNotes();
    
    console.log("Добавлена заметка:", noteText);
}

// Добавляем обработчик на кнопку
if (addNoteBtn) {
    addNoteBtn.onclick = addNote;
}

// Добавляем обработчик на Enter в поле ввода
if (noteInput) {
    noteInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addNote();
        }
    });
}

// Инициализируем пустой список заметок
displayNotes();

console.log("=========================================");
console.log("✅ Сайт праздничного агентства полностью загружен");
console.log("📌 Итоговое задание: Менеджер заметок");
console.log("   - Добавление заметок (мин. 3 символа)");
console.log("   - Удаление заметок");
console.log("   - Проверка на пустые строки");
console.log("=========================================");