const taskList = document.getElementById('taskList');
let tasks = [];

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        return; // Не добавляем пустую задачу
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task); // Добавляем задачу в массив
    renderTasks(); // Отображаем задачи
    taskInput.value = ''; // Очищаем поле ввода
});

function renderTasks(filter = "all") {
  taskList.innerHTML = ""; // Очищаем список задач

  for (const task of tasks) {
    if (
      (filter === "completed" && !task.completed) ||
      (filter === "incomplete" && task.completed)
    ) {
      continue; // Пропускаем задачи по фильтру
    }

    const li = document.createElement("li");

    // Создаем чекбокс
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    // Обновляем состояние задачи при изменении чекбокса
    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;

      renderTasks(filter); // Обновляем отображение
    });

    // Добавляем текст задачи
    const taskLabel = document.createElement("span");
    taskLabel.textContent = task.text;

    // Добавляем событие для отметки задачи выполненной по клику на текст
    taskLabel.addEventListener("click", function () {
      checkbox.checked = !checkbox.checked; // Переключаем состояние чекбокса
      checkbox.dispatchEvent(new Event("change")); // Вызываем событие изменения
    });

    li.appendChild(checkbox);
    li.appendChild(taskLabel);

    // Создаем кнопку для удаления задачи
    const deleteButton = document.createElement("button");
    deleteButton.style.width = "initial";
    deleteButton.textContent = "Удалить";
    deleteButton.className = "deleteButton";

    // Добавляем обработчик события для удаления задачи
    deleteButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Останавливаем событие, чтобы не отмечать задачу
      tasks = tasks.filter((t) => t !== task); // Удаляем задачу из массива
      renderTasks(filter); // Обновляем отображение
    });

    li.appendChild(deleteButton); // Добавляем кнопку удаления к элементу списка
    taskList.appendChild(li); // Добавляем элемент списка в ul
  }
}

// Обработчики для фильтров
document.getElementById("allTasks").addEventListener("click", function () {
  renderTasks("all");
});

document
  .getElementById("completedTasks")
  .addEventListener("click", function () {
    renderTasks("completed");
  });

document
  .getElementById("incompletedTasks")
  .addEventListener("click", function () {
    renderTasks("incomplete");
  });

// Изначальное отображение задач
renderTasks();
