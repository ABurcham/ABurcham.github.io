$(document).ready(function(){
  AOS.init({
  duration: 1200,
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
