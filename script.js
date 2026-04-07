// ============================================
// ЛАБОРАТОРНАЯ РАБОТА №8
// Массивы и объекты в JavaScript
// ============================================

console.log("=========================================");
console.log("Лабораторная работа №8");
console.log("Массивы и объекты");
console.log("=========================================");

// ========== ЗАДАНИЕ 1 ==========
let numbers = [10, 20, 30, 40, 50];
console.log("Задание 1 - Массив чисел:", numbers);

// ========== ЗАДАНИЕ 2 ==========
numbers.push(60);
console.log("Задание 2 - Массив после добавления:", numbers);

// ========== ЗАДАНИЕ 3 ==========
console.log("Задание 3 - Перебор массива:");
for (let i = 0; i < numbers.length; i++) {
    console.log("  Элемент " + i + ":", numbers[i]);
}

// ========== ЗАДАНИЕ 4 ==========
let user = {
    name: "Анна",
    age: 22,
    city: "Москва"
};
console.log("Задание 4 - Объект пользователь:", user);

// ========== ЗАДАНИЕ 5 ==========
let users = [
    { name: "Анна", age: 22, city: "Москва" },
    { name: "Максим", age: 28, city: "Санкт-Петербург" },
    { name: "Елена", age: 25, city: "Казань" }
];
console.log("Задание 5 - Массив пользователей:", users);

// ========== ЗАДАНИЕ 6 ==========
function displayUsers() {
    let userList = document.getElementById("userList");
    userList.innerHTML = "";
    
    for (let i = 0; i < users.length; i++) {
        userList.innerHTML += "<li>" + users[i].name + ", " + users[i].age + " лет, " + users[i].city + "</li>";
    }
    
    console.log("Задание 6 - Список пользователей обновлён");
}

displayUsers();

// ========== ЗАДАНИЕ 7 ==========
let addUserBtn = document.getElementById("addUserBtn");

addUserBtn.onclick = function() {
    let newName = document.getElementById("newName").value;
    let newAge = document.getElementById("newAge").value;
    let newCity = document.getElementById("newCity").value;
    
    if (newName === "" || newAge === "" || newCity === "") {
        alert("Заполните все поля!");
        console.log("Задание 7 - Ошибка: не все поля заполнены");
        return;
    }
    
    let newUser = {
        name: newName,
        age: Number(newAge),
        city: newCity
    };
    
    users.push(newUser);
    console.log("Задание 7 - Добавлен пользователь:", newUser);
    
    displayUsers();
    
    document.getElementById("newName").value = "";
    document.getElementById("newAge").value = "";
    document.getElementById("newCity").value = "";
    
    alert("Пользователь добавлен!");
};

console.log("=========================================");
console.log("Все задания выполнены");
console.log("=========================================");