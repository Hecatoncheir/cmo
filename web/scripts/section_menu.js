    $(document).ready(function() {
      var elementsList = $('.sub-section');
      elementsList.each(function(index){
        $(this).children('ul').slideUp('fast');
        $(this).click(function () {
          $(this).children('ul').slideToggle('fast');
        })
      });
    });
