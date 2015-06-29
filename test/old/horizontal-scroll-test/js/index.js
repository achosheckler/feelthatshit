
//horizontal_scroll
$(document).ready(function(){
	$(function(){
		$('#menu_experiments a').bind('click',function(event){
			var $anchor = $(this);

			$('#outer_wrapper').stop().animate({
				scrollLeft: $($anchor.attr('href')).offset().left
			}, 500, 'easeInOutExpo');
		});
	});
});