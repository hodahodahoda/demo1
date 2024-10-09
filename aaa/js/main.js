$(function(){
  // hamburger
  $('.hamburger').on('click', function() {
    $('.header').toggleClass('open');
    // $('body').toggleClass('no-scroll');
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
    // $('body').removeClass('no-scroll');
  })

  // 電話リンクをクリックしたときはマスクを閉じないようにする
  $('#mask a[href^="tel:"]').on('click', function(e) {
    e.stopPropagation();  // クリックイベントの伝播を停止
  });
});


// 初期オフセットの設定
let offset = window.innerWidth <= 1170 ? 90 : 120;

// ウィンドウのリサイズ時にオフセットを更新
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1170) {
    offset = 90; // 768px以下の場合のヘッダーの高さ
    document.body.style.marginTop = "90px";
  } else {
    offset = 120; // 768px以上の場合のヘッダーの高さ
    document.body.style.marginTop = "120px";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    // スムーズスクロール
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});