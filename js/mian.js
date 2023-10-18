;(function($){
    $(document).ready(function(){ 
      $('.single-image').hover(function(){
        var status = $(this).children('.hidden').css('visibility');
        var image_url = $(this).children('img').attr('src');
        if(status== 'hidden'){
          $(this).children('.hidden').css('visibility','visible');
          $('.modal-content > .single-image img').attr('src',image_url);
        }else{
          $('.hidden').css('visibility','hidden');

        }
      });
      $(window).scroll(function(){
        if(is_screen('.my-skill')){
          console.log('ture');
        }else{
          console.log('false');
        }


      });

      function is_screen(element){
        var element_distance = $(element).offset();
        var element_top = element_distance.top;
        var scroll_height = document.documentElement.scrollTop;
        var window_height =  $(window).innerHeight();
        var lenght = element_top - scroll_height;
        if(window_height<lenght){
          return false;
        }
        return true;    
      }
  })})(jQuery);
// type js plugin code here
  var typed = new Typed('#element', {
    strings: ['Wordpress Theme Developer', 'WordPress Plugin Developer','WordPress SEO Expert and Specialist'],
    typeSpeed: 100,
  });
