$(document).ready(function(){
  AOS.init();
  
  $('.carousel').slick({
  arrows:false,
  centerMode:true,
  centerMode: true,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
  fade: true,
  cssEase:'linear',
  draggable:false,
  pauseOnFocus:false,
  pauseOnHover:false
  });

  $('.navbar-toggler').on('click', function () {
    $('.animated-icon4').toggleClass('open');
  });
});
