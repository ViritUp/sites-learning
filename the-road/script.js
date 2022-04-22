const buttons = document.querySelectorAll('.nav-button');

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.classList.toggle('change');
    });
});



const COLORS = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

document.querySelectorAll('.nav-link').forEach((link, idx) => {
    link.style.backgroundColor = COLORS[idx];
});



const openBtn = document.querySelector('.open-navbar-icon');
const closeBtn = document.querySelector('.close-navbar-icon');
const container = document.querySelector('.container');

openBtn.addEventListener('click', () => {
    container.classList.add('change');
});
closeBtn.addEventListener('click', () => {
    container.classList.remove('change');
});