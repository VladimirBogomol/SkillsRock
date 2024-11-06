// Пользователи
  async function fetchRandomUsers() {
    // Запрос к API
    const response = await fetch("https://randomuser.me/api/?results=10");
    // Получаем ответ и парсим в JSON
    const data = await response.json();
    // Получаем массив с объектами
    const users = data.results;

    const usersList = document.getElementById("usersList");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="User photo" />
            <div>
                <span><strong>${user.name.first} ${user.name.last}</strong></span><br />
                <span>${user.email}</span>
            </div>
            `;
      usersList.appendChild(listItem);
    });
  }

  // Добавляем тоггл показать\скрыть
  const toggleButton = document.getElementById("toggleBtn");
  const contentDiv = document.getElementById("content");

  toggleButton.addEventListener("click", function () {
    if (
      contentDiv.style.display === "none" ||
      contentDiv.style.display === ""
    ) {
      contentDiv.style.display = "block"; // Показываем пользователей
      toggleButton.textContent = "Скрыть пользователей"; // Меняем текст кнопки
    } else {
      contentDiv.style.display = "none"; // Скрываем пользователей
      toggleButton.textContent = "Показать пользователей"; // Меняем текст кнопки
    }
  });

  fetchRandomUsers();

  // Карусель
  // Находим элементы на странице
  const images = document.querySelector(".carousel-images");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");

  let currentIndex = 0;

  function showImages(index) {
    const allImages = images.children.length;
    currentIndex = (index + allImages) % allImages; //задаем цикличность
    const offsetX = -currentIndex * 100;
    images.style.transform = `translateX(${offsetX}%)`;
  }

  function prevImg() {
    showImages(currentIndex - 1);
  }

  function nextImg() {
    showImages(currentIndex + 1);
  }

  // Добавляем обработчики кнопок
  prevBtn.addEventListener("click", prevImg);
  nextBtn.addEventListener("click", nextImg);

  // Автоматическое пролисстывание картинок
  setInterval(nextImg, 5000);
