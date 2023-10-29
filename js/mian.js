; (function ($) {
  $(document).ready(function () {
    //IMAGE HOVER EFFECT HERE
    $('.single-image').hover(function () {
      var status = $(this).children('.hidden').css('visibility');
      var image_url = $(this).children('img').attr('src');
      if (status == 'hidden') {
        $(this).children('.hidden').css('visibility', 'visible');
        $('.modal-content > .single-image img').attr('src', image_url);
      } else {
        $('.hidden').css('visibility', 'hidden');

      }
    });
    
    // IS SCREEN EVENT START HERE
    if (is_screen('.addanimation')) {
      $('.addanimation').addClass('progress-bar');
    }
    $(window).scroll(function () {
      if (is_screen('.addanimation')) {
        $('.addanimation').addClass('progress-bar');
      } else {
        $('.addanimation').removeClass('progress-bar');
      }


    });
 

    // CLICK EVENT HERE
    var display_item = 'all';
    var projecct_menu = $('.projecct-menu > ul > li');
    projecct_menu.each(function () {
      $(this).click(function () {
        var item_text = $(this).text();
        item_text = item_text.toLowerCase();
        item_text = item_text.split(" ").join('');
        if(display_item != item_text){
          $('.'+display_item).removeClass('img-show')
          $('.'+item_text).addClass('img-show');
          display_item = item_text;
        }
        // console.log(item_text);
      })

    });
    
    function is_screen(element) {
      var element_distance = $(element).offset();
      var element_top = element_distance.top;
      var scroll_height = document.documentElement.scrollTop;
      var window_height = $(window).innerHeight();
      var lenght = element_top - scroll_height;
      if (window_height < lenght) {
        return false;
      }
      return true;
    }
  })

  
})(jQuery);
// type js plugin code here
var typed = new Typed('#element', {
  strings: ['Wordpress Theme Developer', 'WordPress Plugin Developer', 'WordPress SEO Expert and Specialist'],
  typeSpeed: 100,
});
