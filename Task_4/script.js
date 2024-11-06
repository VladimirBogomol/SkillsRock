// 1. Реализация простого калькулятора
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

const calc = new Calculator();

console.log(`Складываем: ${calc.add(2, 3)}`); // 5
console.log(`Вычитаем: ${calc.subtract(5, 2)}`); // 3
console.log(`Умножаем: ${calc.multiply(3, 4)}`); // 12
console.log(`Делим: ${calc.divide(10, 2)}`); // 5

// 2. Система управления библиотекой
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = "доступна"; // Начальный статус книги
  }
}

class Library {
  constructor() {
    this.books = []; // Массив для хранения книг
  }

  addBook(book) {
    this.books.push(book); // Добавление книги в библиотеку
  }

  borrowBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book && book.status === "доступна") {
      book.status = "взята"; // Изменение статуса книги на "взята"
      return `Книга "${book.title}" успешно взята.`;
    }
    return "Книга недоступна для взятия.";
  }

  returnBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book && book.status === "взята") {
      book.status = "доступна"; // Изменение статуса книги на "доступна"
      return `Книга "${book.title}" успешно возвращена.`;
    }
    return "Книга не числится за вами.";
  }

  listAvailableBooks() {
    const availableBooks = this.books.filter((b) => b.status === "доступна");
    if (availableBooks.length > 0) {
      return availableBooks
        .map((b) => `книга: ${b.title} автор: ${b.author}, ISBN: ${b.isbn}`)
        .join("\n");
    }
    return "Нет доступных книг.";
  }
}

const library = new Library();
const book1 = new Book("Зов Ктулху", "Говард Филлипс Лавкрафт", "978-5-389-03085-5");
const book2 = new Book("Дракула", "Брэм Стокер", "978-5-267-00250-9");

library.addBook(book1);
library.addBook(book2);

console.log(library.listAvailableBooks());
console.log("-------------------------------------------------------------------------");
console.log(library.borrowBook("978-5-389-03085-5"));
console.log("-------------------------------------------------------------------------");
console.log(library.listAvailableBooks());

console.log(library.returnBook("978-5-389-03085-5"));
console.log("-------------------------------------------------------------------------");
console.log(library.listAvailableBooks());
