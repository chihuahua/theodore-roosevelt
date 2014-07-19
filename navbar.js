function init_navbar() {
  $('.navbar li').hover(function() {
    $('ul', this).fadeIn(); 
  }, function() {
    $('ul', this).fadeOut(); 
  });
}