// Main Js for site

////////////////////////////////////////////////////////////////////////////////

$('document').ready(function() {
    var origDocHeight = document.body.offsetHeight;
    var clone=$("body").contents().clone();
    clone.appendTo("body");
    clone.prependTo("body");
    console.log("1: " + origDocHeight)

    $(document).scroll(function(){
        var scrollWindowPos = $(document).scrollTop();
        console.log(scrollWindowPos)
        if(scrollWindowPos >= origDocHeight + 30) {
            $(document).scrollTop(0);
        }
        if(scrollWindowPos <= 0 ) {
             $(document).scrollTop(origDocHeight);
         }
    });
});
