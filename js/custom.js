$(function(){
  // 스무스 스크롤
  $('html').smoothScroll(300);
  // 스크롤시 헤더 디자인
  $(window).on('scroll',function(){
    var windowTop=$(window).scrollTop();
    if(windowTop>=100){
      $('header').addClass('active');
    }else{
      $('header').removeClass('active');
    }
  })
  // portfolio swiper style
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    }
  });
  
  // $('#skill').mouseover(function(){
  //   var perCent=0;
  //   var addper=setInterval(myTimer,10);
  //   function myTimer(){
  //     perCent++;
  //     if(perCent<=70){$('.progressper').text(perCent+'%');}
  //     else if(perCent<=80){$('.progressper01').text(perCent+'%');$('.progressper03').text(perCent+'%');}
  //     else if(perCent<=90){$('.progressper03').text(perCent+'%');}
  //     else{clearInterval(addper);}
  //   }
  // })
  // $('#skill').on('mouseleave',function(){
  //   $('.progressper').text('0%');
  // })

      
})