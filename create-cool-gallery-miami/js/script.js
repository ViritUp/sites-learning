const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: {
        sensitivity: 3
    },
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
});

sliderMain.controller.control = sliderBg;


document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', e => {
        item.classList.toggle('opened');
    });
});

let descr = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? descr.classList.add('hidden') : descr.classList.remove('hidden');
});