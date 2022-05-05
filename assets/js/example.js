const login = document.querySelector('.js-login');
const formBody = document.querySelector('.js-form');
const formClose = document.querySelector('.js-close');

//Hiển thị Form
function showForm () {
    formBody.classList.add('open');
}

// Ẩn Form
function hideForm() {
    formBody.classList.remove('open');
}

//Bật Form khi nhấn vào Login
login.addEventListener('click',showForm);

//Tắt Form khi nhấn vào close
formClose.addEventListener('click',hideForm);

