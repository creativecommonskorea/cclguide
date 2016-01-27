( function( $ ) {
  'use strict';

  function p_func() {
    // pc해상도에서 함수 실행
    
    // 목차 스크롤
    $('.chapter a').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 10 }, 500, 'linear');
    });
  }

  function m_func() {
    // 모바일 해상도에서 함수 실행

    // 셀렉트(mobile 탭메뉴)
    $(".js-select").on('change', function () {
      var selected = $(this).children("option:selected").text();
      $(this).prev(".label").text(selected);
      var url = $(this).val();
      if (url) { 
          window.location = url;
      }
      return false;
    });
  }

  
  var standard = 768, // 모바일 분기점
      is_mobile = 0,  // 너비 ex)0 = 해상도 768 이상, 1 = 768 미만
      sign = 0;       // 1 = 한 번 만 실행 후 중복실행 방지

  $(window).on('load resize', function(){
    if( $(window).innerWidth() >= standard ){
        if(is_mobile === 1){ 
            is_mobile = 0;
            sign = 0;
        }

        if(is_mobile === 0 && sign === 0){ 
            sign = 0;
            p_func();
        }

        // 메뉴 토글 해제
        if ( $(window).innerWidth() >= 1480 && $('body').hasClass('open')) {
          $('body').removeClass('open');
          $('#scrollTop').fadeOut('400');
        }

    } else { 
        if(is_mobile === 0){
            is_mobile = 1;
            sign = 0;
        }

        if(is_mobile === 1 && sign === 0){ 
            sign = 1;
            m_func();
        }
    }

  });

  $(document).ready(function() {

    // 메뉴 토글
    $('.navbar-toggle, #bg, .navbar-close').click(function(e){
        e.preventDefault();
        if ( $('body').hasClass('open') ) {
          $('body').removeClass('open');
        } else {
          $('body').addClass('open');
        }
    });

    // 검색
    $('.search-toggle').click(function(e){
        e.preventDefault();
        $('.search-form').toggleClass('open');
    });

    $('.search-form').submit(function(e){ e.preventDefault() });
    
    // 아코디언 리스트(FAQ)
    $('#accordion .post-title').click(function(){
      if ( $(this).parent('li').hasClass('open') ) {
        $(this).parent('li').removeClass('open');
        $(this).next('.post-content').slideUp();
      } else {
        $(this).parent('li').addClass('open');
        $(this).next('.post-content').slideDown();
      }
    });
    $('#accordion .btn-close').click(function(){
      if ( $(this).parents('li').hasClass('open') ) {
        $(this).parents('li').removeClass('open');
        $(this).parent('.post-content').slideUp();
      } else {
        $(this).parents('li').addClass('open');
        $(this).parent('.post-content').slideDown();
      }
    });

    // 맨 위로 버튼
    $(window).scroll( function () {
        var posH = $(window).scrollTop(); 
        if ( posH > 10 && !$('body').hasClass('open')) {
          $('#scrollTop').fadeIn('400');
        } else {
          $('#scrollTop').fadeOut('400');
        }
    });

    $('#scrollTop').click(function(e) {
      e.preventDefault();
      $('html,body').animate({ scrollTop: 0}, 'slow');
      return false;
    });

  });

} )( jQuery );
