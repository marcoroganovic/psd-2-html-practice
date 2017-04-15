(function($) {
  
  $('[data-toggle="tooltip"]').tooltip();
  var $top = $(".scroll-top-footer");

  $top.on("click", function(e) {
    $(window).scrollTop(0);
  });

  skrollr.init();
})(jQuery);
