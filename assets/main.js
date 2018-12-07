// Main Js for site

////////////////////////////////////////////////////////////////////////////////
var visible = false;

$( window ).on('load', resizeMasthead);
$( window ).on('resize', resizeMasthead);
$( window ).on('load', toggleVisible);

function resizeMasthead() {
  var height = $( window ).height()
  $('.masthead').height(height - 180);
  $('.masthead__img').height(height - 90);
}

function toggleVisible() {
  if (visible) {
    $('#masthead__img--branded').css('display', 'block');
    $('#masthead__img--covered').css('display', 'none');
    $('#masthead__details').css('display', 'block');
  } else {
    $('#masthead__img--branded').css('display', 'none');
    $('#masthead__img--covered').css('display', 'block');
    $('#masthead__details').css('display', 'none');
  }
}

$('document').ready(function() {
    var origDocHeight = document.body.offsetHeight;
    var clone=$("body").contents().clone();
    var offset = 300;
    clone.appendTo("body");
    clone.prependTo("body");

    $(document).scroll(function(){
    var scrollWindowPos = $(document).scrollTop();
    if(scrollWindowPos >= origDocHeight) {
      // temporarily disabled
      // $(document).scrollTop(0);
    }
    if(scrollWindowPos <= 0 ) {
      // temporarily disabled
      // $(document).scrollTop(origDocHeight);
    }
    if(scrollWindowPos >= origDocHeight - offset) {
      toggleVisible()
     }
    if(scrollWindowPos <= 0 ) {
      toggleVisible()
    }
    });
});
