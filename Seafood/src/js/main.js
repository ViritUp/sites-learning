$(function(){

    $('.header__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrowTop-whiteIcon.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrowDown-whiteIcon.svg"></button>',
        fade: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 401,
              settings: {
                dots: false,
                arrows: false
              }
            }
        ]
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="img/arrowTop-blueIcon.svg"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="img/arrowDown-blueIcon.svg"></button>',
        responsive: [
            {
              breakpoint: 891,
              settings: {
                vertical: false,
                slidesToShow: 3,
                arrows: false,
                centerMode: true,
                dots: true
              }
            },
            {
                breakpoint: 800,
                settings: {
                  vertical: false,
                  slidesToShow: 2,
                  arrows: false,
                  centerMode: false,
                  dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                  vertical: false,
                  slidesToShow: 1,
                  arrows: false,
                  centerMode: false,
                  dots: true
                }
            }
        ]
    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
    });

    $('.menu__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
    });

});