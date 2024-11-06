// 1. Функция debounce
function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        // Сброс таймера при новом вызове функции
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Устанавливаем таймер
        timeoutId = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    };
}

const logMessage = () => {
    console.log("Функция была вызвана!");
}


const debouncedFunction = debounce(logMessage, 1000);

// Пример:
debouncedFunction(); // Функция не будет вызвана сразу
debouncedFunction(); // Сброс таймера

// 2. Глубокое копирование
function deepClone(obj) {
    // Проверяем, является ли obj объектом и не является ли он null
    if (obj === null || typeof obj !== 'object') {
        return obj; // Если это не объект, возвращаем его как есть
    }

    // Создаем новый объект/массив в зависимости от типа obj
    const copy = Array.isArray(obj) ? [] : {};

    // Рекурсивно копируем свойства
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }

    return copy; // Возвращаем новый объект
}

// Пример
const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const copy = deepClone(original);
copy.address.city = 'Los Angeles';

console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city); // Los Angeles
