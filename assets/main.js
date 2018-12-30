// Main Js for site

////////////////////////////////////////////////////////////////////////////////
$( window ).on('load', resizeMasthead);
$( window ).on('resize', resizeMasthead);

var docHeight;
var num = 1;

function resizeMasthead() {
  var height = $( window ).height();
  $('.masthead').height(height - 180);
  $('.masthead__img').height(height - 120);

  var width = $('.masthead').width() - $('.masthead__img').width();
  $('.masthead__img').css('left', width/2)

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

function scrollImg(pos, counter) {
  var src = $('.pop__img').first().prop('src')

  num = Math.ceil(pos / (docHeight / 25));
  if ( num < 1 || num > 25 || isNaN(num) ) {
    num = 1;
  }
  if ( num > 24 && counter < 1) {
    showPopup();
  }
  var newSrc = src.substring(0, src.lastIndexOf("/") + 1) + 'pop' + num + '.png';
  $('.pop__img').attr('src', newSrc);
}

function showPopup() {
  $('.popup__overlay').first().css('display', 'block');
  $('.popup').first().css('display', 'block');
  $('.popup__button').css('display', 'none');
}

function hidePopup() {
  $('.popup__overlay').first().css('display', 'none')
  $('.popup').first().css('display', 'none');
  $('.popup__button').css('display', 'block');
}

$('document').ready(function() {
    var clone=$("body").contents().clone();
    clone.appendTo("body");

    var counter = 0;
    toggleVisible(false);

    $(document).scroll(function(){
      var scrollWindowPos = $(document).scrollTop();
      scrollImg(scrollWindowPos, counter);
      if(scrollWindowPos >= docHeight + 90) {
        $(document).scrollTop(0);
        counter += 1;
      }
      if(!elementInView($('.masthead').first())) {
        if (counter%2 == 0) {
          toggleVisible(true)
        } else {
          toggleVisible(false)
        }
      }
      if(counter >= 1) {
        $('.question__wrapper').css('visibility', 'hidden')
      }
    });

    $('.popup__overlay').first().click(function() {
      hidePopup();
    });
});
