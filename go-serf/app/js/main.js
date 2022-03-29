$(function(){

    /*------------------- HEADER-SLIDER ------------------- */
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg" alt="">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });


    /*------------------- surf-MAP ------------------- */
    $('.surf-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf__slider',
        focusOnSelect: true
    });


    /*------------------- surf-SLIDER ------------------- */
    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg" alt="">',
        asNavFor: '.surf-map',
    });


  
});

