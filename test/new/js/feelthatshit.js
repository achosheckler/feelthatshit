var debug = true;
var verdebug = true; 
var motiontest = false;
var scroll = false;
var speed = 200000;
var easing = 'linear';
var tbh = 0;
var tee;
var oldMouse, newMouse;
var assets = "assets/";
var lastelem;
var moving = false;
var buffer = 5;
var left = false;

$(window).load(function(){
	if(debug) console.log("everything loaded");
	$pause = $(".pause");
	$expand = $(".expand");
	$rs = $(".rightScroll");
	$st = $(".showtee");
	$tb = $(".teebox");
	$console = $("#console");

	
	var size = _getViewport();	
	
	_bgSize();
	_groupSize();
	_teesize($tb);
	
	
	$expand.each(function(){
		var width = 0;
		
		$(this).children().each(function(){
			width = width + $(this).width();
		});
		if(verdebug) console.log(width);
		
		$(this).css("width", width + 'px');
		
	});

	//$("#groupScroller").css('width', $("#scroller").width() + 'px');
	//$(".outer").css("width", $("#scroller").width() + 'px' );
	
	$(window).resize(function(){
		_bgSize();
		_groupSize();
		_teesize($tb)
	});
	
	
	
	//_simplyScroll();	
	
	$(".snstv").hover(function(){
	//	console.log($(this).attr('id'));
	});

	if(scroll){
		//$what = $("body");
		var width = $("#scroller").width() - $(window).width();
		verdebug ? console.log(width) : false;
		$what.stop().animate({
			scrollLeft: width + 'px'
			//scrollLeft: '2000px'
		},speed, easing);  
		console.log('scrolling...');
		console.log($what.scrollLeft());
		
		$('.showtee').hover(function(){
			$what.stop();
		}, function(){
			$what.stop().animate({
				scrollLeft: width + 'px'
			},speed, easing);
		})
	}
	
	$(window).on("scroll", function(){
		console.log($(this).scrollLeft());
	});
	
	var timerId;
	
	$rs.hover(function() {
	        timerId = setInterval(function() { 
		        $(window).scrollLeft($(window).scrollLeft()+1); 
		        //console.log("..");
		     }, 0);
	    },
	    function() { clearInterval(timerId); }
	);
		
	$st.mouseenter(function(e){
		lastelem = "#" + $(this).attr("id");
		tee = $(this).data("tee");
		_changetee($tb, tee);
	});
	
	$st.mousemove(function(e){
		//$teeb = $(this).find(".teebox");
		if(!$tb.is(":visible")){
			tee = $(this).data("tee");
			_showtee($tb, e, tee);
		} else {
			_movetee($tb, e);
		}
	});
	
	$st.mouseleave(function(e){
		//$tb.hide();
		if(_within(e, $tb)) {
			console.log("still here");
		} else {
			console.log("left");
			$tb.attr("data-elem", "");
			$tb.hide();
		}
	});
	
	$tb.mouseenter(function(e){
		
	});
	
	$tb.mouseleave(function(e){
		if(_within(e, $tb)) {
			console.log("still here");
		} else {
			console.log("left");
			$tb.attr("data-elem", "");
			$tb.hide();
		}
	});
	
});

function _showtee($tb, e, tee){
	$tb.css({
		top: (e.pageY - tbh) + 'px',
		left: (e.pageX) + 'px'
	});
	$img = $tb.find("img");
	$img.attr("src", assets + tee);
	$img.attr("data-elem", lastelem);
	$tb.show();
}

function _changetee($tb, tee) {
	$img = $tb.find("img");
	$img.attr("src", assets + tee);
}

function _within(mouse, $tb) {
	$elem = $(lastelem);
	var pos = $elem.offset();
	var top = pos.top;
	var left = pos.left;
	var right = pos.left + $elem.width();
	var bottom = pos.top + $elem.height();
	var x = mouse.pageX;
	var y = mouse.pageY;
	console.log(pos + " " + top + " " + bottom + " " + left + " " + right + " " + x + " " + y);
	
	if(x <= right && x >= left && y <= bottom && y >= top) {
		return true; 
	} else {
		return false;
	}
}

function _movetee($tb, e) {
	$tb.css({
		top: (e.pageY - tbh) + 'px',
		left: (e.pageX) + 'px'
	});
}

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
		high >= height ? newWidth = width : newWidth = Math.round(width * ratio);
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
	var marginTop = 0;
	var newML = 0;
	var ratio = 0;
	var MT = 0;
	var bgh = 0;
	var totalWidth = 0;
	if(debug) console.log("window: " + winWidth + " x " + winHeight);
	
	if(winHeight >= bgHeight) {
		bgh = bgHeight + 'px';
	} else {
		bgh = '100%';
	}
	
	$gs = $("#groupScroller");

	$elements.each(function(){
		$el = $(this);
		
		width = $el.data("width");
		height = $el.data("height");
		marginLeft = $el.data("marginleft");
		marginTop = $el.data("margintop");
		winHeight = size[1];
		if(winHeight >= bgHeight){
			newML = marginLeft;
		} else {
			newML = Math.round((winHeight/bgHeight) * marginLeft);
		}
		
		if(winHeight > height) {
			//top = Math.round((winHeight - height)/2);
			top = marginTop;
			newHeight = height;
			newWidth = width;
		} else {
			
			ratio = winHeight/bgHeight;
			newHeight = Math.round(height * ratio);
			newWidth = Math.round(width * ratio);
			top = Math.round(marginTop * ratio);
			/*top = Math.round(marginTop * winHeight/bgHeight);
			winHeight = winHeight;// - top;
			ratio = winHeight/height;
			//console.log(ratio);
			newHeight = Math.round(height * ratio);
			newWidth = Math.round(width * ratio);*/
		}
		
		$el.css('margin-top', top + 'px');
		$el.css('width', newWidth + 'px');
		$el.css('height', newHeight + 'px');
		$gr = $el.parent();
		$gr.css('margin-left', newML + 'px');
		$gr.css('width', newWidth + 'px');
		$gs.css('background-size', "auto " + bgh);
		
		if(debug) console.log($gr.attr('id') + ": winHeight: " + winHeight + ": newWidth: " + newWidth + " x newHeight:" + newHeight + " -> top: " + top + " -> ratio: " + ratio);
		
		console.log("totalWidth: " + totalWidth);
		
		totalWidth += (newWidth - newML);
		
			
	});
	
	$gs.css('width', totalWidth + 'px');
	
}

function _teesize($tb){
	$tb.height($tb.width() + 'px');
	tbh = $tb.height();
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
