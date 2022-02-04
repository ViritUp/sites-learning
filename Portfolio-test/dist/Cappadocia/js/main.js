$(function () {
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 601,
              settings: {
               arrows: false
              }
            }
          ]
    });

    $(".menu, .our-trip__btn-inn").on("click","a", function (event) {
              //отменяем стандартную обработку нажатия по ссылке
              event.preventDefault();
              //забираем идентификатор бока с атрибута href
              var id  = $(this).attr('href'),
              //узнаем высоту от начала страницы до блока на который ссылается якорь
                  top = $(id).offset().top; 
              //анимируем переход на расстояние - top за 1500 мс
              $('body,html').animate({scrollTop: top}, 1500);
          }); 
});
