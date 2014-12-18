    $(document).ready(function() {
      var elementsList = $('.region-list');
      elementsList.each(function(index){
        $(this).children('ul').slideUp('fast');
        $(this).click(function () {
          $(this).children('ul').slideToggle('fast');
        })
      });
    });
