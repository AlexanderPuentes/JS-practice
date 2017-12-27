

function stickyDiv() {
    var $div = $("#the-target");
    if ($(window).scrollTop() > $div.data("top")) {
        $('#the-target').css({'position': 'fixed', 'top': '0', 'width': '100%'});
    } else {
        $('#the-target').css({'position': 'static', 'top': 'auto', 'width': '100%'});
    }
}

$("#the-target").data("top", $("#the-target").offset().top);
$(window).scroll(stickyDiv);


//////////////////////////////////////////////////////

/*
document.querySelector('#the-target').addEventListener('scroll', function(){
  if ($(window).scrollTop() > '#the-target') {
    $('#the-target').css({'position': 'fixed', 'top': 'auto', 'width': '100%'});
} else {
    $('#the-target').css({'position': 'none', 'top': 'auto', 'width': '100%'});
}
});
*/

/////////////////////////////////////////////////////

/*
jQuery(document).ready(function() {

  var holderOffset = jQuery("#the-target").offset().top

  jQuery("the-target").wrap('<div class="page-ads"></div>');
  jQuery(".page-ads").height(jQuery("#the-target").outerHeight());

  jQuery(window).scroll(function() {
    var scrollPos = jQuery(window).scrollTop();

    if (scrollPos >= holderOffset) {
      jQuery("#the-target").addClass("fixed");
    } else {
      jQuery("#the-target").removeClass("fixed");
    }

  });

});
*/

///////////////////////////////////////////////////////

/*
var holder = this;

$.fn.followTo = function ( elem ) {
    var $this = this,
        $window = $(holder),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function(){
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    // top: 0
                    top: (bumperPos - thisHeight)
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
        };
    $window.resize(function()
    {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });
    $window.scroll(setPosition);
    setPosition();
};

$('#the-target').followTo('#stop-target');
*/
