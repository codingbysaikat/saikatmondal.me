;(function($){
    $(document).ready(function(){ 
      $('.single-image').hover(function(){
        var status = $(this).children('.hidden').css('visibility');
        if(status== 'hidden'){
          $(this).children('.hidden').css('visibility','visible');
        }else{
          $('.hidden').css('visibility','hidden');

        }
      })

  })})(jQuery);

  var typed = new Typed('#element', {
    strings: ['Wordpress Theme Developer', 'WordPress Plugin Developer','WordPress SEO Expert and Specialist'],
    typeSpeed: 100,
  });
