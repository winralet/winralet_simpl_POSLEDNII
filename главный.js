const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const surname = params.get('surname');
const email = params.get('email');
const phone = params.get('phone');
const services = params.get('services');

document.getElementById('name').innerText = `Добро пожаловать на свой сайт, ${name} ${surname}!`;
document.getElementById('email').innerText = `Свяжитесь с нами по электронной почте: ${email} или по номеру телефона: ${phone}.`;
document.getElementById('phone').innerText = `© 2024 сайт ${name}. Все права защищены.`;
document.getElementById('services').innerText = services; // Отображаем услуги


// Массив с URL-адресами изображений
const images = [
    'me.png',
    'download.jpg',
    '1000022767.jpg',
    'ffff.jpg',

    'ffffff.jpg',
    '1000026433.jpg',
    'ffffff.jpg',
    'images.jpg',
    'ffff.jpg',
    // Добавьте сюда другие изображения
];

// Выбор случайного изображения
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

// Установка изображения в элемент
document.getElementById('randomImage').src = randomImage;