
// FORM
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

// MENU
const menu = document.querySelector('.js-menu');
const menuBody = document.querySelector('.js-tasbar')
const home = document.querySelector('.js-home')
const stadium = document.querySelector('.js-stadium')
const club = document.querySelector('.js-club')
const history = document.querySelector('.js-history')
const login2 = document.querySelector('.js-login')
const tasbar = document.querySelector('.tasbar')
//Hiển thị Menu
function showMenu () {
    menuBody.classList.add('open');
}
// Ẩn Menu
function hideMenu() {
    menuBody.classList.remove('open');
}
//Bật Menu khi nhấn vào Login
menu.addEventListener('click',showMenu);
//Tắt Menu khi nhấn 
home.addEventListener('click',hideMenu);
stadium.addEventListener('click',hideMenu);
club.addEventListener('click',hideMenu);
history.addEventListener('click',hideMenu);
login2.addEventListener('click',hideMenu);
tasbar.addEventListener('click',hideMenu);


//SLIDER
let index = 1;
changeImage = function (){
    let imgs = ["./assets/image/slider/mancity1.jpg","./assets/image/slider/mancity2.webp","./assets/image/slider/mancity3.jpg"]
    document.getElementById('js-img').src = imgs[index];
    index++;
    if(index == 3) {
        index = 0;
    }
}
//Set auto và thời gian chuyển động
setInterval(changeImage,2000);
