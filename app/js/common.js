$(function() {
  $('.header-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.reviews-slider').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.proj').click(function(e){
    e.preventDefault();
    $('.popup-wrapper.form').fadeIn().css('display', 'flex');
  });
  $('.popup-wrapper').click(function(e){
    $(this).fadeOut();
  });
  $('.popup-wrapper .close').click(function(e){
    e.preventDefault();
    $('.popup-wrapper').fadeOut();
  });
  $('.popup-wrapper .form').click(function(e){
    e.stopPropagation();
  });

  $('.s-gallery .nav a').click(function(e){
    e.preventDefault();
    $('.s-gallery .nav a').removeClass('active');
    $(this).addClass('active');
    var show = $(this).attr('data-show');
    $('.s-gallery .gallery').css('display', 'none');
    $('.s-gallery .gallery.' + show).css('display', 'block');
  });

  $('.fancybox').fancybox({
    loop: true,
    buttons: ['fullScreen', 'thumbs', 'close'],
    clickContent: function(current, event) {
      return current.type === 'image' ? 'next' : false;
    },
    i18n : {
      'en' : {
        CLOSE       : 'Закрыть',
        NEXT        : 'Вперед',
        PREV        : 'Назад',
        ERROR       : 'Произошла ошибка! <br/> Попробуйте позднее.',
        PLAY_START  : 'Слайдшоу',
        PLAY_STOP   : 'Остановить',
        FULL_SCREEN : 'На весь экран',
        THUMBS      : 'Миниатюры'
      }
    }
  });
  $('form.mail').submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
      th.trigger("reset");
    });
    return false;
  });
  $('.popup-wrapper .mail .button').click(function(e){
    e.preventDefault();
    $('.popup-wrapper form.mail').submit();
  });
  $('[data-gallery]').click(function(e){
    var data = $(this).attr('data-gallery');
    e.preventDefault();
    $('.fancybox.main[data-fancybox="' + data + '"]').click();
  });
});
