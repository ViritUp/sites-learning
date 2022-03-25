let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');


menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

var swiper = new Swiper('.home-slider', {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper('.food-slider', {
   grabCursor: true,
   loop: true,
   spaceBetween: 20,
   centeredSlides: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});


document.querySelectorAll('.food .slide').forEach(food => {
   food.addEventListener('click', () => {
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preview => {
         let target = preview.getAttribute('data-target');
         preview.classList.remove('active');
         if(name == target) {
            preview.classList.add('active');
         }
      });
   });
});

previewContainer.querySelector('#close-preview').addEventListener('click', () => {
   previewContainer.style.display = 'none';
});

var swiper = new Swiper('.menu-slider', {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   spaceBetween: 20,
   centeredSlides: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var swiper = new Swiper('.blogs-slider', {
   grabCursor: true,
   loop: true,
   spaceBetween: 20,
   centeredSlides: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});