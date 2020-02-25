(function iamStrick() {
  "use strict";

  $(document).ready(function () {


    //  Counter Up On Scrolling
    $('.count_test').countUp({
      'time': 2000,
      'delay': 10
    });


    // Navigation Background Change on Scrolling
    $(window).scroll(function () {
      $('.menu_area').toggleClass('scrolled', $(this).scrollTop() > 800
      );
    });


    /* Scroll to Top Button Start */

    // https://codepen.io/karencho/pen/KIgur
    // declare variable
    var topBottomButton = $(".top_bottom_button");

    $(window).scroll(function () {

      // Declare Variable
      var topPosition = $(this).scrollTop(); // scrollTop is a jquery function

      // if user scrolls down - show scroll to top button
      if (topPosition > 900) {
        $(topBottomButton).css({
          "opacity": "1",
        })

      } else {
        $(topBottomButton).css({
          "opacity": "0",
        })
      }
    }); // Scroll End

    //Click event to scroll to top
    $(topBottomButton).on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;

    }); // click() scroll top end
    /* Scroll to Top Button End */


    /* News Slider Start */
    $('.news_slider').owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    /* News Slider End */

  });

})(); // use sctrict method end













