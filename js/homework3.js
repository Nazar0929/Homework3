// // Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

// const result = 5+5+'5';
// console.log(result);
// console.log(typeof(result));


// // Створіть змінну email з вашою електронною адресою. Напишіть скрипт, 
// // який перевіряє чи містить змінна email символ @ і рахує загальну кількість 
// // символів. Результат виведіть в консоль.

// // перший спосіб

// const email = "nazar496496@gmail.com";
// console.log((email.indexOf("@")) !== -1);
// console.log(email.length);

// // другий спосіб

// const userEmail = "nazar496496@gmail.com";
// const check = userEmail.includes("@");
// console.log(check);
// console.log(userEmail.length);



// // Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова 
// // в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

// // 1 спосіб

// const word = "My";
// const usersName = "name";
// const be = "is";

// let fullName = word + " " + usersName + " " + be + " ";
// fullName += "Viktor";
// console.log(fullName);

// // 2 спосіб 

// const words = "My";
// const usersNamee = "name";
// const been = "is";
// const his = "Viktor";

// let fulName = `${words} ${usersNamee} ${been}`;
// fulName = fulName + " " + `${his}`;
// console.log(fulName);


// // Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
// //  За допомогою шаблонного рядка виведіть на екран через alert повідомлення на 
// //  прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»


// const userName = "Nazar";
// const payment = 300;
// alert(`Дякую, ${userName}! До сплати ${payment} dollars `);





















// const question = prompt("Яkий ваш рівень?(pro, master, noob)").toLowerCase().trim();
// let points = "";
// if (question === "pro") {
//     points = 500;
// } else if (question === "master") {
//     points = 300;
// } else if (question === "noob") {
//     points = 100;
// } else {
//     points = "";
//     console.log("Ти не можеш грати");
    
// }

// console.log(points);








//1) Створіть змінну age яка буде запитувати у користувача його вік
// Створіть змінну isAdmin, яка буде запитувати користувача, чи він admin з підтверженням так або ні.
// Створіть змінну allowedAge і присвойте їй значення 18
// Створіть змінну enterPassword яка буде просити у користувача ввести пароль
// Створіть змінну password і присвойте їй значення рядок qwerty
// Перевірте у користувача чи вік його більший за 18 років, чи він адмін та при введенні пароля
//  обріжте можливі    пробіли та приведіть до нижнього регістру, та виведіть на екран 
// повідомлення "Вітаю, ви можете увійти у систему"
// якщо хоч одне значення хибне виведіть на екран повідомлення "Ви вказали невірні данні"


// const age = Number(prompt("Який ваш вік?"));
// const isAdmin = confirm("Ви адмін?");
// const allowedAge = 18;
// const enterPassword = prompt("Введіть пароль").toLowerCase().trim();
// const password = "qwerty";

// if (age >= allowedAge && isAdmin && enterPassword === password) {
//     alert("Вітаю, ви можете увійти у систему");
// } else {
//     alert("Ви вказали невірні данні");
// }





// const age = Number(prompt("Який ваш вік?"));

// const allowedAge = 18;
// // const enterPassword = prompt("Введіть пароль").toLowerCase().trim();

// if  (age >= allowedAge) {
//     const isAdmin = confirm("Ви адмін?");
    
//     if (isAdmin === true) {
//         const password = "qwerty";
//         const enterPassword = prompt("Введіть пароль").toLowerCase().trim();  
//         if (enterPassword === password) {
//             alert("Вітаю ви крутий");

//         } else {
//             alert("Невірний пароль");
//         }
        
//     } else {
//         console.log("Ви не адмін");
//     }
    
    
// } else {
//     console.log("Пока, ти досить малий");
    
// }







// тернарний оператор
// const question = prompt('18?');
// const result = question >= 18? "Більше": "Менше";
// console.log(result);

 

// const question = confirm('18?');
// const result = question === true? "Більше": "Менше";
// console.log(result);

 