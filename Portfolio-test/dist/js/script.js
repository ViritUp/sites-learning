const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills__statistics-percent');
      lines = document.querySelectorAll('.skills__statistics-statusbar span'); 

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

new WOW().init();