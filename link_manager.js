var page_init_functions = {};

function go_to_page(link_target) {
  if (link_target == '/') {
    link_target = 'home';
  }
  $('#content').hide().load(link_target + '.html', function(res, status, xhr) {
    if (status == 'error') {
      $('#content').html('<p>Error: No page found. ' + xhr.statusText + '.');
    }
  }).fadeIn();
  if (page_init_functions[link_target]) {
    page_init_functions[link_target]();
  }
};

function init_links() {
  $(document).on('click', 'a', function(e) {
    var link = $(this);
    var link_target = link.attr('href');
    if (link_target.indexOf('http://') == 0 || link_target.indexOf('https://') == 0) {
      return true;
    } 
    e.preventDefault();
    go_to_page(link_target);
    return false;
  });
}