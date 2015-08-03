var debug = true;
var verdebug = true; 
var motiontest = false;
var scroll = null;
var speed = 20000000;

$(window).load(function(){
	
	
	if(debug) console.log("everything loaded");
	$pause = $(".pause");
	$expand = $(".expand");
		
	var size = _getViewport();	
	
	_bgSize();
	_groupSize();
	
	
	$expand.each(function(){
		var width = 0;
		
		$(this).children().each(function(){
			width = width + $(this).width();
		});
		if(verdebug) console.log(width);
		
		$(this).css("width", width + 'px');
		
	});

	$("#groupScroller").css('width', $("#scroller").width() + 'px');
	//$(".outer").css("width", $("#scroller").width() + 'px' );
	
	$(window).resize(function(){
		_bgSize();
		_groupSize();
	});
	
	
	
	//_simplyScroll();	
	
	$(".snstv").hover(function(){
		console.log($(this).attr('id'));
	});

	if(scroll){
		$what = $('.inner');
		var width = $("#scroller").width() - $(window).width();
		verdebug ? console.log(width) : false;
		$what.stop().animate({
			scrollLeft: width + 'px'
			//scrollLeft: '2000px'
		},speed, 'linear');  
		console.log('scrolling...');
		console.log($what.scrollLeft());
		
		$('.showtee').hover(function(){
			$what.stop();
		}, function(){
			$what.stop().animate({
				scrollLeft: width + 'px'
			},speed, 'linear');
		})
	}
	
	
});

function _motion(){
	window.addEventListener("devicemotion",onDeviceMotion,false);	
}

  
function onDeviceMotion(event){
	//var ctx = document.getElementById("c").getContext("2d");
	var accel = event.accelerationIncludingGravity;
	$('.output').val(accel.x + " " + accel.y + " " + accel.z);
}



function _doScroll(){
	
}


function _bgSize(){
	var height = 1100;
	var size = _getViewport();	
	
	var wide = size[0];
	var high = size[1];
	var ratio = high/height;
	var width = 0;
	var newWidth = 0;
	
	if(debug) console.log(wide + " x " + high);
	
	$sizeme = $(".size-me");
	
	$sizeme.each(function(){
		$me = $(this);
		width = $me.data("width");
		newWidth = Math.round(width * ratio);
		$me.css('width', newWidth + 'px');	
		if(debug) console.log("size-me: " + width + " x " + ratio + " = " + newWidth);
	});
	
}

function _groupSize(){
	var size = _getViewport();
	//Groupsize
	
	$elements = $(".elements");
	
	var winWidth = size[0];
	var winHeight = size[1];
	var bgHeight = 1100;
	var width = 0;
	var height = 0;
	var top = 0;
	var newWidth = 0;
	var newHeight = 0;
	var marginLeft = 0;
	var newML = 0;
	var ratio = 0;
	
	if(debug) console.log("window: " + winWidth + " x " + winHeight);
	
	$elements.each(function(){
		$el = $(this);
		
		width = $el.data("width");
		height = $el.data("height");
		marginLeft = $el.data("marginleft");
		winHeight = size[1];
		
		newML = Math.round((winHeight/bgHeight) * marginLeft);
		
		if(winHeight > height) {
			top = Math.round((winHeight - height)/2);
			newHeight = height;
			newWidth = width;
		} else {
			winHeight = winHeight - 60;
			ratio = winHeight/height;
			//console.log(ratio);
			newHeight = Math.round(height * ratio);
			newWidth = Math.round(width * ratio);
			top = 30;
		}
		
		if(debug) console.log(winHeight + ": " + newWidth + " x " + newHeight + " -> " + top + " -> " + ratio);
		
		$el.css('margin-top', top + 'px');
		$el.css('width', newWidth + 'px');
		$el.css('height', newHeight + 'px');
		$gr = $el.parent();
		$gr.css('margin-left', newML + 'px');
		$gr.css('width', newWidth + 'px');
			
	});
	
}

// VIEWPORTER

function _getViewport() {
	var viewPortWidth;
	var viewPortHeight;
	
	// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
	if (typeof window.innerWidth != 'undefined') {
		viewPortWidth = window.innerWidth,
		viewPortHeight = window.innerHeight
	}
	
	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
	else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0) {
		viewPortWidth = document.documentElement.clientWidth,
		viewPortHeight = document.documentElement.clientHeight
	}
	else {
		viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
		viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
	}
	return [viewPortWidth, viewPortHeight];
}
