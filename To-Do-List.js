// const inputBox = document.getElementById('input-box');
// const listContainer = document.getElementById('list-container');

// function addTask() {
//     let taskText = inputBox.value.trim(); // حذف فاصله‌های اضافی از ابتدا و انتها
//     if (taskText === '') {
//         alert('You must write something!');
//         return;
//     }

//     // دریافت لیست ذخیره‌شده از localStorage
//     let storedData = JSON.parse(localStorage.getItem("tasks")) || [];

//     // بررسی اینکه آیا تسک تکراری است (بدون حساسیت به حروف بزرگ و کوچک)
//     let isDuplicate = storedData.some(task => task.toLowerCase() === taskText.toLowerCase());

//     if (isDuplicate) {
//         alert('This task is already in the list!');
//         inputBox.value = ''; // پاک کردن ورودی در صورت تکراری بودن
//         return;
//     }

//     // اضافه کردن تسک جدید به آرایه و ذخیره‌سازی
//     storedData.push(taskText);
//     localStorage.setItem("tasks", JSON.stringify(storedData));

//     // نمایش تسک در صفحه
//     renderTask(taskText);

//     inputBox.value = ''; // پاک کردن فیلد ورودی
// }

// function renderTask(taskText) {
//     let li = document.createElement('li');
//     li.textContent = taskText;

//     // دکمه حذف
//     let span = document.createElement('span');
//     span.innerHTML = "\u00d7"; // علامت ضربدر
//     li.appendChild(span);

//     listContainer.appendChild(li);
// }

// // بارگذاری تسک‌ها از localStorage هنگام اجرا
// function loadTasks() {
//     listContainer.innerHTML = ''; // پاک کردن لیست قبلی
//     let storedData = JSON.parse(localStorage.getItem("tasks")) || [];
//     storedData.forEach(renderTask);
// }

// // حذف و تیک زدن آیتم‌ها
// listContainer.addEventListener("click", function (e) {
//     let storedData = JSON.parse(localStorage.getItem("tasks")) || [];

//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");
//     } else if (e.target.tagName === "SPAN") {
//         let taskText = e.target.parentElement.firstChild.textContent;
//         storedData = storedData.filter(task => task !== taskText);
//         localStorage.setItem("tasks", JSON.stringify(storedData));
//         e.target.parentElement.remove();
//     }
// });

// // نمایش تسک‌ها هنگام بارگذاری صفحه
// loadTasks();

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    let taskText = inputBox.value.trim(); // حذف فاصله‌های اضافی از ابتدا و انتها
    if (taskText === '') {
        alert('You must write something!');
        return;
    }

    // دریافت لیست ذخیره‌شده از localStorage
    let storedData = JSON.parse(localStorage.getItem("tasks")) || [];

    // بررسی اینکه آیا تسک تکراری است (بدون حساسیت به حروف بزرگ و کوچک)
    let isDuplicate = storedData.some(task => task.toLowerCase() === taskText.toLowerCase());

    if (isDuplicate) {
        alert('This task is already in the list!');
        inputBox.value = ''; // پاک کردن ورودی در صورت تکراری بودن
        return;
    }

    // اضافه کردن تسک جدید به آرایه و ذخیره‌سازی
    storedData.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedData));

    // نمایش تسک در صفحه
    renderTask(taskText);

    inputBox.value = ''; // پاک کردن فیلد ورودی فقط بعد از اضافه شدن تسک جدید
}

function renderTask(taskText) {
    let li = document.createElement('li');
    li.textContent = taskText;

    // دکمه حذف
    let span = document.createElement('span');
    span.innerHTML = "\u00d7"; // علامت ضربدر
    li.appendChild(span);

    listContainer.appendChild(li);
}

// بارگذاری تسک‌ها از localStorage هنگام اجرا
function loadTasks() {
    listContainer.innerHTML = ''; // پاک کردن لیست قبلی
    let storedData = JSON.parse(localStorage.getItem("tasks")) || [];
    storedData.forEach(renderTask);
}

// حذف و تیک زدن آیتم‌ها
listContainer.addEventListener("click", function (e) {
    let storedData = JSON.parse(localStorage.getItem("tasks")) || [];

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        let taskText = e.target.parentElement.firstChild.textContent;
        storedData = storedData.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedData));

        // به‌روزرسانی لیست
        loadTasks();
    }
});

// نمایش تسک‌ها هنگام بارگذاری صفحه
loadTasks();
