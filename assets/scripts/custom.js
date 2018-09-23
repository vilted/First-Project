$(document).ready(function(){
	// console.log("jQuery veikia");

	// burger menu
	$('.burger').click(function(){
		
		$('.nav').toggleClass('show');
	
	});


	// smooth scrolling

	$('a[href^="#"]').click(function(){

	var the_id = $(this).attr("href");

	    $('html, body').animate({
	        scrollTop:$(the_id).offset().top
	    }, 'slow');

	return false;
	});

}); // ready function closed









