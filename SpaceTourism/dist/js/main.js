$(function(){

    $('.slider__box').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                autoplay: true
              }
            }
          ]
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });

    new WOW().init();
});