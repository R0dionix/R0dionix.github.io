$(document).ready(function(){

// ------------------ Фиксированная шапка c расчётом высоты ------------------
	let header = $("#header");
    let headerInner = $(".header__inner");
    let main = $("#main");
    let mainHeight = main.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, mainHeight);

    $(window).on("scroll resize", function() {
        mainHeight = main.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, mainHeight);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > mainHeight ) {
            header.addClass("header--fixed");
            headerInner.addClass("header__inner--fixed");
        } else {
            header.removeClass("header--fixed");
            headerInner.removeClass("header__inner--fixed");
        }
    }

// ------------------ MixItUp ------------------
    mixitup('#portfolio__inner', {
      classNames: {
        block: 'filter', /* mixitup */
        elementFilter: '', /* control */
        // elementSort: 'sort-btn' /* control */
      }
    });

// ------------------ Slick ------------------
    // Инициализация слайдера
      $('.feedback__slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false
        // dots: true
      });


    // Меню бургер
    $('.burger-btn').click(function(event) {
    $('.burger-btn, .header__menu').toggleClass('active');
    $('body').toggleClass('overflow');
    });


    // // Плавная прокрутка
    $("body").on('click', '[href*="#"]', function(e){
        event.preventDefault();

        $('.burger-btn, .header__menu').removeClass('active');
        $('body').removeClass('overflow');

      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing"
      });
      return false;
    });


});