$(window).load(function(){
	
	var andebug = false;
	
	//Documentation: http://ricostacruz.com/jquery.transit/
	
	//GROUP 1
	
	var animationSpeed = 250;
	
	$(".shrink").on("mouseenter", function(){
		if(andebug) console.log("in");
		$(this).transition({scale: [.9,.9]}, animationSpeed, 'ease');
	});
	
	$(".shrink").on("mouseleave", function(){
		if(andebug) console.log("out");
		$(this).transition({scale: [1,1]}, animationSpeed, 'ease');
	});
	
	$ros = $(".rotateOnScroll");
	var oldScroll = $(window).scrollLeft();
	var wl = 0;
	var clockwise = true;
	var max = 0;
	var left = 0;
	var tl = 0;
	var rot = "";
	var start = 0;
	var deg = 0;
	var size = _getViewport();
	var winWidth = size[0];
	var winHeight = size[1];
	
	$(window).scroll(function(){
		$ros.each(function(){
			clockwise = $(this).data("clockwise");
			max = $(this).data("max");
			left = Math.round($(this).data("left") * $(this).parent().width()); 
			wl = $(window).scrollLeft();
			start = left-(max*2);
			
			if(wl >= start){
				deg = (wl-start)/2;
				if(deg <= max) {
					clockwise == true ? rot = deg + "deg" : rot = "-" + deg + "deg";
					$(this).css({"transform": "rotate(" + rot + ")"});
					if(andebug) console.log("rot " + rot);
				}
			}
		 
			if(andebug) console.log(wl + " " + start + " " + deg);
			
		});
		oldScroll = wl;
	});
	
		
});
