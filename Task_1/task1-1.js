// 1. Проверка на палиндром
// Напишите функцию, которая проверяет, является ли строка палиндромом. Палиндром
// — это слово, фраза, число или другая последовательность символов, которая
// читается одинаково слева направо и справа налево (игнорируя пробелы, знаки
// препинания и регистр).
function isPalindrome(str) {
  // Убираем все пробелы у строки и приводим её к нижнему регистру.
    const strLowerCase = str.replace(/\s+/g, "").toLowerCase();

  // Разворачиваем строку и проверяем на равенство.
    const strReverse = strLowerCase.split("").reverse().join("");

    // Сравниваем исходную строку с её обратной версией.
    if (strLowerCase === strReverse) {
        console.log(`${strLowerCase}, является палиндромом`);
    }
    else if (strLowerCase !== strReverse) {
        console.log(`${strLowerCase}, не является палиндромом -> ${strReverse}`);
    }
    return strLowerCase === strReverse;

}

// Пример:
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Буэнос ночес")); // false


