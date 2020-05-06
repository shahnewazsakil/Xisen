(function ($) {
  "use strict";

  //preloader
  $(window).on("load", function () {
    $("#loading").fadeOut(500);
  });

  //data - background
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  //sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
      if($(this).scrollTop() > 600){
          $('#scroll').fadeIn(200)
      } else{
          $('#scroll').fadeOut(200)
      }
    });

    //Animate the scroll to yop
    $('#scroll').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
  // meanmenu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991"
  });


  // testimonial slider
  $('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  
  // brand slider
  $('.brand-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });

  // wow active
  new WOW().init();
})(jQuery);
