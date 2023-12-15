$(function(){
  $(' header nav .gnb').hover(function(){
    $('.gnb li ul').stop().slideDown();
  }, function(){
    $('.gnb li ul').stop().slideUp();
  });
  
  setInterval(function(){
    $('.main_slide ul').animate({
      top:'-600px'
    },600, function(){
      $('.main_slide ul').append($('.main_slide ul li').eq(0));
      $('.main_slide ul').css({top:0});
    }
  )},3000);
  setInterval(function(){
    $('.review_slide ul').animate({
      left:'-1200px'
    },600, function(){
      $('.review_slide ul').append($('.review_slide ul li').eq(0));
      $('.review_slide ul').css({left:0});
    }
  )},3000);
  
  $('.bbs dl dt').click(function(){
  
    $('.bbs dl dt').removeClass('on');
    $(this).addClass('on');
    $('.bbs dl dd').addClass('hidden');
    $(this).next().removeClass('hidden');
    
  });
});
