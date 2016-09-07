// First part of MODULE 7-8 - TABS

$(document).ready(function(){
	$('.nav-tabs a').click(function(event) {
		event.preventDefault();
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');

		var tab = $(this).attr('href');

		$('.tabs-content').not(tab).css('display', 'none');
		$(tab).fadeIn(500);
	});
});

// Second part of MODULE 7-8 - tooltips

$(document).ready(function(){

	$('.hover').mousemove(function(event){

		var hint = $(this).attr('rel');

		$('#hint').css({'left': event.clientX + 5, 'top': event.clientY - 5});
		$('#hint').fadeIn(700).text(hint);
	})

	.mouseout(function(){
		$('#hint').hide();	
	});
});
