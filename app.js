// DEBUGGING. HANDLING EXCEPTIONS
// 📀💿💿

// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) –
// порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
const arr1 = [5, 9, 11, 8, 34, 35, 1, 6];
const sumSliceArray = function (arr, first, second) {
  const elFirst = arr[first];
  const elSecond = arr[second];

  const sumArg = elFirst + elSecond;
  if (
    first > arr.length ||
    first > arr.length ||
    first == second ||
    first < 0 ||
    second < 0
  ) {
    throw `The data of the set values  not correct`;
  }
  if (typeof first !== "number" || typeof second !== "number") {
    throw `the data type is not number`;
  }
  return sumArg;
};

try {
  console.log(sumSliceArray(arr1, 0, 1));
} catch (error) {
  console.error(error);
}
// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус
// (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років
// (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі
//  (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error).
//  У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення.
//   У всіх інших випадках користувач отримає доступ до перегляду фільму.
//    У блоці catch передбачена можливість виведення назви та опису помилки.
// 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і
//  висота прямокутника height
// і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку,
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
const calcRectangleArea = function (width, height) {
  const areaRectangle = width * height;
  if (typeof width !== "number" || typeof height !== "number") {
    throw `The data of the set values  not correct!!!`;
  }
  if (width <= 0 || height <= 0) {
    throw `Side rectangle can't negative value!!!`;
  }
  return areaRectangle;
};
console.log(calcRectangleArea(10, 10));
// // 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
//  Функція повертає назву місяця відповідно до введеного номера місяця.
//  У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException
//   з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
    this.message = message;
  }
}

const showMonthName = function (month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
  if (typeof month !== "number" || month <= 0 || month > 12) {
    throw new MonthException("Incorrect month number");
  }
};

try {
  showMonthName();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("thats all");
}
console.log(showMonthName(5));
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id.
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
//  в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids)
//   повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
