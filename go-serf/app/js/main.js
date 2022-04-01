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


    /*------------------- SURF-MAP ------------------- */
    $('.surf-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf__slider',
        focusOnSelect: true
    });


    /*------------------- SURF-SLIDER ------------------- */
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


    /*------------------- TRAVEL-SLEEP-SHOP-SLIDER ------------------- */
    $('.travel__slider, .sleep__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/arrows-right.svg" alt="">',
    });


    /*------------------- SLEEP-SECTION ------------------- */

    /*------------------- SLEEP-RATING ------------------- */
    const hotelStars = document.querySelectorAll('.sleep-slider__descr .stars');
    const totalStars = 5;
    let ratingHotel = {
        hotel1: 5,
        hotel2: 3.4,
        hotel3: 4.1,
        hotel4: 1.6,
        hotel5: 3.0,
        hotel6: 3.5,
        hotel7: 2.7,
        hotel8: 4.1,
    };
    let iHotel = 0;

    for (const key in ratingHotel) {
        if(ratingHotel[key] > 5) {
            ratingHotel[key] = 5;
        }
        const starPercentage = (ratingHotel[key] / totalStars * 100);
        hotelStars[iHotel].style.width = `${starPercentage}%`;

        iHotel++;
    }


    /*------------------- SLEEP-CALC ------------------- */

    const allCulc = document.querySelectorAll('.sleep-slider__calc');

    let oneNight = 47;
    let oneGuest = 27;

    allCulc.forEach((culc) => {
        const numberOfNights = culc.querySelector('.sleep-slider__calc-nights .sleep-slider__calc-title');
        const numberOfGuests = culc.querySelector('.sleep-slider__calc-guests .sleep-slider__calc-title');
        const price = culc.querySelector('.sleep-slider__calc-price .sleep-slider__calc-title');
        const numberOfNightsPlus = culc.querySelector('.sleep-slider__calc-nights .sleep-slider__calc-plus');
        const numberOfNightsMinus = culc.querySelector('.sleep-slider__calc-nights .sleep-slider__calc-minus');
        const numberOfGuestsPlus = culc.querySelector('.sleep-slider__calc-guests .sleep-slider__calc-plus');
        const numberOfGuestsMinus = culc.querySelector('.sleep-slider__calc-guests .sleep-slider__calc-minus');

        let curentNights = 1;
        let curentGuests = 1;

        showOnPage();

        numberOfNightsPlus.addEventListener('click', () => {
            curentNights++;
            showOnPage();
        });

        numberOfNightsMinus.addEventListener('click', () => {
            if(curentNights <= 1) {
                curentNights = 1;
            } else {
                curentNights--;
            }
            
            showOnPage();
        });

        numberOfGuestsPlus.addEventListener('click', () => {
            curentGuests++;
            showOnPage();
        });

        numberOfGuestsMinus.addEventListener('click', () => {
            if(curentGuests <= 1) {
                curentGuests = 1;
            } else {
                curentGuests--;
            }
            showOnPage();
        });


        function showOnPage() {
            const currentPrice = (curentNights * oneNight) + (curentGuests * oneGuest);

            numberOfNights.innerHTML = `${curentNights} Nights`;
            numberOfGuests.innerHTML = `${curentGuests} Guests`;
            price.innerHTML = `\$${currentPrice} USD`;
        }

    });

    
    /*------------------- SHOP-RATING ------------------- */
    const shopStars = document.querySelectorAll('.shop-slider__stars .stars');
    let ratingShop = {
        product1: 5,
        product2: 3.4,
        product3: 4.1,
        product4: 1.6,
        product5: 3.0,
    };
    let iShop = 0;

    for (const key in ratingShop) {
        if(ratingShop[key] > 5) {
            ratingShop[key] = 5;
        }
        const starPercentage = (ratingShop[key] / totalStars * 100);
        shopStars[iShop].style.width = `${starPercentage}%`;

        iShop++;
    }


    /*------------------- SHOP-BOARD ------------------- */
    $('.surfboard-box__circle').on('click', function() {
        $(this).toggleClass('active');
    });

  
});



