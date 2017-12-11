// JavaScript Document
//滑動
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} , 'slow');
});

//滑動終
$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		
		
		$('.scroll-up').fadeIn();
		
		
	} else {
		
		
		$('.scroll-up').fadeOut();
		
	}
	
});


