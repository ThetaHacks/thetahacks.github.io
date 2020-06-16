$(window).scroll(function (event) {
  var prev = "animate__fadeInRight";
  $(".prof").each(function (i, el) {
    var el = $(el);
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
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
