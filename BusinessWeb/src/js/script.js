$(document).ready(function(){

    $('.header__slider').slick({
        arrows: false,
        autoplay: 3000,
        dots: true,
        vertical: true,
        verticalSwiping: true
    });

    new WOW().init();
});