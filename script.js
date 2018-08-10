// ЗАДАЧА 1 АНКЕТА

// function form() {
//   document.write('<div id="anketa"> <div id="wrapper">');
//   do {
//     profileImg = prompt("Вставьте ссылку на картинку профиля");
//   } while (profileImg == "");
//   document.write('<img src="' + profileImg + '">');
//   document.write('<div id="anketa-data">');
//   do {
//     name = prompt("Введите имя");
//   } while (name == "");
//   document.write("<div> Имя:" + name + "</div>");
//   do {
//     surname = prompt("Введите фамилию");
//   } while (surname == "");
//   document.write("<div> Фамилия :" + surname + "</div>");
//   do {
//     dateOfBirth = prompt("Введите дату рождения");
//   } while (dateOfBirth == "");
//   document.write("<div> Дата рождения :" + dateOfBirth + "</div>");
//   do {
//     email = prompt("Введите e-mail");
//   } while (email == "");
//   document.write("<div> Дата рождения :" + email + "</div>");
//   do {
//     secretQuestion = prompt("Секретный вопрос: Девичья фамилия матери");
//   } while (secretQuestion == "");
//   document.write("<div> Девичья фамилия матери :" + secretQuestion + "</div> </div> </div> </div>");
// }

// form();

// КОНЕЦ 1-ОЙ ЗАДАЧИ

// ЗАДАЧА 2 СТАТИСТИКА ВВОДА ЧИСЕЛ ОТ 0 ДО 5

// 1. СОздать рандомное число
// 2. Задать вопрос н колво
// 3. Проверить ввод
// 4. Отменять попытку если не число
// 5. Увеличить нужный счетчик
// 6. Статистика

// var counter0 = 0,
//   counter1 = 0,
//   counter2 = 0,
//   counter3 = 0,
//   counter4 = 0,
//   counter5 = 0,
//   a;

// Создание рандомного числа

// function randomNumber(min, max) {
//     c = Math.floor(Math.random() * (max - min + 1)) + min;
//     return c;
// }

// c = randomNumber(0, 5);
// console.log(c);

// for (i = 0; i < Infinity; i++) {
//   var a = prompt("Введите число");
//   if (a === "0") {
//     counter0++;
//   } else if (a === "1") {
//     counter1++;
//   } else if (a === "2") {
//     counter2++;
//   } else if (a === "3") {
//     counter3++;
//   } else if (a === "4") {
//     counter4++;
//   } else if (a === "5") {
//     counter5++;
//   } else if (a === "" || a > 5) {
//     alert("Пустое значение или введенное число больше 5.");
//     break;
//   }
// }

// console.log("Количество попыток: " + i);
// console.log("0: " + counter0);
// console.log("1: " + counter1);
// console.log("2: " + counter2);
// console.log("3: " + counter3);
// console.log("4: " + counter4);
// console.log("5: " + counter5);

// КОНЕЦ ВТОРОЙ ЗАДАЧИ

// ЗАДАЧА 3 УДАЛИТЬ ВСЕ ПРОБЕЛЫ С ТЕКСТА

// Вариант 1, с использованием replace и флага global

// var someString = prompt("Введите текст с пробелами");
// var space = / /gi;
// var withOutSpace = "";
// var newstr = someString.replace(space, withOutSpace);
// alert(newstr);

// Вариант два, проще
// var a = prompt("Введите текст");
// alert(a.split(" ").join(""));

// КОНЕЦ ТРЕТЕЙ ЗАДАЧИ

// БАНКОМАТ

// var c200 = 200,
//   c100 = 100,
//   c50 = 50,
//   reserv200 = 25,
//   reserv100 = 35,
//   reserv50 = 75;

// reservATM = c200 * reserv200 + c100 * reserv100 + c50 * reserv50;

// function bezOstatka(moneyDraw, c) {
//   countNote = moneyDraw / c;
//   alert("Вы сняли " + moneyDraw + " грн по " + countNote + " купюрами по " + c);
//   return countNote;
// }

// do {
//   moneyDraw = +prompt("Введите сумму для снятия. // ДОСТУПНО: " + reservATM);
//   if (moneyDraw % c200 == 0) {
//     bezOstatka(moneyDraw, c200);
//     reservATM -= moneyDraw;
//     reserv200 -= countNote;
//   } else if (moneyDraw % c100 == 0) {
//     bezOstatka(moneyDraw, c100);
//     reservATM -= moneyDraw;
//   } else if (moneyDraw % c50 == 0) {
//     bezOstatka(moneyDraw, c50);
//     reservATM -= moneyDraw;
//   } else {
//     alert("Ошибка, доступные купюры 50");
//   }
// } while (reservATM > 50);
