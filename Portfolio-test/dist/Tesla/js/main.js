$(function(){

    $('.header__slider').slick({
        arrows: false,
        autoplay: 3000,
        fade:true,
        dots: true
    });

    $('.header__menu-btn').on('click',function(){
        $('.menu').addClass('active')
    });

    $('.close__btn').on('click',function(){
        $('.menu').removeClass('active');
    })

});