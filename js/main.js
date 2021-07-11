$("document").ready(function () {
  $(window).on("scroll", function () {
    var scroll = window.scrollY;
    if (scroll > 10) {
      $(".app-header").addClass("sticky-header");
    } else {
      $(".app-header").removeClass("sticky-header");
    }
  });

  $(".mobile-menu-open-icon").on("click", function (e) {
    $(".mobile-menu").css("right", "0");
  });

  $(".close-btn-txt").on("click", function (e) {
    $(".mobile-menu").css("right", "-100%");
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    loop: false,
    rewind: true,
    navText: [
      "<img src='./images/left-arrow.png'>",
      "<img src='./images/right-arrow.png'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
