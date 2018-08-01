$(document).ready(function(){

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

  $(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
});
