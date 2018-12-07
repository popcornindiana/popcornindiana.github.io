// Main Js for site

////////////////////////////////////////////////////////////////////////////////
$( window ).on('load', resizeMasthead);
$( window ).on('resize', resizeMasthead);

function resizeMasthead() {
  var height = $( window ).height() - 180
  $('.masthead').height(height);
  console.log(height)
}

$('document').ready(function() {
    var origDocHeight = document.body.offsetHeight;
    var clone=$("body").contents().clone();
    clone.appendTo("body");
    clone.prependTo("body");

    $(document).scroll(function(){
        var scrollWindowPos = $(document).scrollTop();
        if(scrollWindowPos >= origDocHeight + 30) {
            $(document).scrollTop(0);
        }
        if(scrollWindowPos <= 0 ) {
             $(document).scrollTop(origDocHeight);
         }
    });
});
