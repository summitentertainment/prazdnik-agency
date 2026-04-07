// ============================================
// ЛАБОРАТОРНАЯ РАБОТА №6
// Работа с DOM в JavaScript
// ============================================

// ========== ЗАДАНИЕ 2 ==========
let title = document.querySelector("#mainTitle");
let changeTitleBtn = document.getElementById("changeTitleBtn");

if (changeTitleBtn && title) {
    changeTitleBtn.onclick = function() {
        title.textContent = "Новый заголовок";
    };
}

// ========== ЗАДАНИЕ 3 ==========
let paragraph = document.querySelector("#mainParagraph");
let changeParagraphColorBtn = document.getElementById("changeParagraphColorBtn");

if (changeParagraphColorBtn && paragraph) {
    changeParagraphColorBtn.onclick = function() {
        paragraph.style.color = "#e94560";
        paragraph.style.fontWeight = "bold";
    };
}

// ========== ЗАДАНИЕ 4 ==========
let myBlock = document.querySelector("#myBlock");
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");

if (hideBtn && showBtn && myBlock) {
    hideBtn.onclick = function() {
        myBlock.style.display = "none";
    };
    
    showBtn.onclick = function() {
        myBlock.style.display = "block";
    };
}

// ========== ЗАДАНИЕ 5 ==========
let coloredBlock = document.querySelector("#coloredBlock");
let addClassBtn = document.getElementById("addClassBtn");

if (addClassBtn && coloredBlock) {
    addClassBtn.onclick = function() {
        coloredBlock.classList.add("highlight");
    };
}

// ========== ЗАДАНИЕ 6 ==========
let themeToggleBtn = document.getElementById("themeToggleBtn");

if (themeToggleBtn) {
    themeToggleBtn.onclick = function() {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            themeToggleBtn.textContent = "Светлая тема";
        } else {
            themeToggleBtn.textContent = "Тёмная тема";
        }
    };
}