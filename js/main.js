$(window).scroll(function (event) {
  var prev = "animate__fadeInLeft";
  var x = 0;
  $(".prof").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      if (prev === "animate__fadeInLeft") {
        if (!el.hasClass("animate__fadeInRight")) {
          el.addClass("animate__animated");
          el.addClass("slidefadeleft");
          el.addClass("animate__fadeInLeft");
          prev = "animate__fadeInRight";
        }
      } else {
        if (!el.hasClass("animate__fadeInLeft")) {
          el.addClass("animate__animated");
          el.addClass("slidefaderight");
          el.addClass("animate__fadeInRight");
          prev = "animate__fadeInLeft";
        }
      }
      x++;
    }
  });
});

$(function () {
  $(document).scroll(function () {
    var $title = $("#title-1");
    var $nav = $("#mainNav")
    if ($(this).scrollTop() <= $title.offset().top) {
      $nav.removeClass("scrolled");
      $nav.addClass("un-scrolled");
    } else {
      $nav.addClass("scrolled");
      $nav.removeClass("un-scrolled");
    }

  });
});
