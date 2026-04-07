// ============================================
// ЛАБОРАТОРНАЯ РАБОТА №9
// Динамическое создание и удаление элементов
// ============================================

console.log("=========================================");
console.log("Лабораторная работа №9");
console.log("Динамическое создание и удаление элементов");
console.log("=========================================");

// Получаем элементы со страницы
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

// ========== ЗАДАНИЯ 1, 3: Создание элемента с кнопкой удаления ==========
// Функция для создания нового элемента задачи
function createTaskItem(taskText) {
    // Создаём элемент списка
    let li = document.createElement("li");
    
    // Создаём span для текста задачи
    let span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";
    
    // Создаём кнопку удаления (задание 3)
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";
    
    // Задание 4: Удаление элемента при нажатии на кнопку
    deleteBtn.onclick = function() {
        li.remove();
        console.log("Удалена задача:", taskText);
        
        // Если список стал пустым, показываем сообщение
        if (taskList.children.length === 0) {
            showEmptyMessage();
        }
    };
    
    // Собираем элемент
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    return li;
}

// Функция для отображения сообщения о пустом списке
function showEmptyMessage() {
    if (taskList.children.length === 0) {
        let emptyLi = document.createElement("li");
        emptyLi.textContent = "Список задач пуст";
        emptyLi.style.textAlign = "center";
        emptyLi.style.color = "#999";
        emptyLi.style.justifyContent = "center";
        emptyLi.id = "emptyMessage";
        taskList.appendChild(emptyLi);
    }
}

// Функция для удаления сообщения о пустом списке
function removeEmptyMessage() {
    let emptyMessage = document.getElementById("emptyMessage");
    if (emptyMessage) {
        emptyMessage.remove();
    }
}

// Показываем начальное сообщение, если список пуст
showEmptyMessage();

// ========== ЗАДАНИЕ 2: Добавление задачи при нажатии кнопки ==========
addTaskBtn.onclick = function() {
    // Задание 5: Запрет добавления пустых значений
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Введите задачу!");
        console.log("Ошибка: попытка добавить пустую задачу");
        return;
    }
    
    // Удаляем сообщение о пустом списке, если оно есть
    removeEmptyMessage();
    
    // Создаём новую задачу
    let newTask = createTaskItem(taskText);
    
    // Добавляем в список
    taskList.appendChild(newTask);
    
    console.log("Добавлена задача:", taskText);
    
    // Очищаем поле ввода
    taskInput.value = "";
};

// Добавление задачи по нажатию клавиши Enter
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTaskBtn.click();
    }
});

console.log("=========================================");
console.log("✅ Все задания выполнены!");
console.log("📌 Функционал:");
console.log("   - Добавление задачи в список");
console.log("   - Удаление задачи кнопкой");
console.log("   - Защита от пустых значений");
console.log("   - Добавление по Enter");
console.log("=========================================");