// Отримуємо елементи з DOM
const colorInput = document.getElementById("colorInput"); // Поле введення
const changeBgButton = document.getElementById("changeBg"); // Кнопка

// Додаємо обробник події для кнопки
changeBgButton.addEventListener("click", function () {
    const newColor = colorInput.value.trim(); // Отримуємо значення з поля та обрізаємо зайві пробіли

    if (newColor) { // Перевіряємо, чи введене значення не порожнє
        document.body.style.backgroundColor = newColor; // Змінюємо колір фону сторінки
    }
});