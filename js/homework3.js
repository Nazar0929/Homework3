// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

const result = 5+5+'5';
console.log(result);
console.log(typeof(result));


// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, 
// який перевіряє чи містить змінна email символ @ і рахує загальну кількість 
// символів. Результат виведіть в консоль.

// перший спосіб

const email = "nazar496496@gmail.com";
console.log((email.indexOf("@")) !== -1);
console.log(email.length);

// другий спосіб

const userEmail = "nazar496496@gmail.com";
const check = userEmail.includes("@");
console.log(check);
console.log(userEmail.length);



// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова 
// в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

// 1 спосіб

const word = "My";
const usersName = "name";
const be = "is";

let fullName = word + " " + usersName + " " + be + " ";
fullName += "Viktor";
console.log(fullName);

// 2 спосіб 

const words = "My";
const usersNamee = "name";
const been = "is";
const his = "Viktor";

let fulName = `${words} ${usersNamee} ${been}`;
fulName = fulName + " " + `${his}`;
console.log(fulName);


// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
//  За допомогою шаблонного рядка виведіть на екран через alert повідомлення на 
//  прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»


const userName = "Nazar";
const payment = 300;
alert(`Дякую, ${userName}! До сплати ${payment} dollars `);


