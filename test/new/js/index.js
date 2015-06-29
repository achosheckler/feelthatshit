$('.group').mouseover(function() {
  $('.inner').animate({
    left: '-597%'
  },25000);  
});

$('.shrink').mouseleave(function() {
  $('.inner').stop(); 
});

$('.elem').mouseleave(function() {
  $('.inner').stop(); 
});
