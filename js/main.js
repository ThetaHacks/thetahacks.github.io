$(window).scroll(function (event) {
  var x = 1;
  $(".prof").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      if (x % 2 == 0) {
        if (!el.hasClass("animate__fadeInRight")) {
          el.addClass("animate__animated");
          el.addClass("slidefadeleft");
          el.addClass("animate__fadeInLeft");
        }
        console.log(x);
      } else {
        if (!el.hasClass("animate__fadeInLeft")) {
          el.addClass("animate__animated");
          el.addClass("slidefaderight");
          el.addClass("animate__fadeInRight");
        }
        console.log(x);
      }
      x++;
    }
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
