// 3. Разбиение массива на части
// Напишите функцию, которая разбивает массив на группы заданного размера.
function chunkArray(array, size) {
    // Создаем массив для хранения
    const result = [];
    // Проходим по массиву через цикл for
    for (let i = 0; i < array.length; i += size) {
        // Используем slice, чтобы взять подмассив от i до i + size
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result; // Возвращаем итоговый результат
}

// Пример:
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]