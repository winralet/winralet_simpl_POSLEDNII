document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения полей
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const services = document.getElementById('services').value;

    // Формируем URL для перенаправления
    const redirectUrl = `главная.html?name=${encodeURIComponent(name)}&surname=${encodeURIComponent(surname)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&services=${encodeURIComponent(services)}`;
    window.location.href = redirectUrl; // Перенаправляем пользователя
});