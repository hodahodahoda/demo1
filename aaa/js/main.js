$(function(){
  // hamburger
  $('.hamburger').on('click', function() {
    $('.header').toggleClass('open');
    $('body').toggleClass('no-scroll');
  });
  /*
  $('.hamburger').on('click', function() {
    if ($('.header').hasClass('open')) {
      $('.header').removeClass('open');
      $('body').removeClass('no-scroll');
      $('body').css('top', '');
      window.scrollTo(0, parseInt($('body').css('top')) * -1);
    } else {
      var scrollTop = $(window).scrollTop();
      $('.header').addClass('open');
      $('body').addClass('no-scroll');
      $('body').css('top', -scrollTop + 'px');
    }
  });
  */

  $('#mask').on('click', function() {
    $('.header').removeClass('open');
    $('body').removeClass('no-scroll');
  })
});