// Main Js for site

////////////////////////////////////////////////////////////////////////////////
$( window ).on('load', resizeMasthead);
$( window ).on('resize', resizeMasthead);

var offset;
var docHeight;
var num = 1;

function resizeMasthead() {
  var height = $( window ).height()
  $('.masthead').height(height - 180);
  $('.masthead__img').height(height - 120);

  var width = $('.masthead').width() - $('.masthead__img').width();
  $('.masthead__img').css('left', width/2)

  offset = $('.masthead').height();
  docHeight = $('.wrapper').height()
}

function toggleVisible(visible) {
  if (visible) {
    $('.masthead__img--branded').css('display', 'block');
    $('.masthead__img--covered').css('display', 'none');
    $('.masthead__details').css('display', 'block');
  } else {
    $('.masthead__img--branded').css('display', 'none');
    $('.masthead__img--covered').css('display', 'block');
    $('.masthead__details').css('display', 'none');
  }
}

function elementInView(elem) {
  return $(window).scrollTop() < $(elem).offset().top + $(elem).height() ;
}

function scrollImg(pos) {
  var src = $('.pop__img').first().prop('src')

  num = Math.ceil(pos / (docHeight / 25));
  if ( num < 1 || num > 25) {
    num = 1;
  }
  var newSrc = src.substring(0, src.lastIndexOf("/") + 1) + 'pop' + num + '.PNG';
  $('.pop__img').attr('src', newSrc);
}

$('document').ready(function() {
    var clone=$("body").contents().clone();
    clone.appendTo("body");

    var inView = true;
    var counter = 0;
    toggleVisible(false);

    $(document).scroll(function(){
      var scrollWindowPos = $(document).scrollTop();
      scrollImg(scrollWindowPos);
      if(scrollWindowPos >= docHeight + 90) {
        $(document).scrollTop(0);
        counter += 1;
      }
      if(elementInView($('.masthead').first())) {
        inView = true;
      } else {
        inView = false;
        if (counter%2 == 0) {
          toggleVisible(true)
        } else {
          toggleVisible(false)
        }
      }
    });
});
