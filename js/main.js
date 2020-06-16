$(window).scroll(function (event) {
  var x = 1;
  $(".prof").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      if (x % 2 == 0) {
        if (!el.hasClass("slidefaderight")) {
          el.addClass("slidefadeleft");
        }
        console.log(x);
      } else {
        if (!el.hasClass("slidefadeleft")) {
          el.addClass("slidefaderight");
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
