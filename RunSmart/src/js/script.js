$(document).ready(function(){

  $('.slider').slick({
    speed: 800,
    adaptiveHeight: true,

    prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.png"></button>',
    responsive:[
        {
          breakpoint: 651,
          settings: {
            arrows: false,
            autoplay: 1500,
            dots: true
          }
        }
    ] 
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });

  function toggleSlide(item){
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog__item-content').eq(i).toggleClass('catalog__item-content--active');
        $('.catalog__item-list').eq(i).toggleClass('catalog__item-list--active');
      });
    });
  };

  toggleSlide('.catalog__link');
  toggleSlide('.catalog__item-back');


  //modal

  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn();
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  })
  

  //меняем тект в карточках покупки
  $('.button--mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());
      $('.button--mini').on('click', function(){
        $('.overlay, #order').fadeIn();
      });
    });  
  });

  function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required:true,
          email:true
        }
  
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя!",
          minlength: jQuery.validator.format("Введите минимум {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона!",
        email: {
          required: "Пожалуйста, введите свою почту!",
          email: "Неправильно введен адрес почты!"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+38 (999) 999-99-99");


  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn();

      $('form').trigger('reset');
    });
    return false;
  });


  //smooth scroll and pageup

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

  new WOW().init();
});