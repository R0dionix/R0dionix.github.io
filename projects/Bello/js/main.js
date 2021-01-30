$(document).ready(function() {
		wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animate__animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
		}
		)
		wow.init();
// Мобильное меню
		$(function () {
		$('.menu-btn').click(function () {	
		$('.menu__list-mobile').slideToggle();
		})
		});


/*Плавная прокрутка*/
			$("a.menu__link, a.footer-nav__link").click(function(){
				$("html, body").animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
				}, {
					duration: 1000,
					easing: "swing"
				});
				return false;
			});		
});