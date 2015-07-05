$('.inner').mouseover(function() {
  $('.inner').animate({
    scrollLeft: '14000px'
  },25000, 'easing');  
  console.log('scrolling...');
  //$('.outer').scrollLeft(5000);
});

$('.shrink').mouseleave(function() {
  $('.inner').stop(); 
});

$('.elem').mouseleave(function() {
  $('.inner').stop(); 
});
