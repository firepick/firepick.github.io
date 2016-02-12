(function($) {
	"use strict";

	/*-----------------------------------------------------------------------------------*/
	/*	Site Navigation
	/*-----------------------------------------------------------------------------------*/
	$('#navbar .navbar-menu').mobileMenu({className: 'form-control'})
	$('#navbar .navbar-menu li').each(function(){
		$(this).filter('.active').parents('li').addClass('active');
		if ( $('ul', this).length > 0 )
			$(this).children('a').append(' <i class="sub-indicator fa fa-angle-down fa-fw text-muted"></i>')
	})
	$('#navbar .navbar-menu, #navbar .navbar-user').superfish({
		animation: {opacity:'show', height:'show'},
		delay: 100,
		speed: "fast"
	})
	$('#navbar .navbar-user > li > a').on('click', function() {
		$(this).parent().toggleClass('opened')
	})

	/*-----------------------------------------------------------------------------------*/
	/*	Section
	/*-----------------------------------------------------------------------------------*/
	$('.section-title').prepend('<i class="line"></i>')

})(jQuery);
