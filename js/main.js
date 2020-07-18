var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
  navigator.userAgent;

if (isSafari) {
  $('head').append('<link rel="stylesheet" type="text/css" href="css/ipad.css">');
}


function showSVG() {
  var path = document.querySelector('.mainpath');
  var length = path.getTotalLength();

  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.visibility = "visible";

  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;

  path.getBoundingClientRect();

  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';

  path.style.strokeDashoffset = '0';

  path = document.querySelector('.arrowpath');
  length = path.getTotalLength();

  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.visibility = "visible";

  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;

  path.getBoundingClientRect();

  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';

  path.style.strokeDashoffset = '0';

}



$(document).ready(function () {
  // Calculate heights
  var mobOnly = document.querySelector('.mobile-only');
  var notMob = document.querySelector('.not-mobile');
  mobOnly.style.display = "inline-block";
  notMob.style.display = "inline-block";
  $(".desc").each(function (index) {
    $(this).data("height", $(this).height())
  });

  $(".desc").height('0px');

  showFaqBeginning();
});

function bindFaq() {
  $(".proftitle").click(function () {
    $(this).parent().toggleClass("active");
    var content = $(this).parent().find(".desc");
    if (content.css("height") !== '0px') {
      // Close
      content.css("height", '0px');
      content.css("margin-bottom", "0px");
      $(this).children('span').css('transform', 'rotate(0deg)')
    } else {
      // Open
      content.css("height", content.data("height"));
      content.css("margin-bottom", "30px");
      $(this).children('span').css('transform', 'rotate(90deg)')
    }
  });
}

bindFaq();

function showFaq() {
  var arrow = document.querySelector('#show-faq-button');
  var mobOnly = document.querySelector('.mobile-only');
  var notMob = document.querySelector('.not-mobile');
  if (arrow.style.transform !== 'rotate(0deg)') {
    arrow.style.transform = 'rotate(0deg)';
    mobOnly.style.display = "none";
    notMob.style.display = "none";
  } else {
    arrow.style.transform = 'rotate(90deg)';
    if ($(document).width() <= 992) {
      mobOnly.style.display = "inline-block";
      notMob.style.display = "none";
    } else {
      notMob.style.display = "inline-block";
      mobOnly.style.display = "none";
    }
  }
}

function showFaqBeginning() {
  var mobOnly = document.querySelector('.mobile-only');
  var notMob = document.querySelector('.not-mobile');
  // Show correct faq on load
  if ($(document).width() <= 992) {
    mobOnly.style.display = "inline-block";
    notMob.style.display = "none";
  } else {
    notMob.style.display = "inline-block";
    mobOnly.style.display = "none";
  }
}


$(window).resize(function () {
  // Don't show same animations when resizing
  $(".prof").each(function (i, el) {
    var el = $(el);
    if (el.hasClass("animate__animated")) {
      // el.removeClass("animate__animated");
      el.removeClass("animate__fadeInLeft");
      el.removeClass("animate__fadeInRight");
      el.addClass("animate__fadeIn")
    }
  });

  var arrow = document.querySelector('#show-faq-button');
  var mobOnly = document.querySelector('.mobile-only');
  var notMob = document.querySelector('.not-mobile');
  if (arrow.style.transform === 'rotate(0deg)') {
    mobOnly.style.display = "none";
    notMob.style.display = "none";
  } else {
    if ($(document).width() <= 992) {
      mobOnly.style.display = "inline-block";
      notMob.style.display = "none";
    } else {
      notMob.style.display = "inline-block";
      mobOnly.style.display = "none";
    }
  }
});

var scheduleDone = false;

$.fn.isolatedScroll = function () {
  this.bind('mousewheel DOMMouseScroll', function (e) {
    var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
      bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
      topOverflow = this.scrollTop <= 0;

    if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
      e.preventDefault();
    }
  });
  return this;
};

$(window).scroll(function (event) {
  var prev = "animate__fadeInLeft";
  $(".prof").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      if (prev === "animate__fadeInLeft") {
        if (!el.hasClass("animate__animated")) {
          el.addClass("animate__animated");
          el.addClass("animate__fadeInLeft");
          prev = "animate__fadeInRight";
        }
      } else {
        if (!el.hasClass("animate__animated")) {
          el.addClass("animate__animated");
          el.addClass("animate__fadeInRight");
          prev = "animate__fadeInLeft";
        }
      }
    }
  });

  $(".schedule").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      if (!scheduleDone) {
        showSVG();
        scheduleDone = true;
      }
    }
  });
  //$('.svg-container').isolatedScroll();
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

function shift() {
  if (document.getElementById("day").innerHTML == "Saturday") {
    document.getElementById("day").innerHTML = " Sunday ";
    document.getElementById("sched1").style.display = "none";
    document.getElementById("sched2").style.display = "block";
  } else {
    document.getElementById("day").innerHTML = "Saturday";
    document.getElementById("sched2").style.display = "none";
    document.getElementById("sched1").style.display = "block";
  }
}

function getPos(el) {
  for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return { x: lx, y: ly };
}

positions = {
  "9:00": 1,
  "10:00": 4,
  "11:00": 7,
  "12:30": 11,
  "7:15": 15,
  "9:30": 16.2,
  "10:30": 17.3,
  "12:00": 18,
  "1:30": 20,
  "7:00": 24,
  "7:30": 25,
  "8:00": 28,
  "9:35": 33,
  "10:15": 35.5
};


function doThis() {
  let timeEl = this.querySelector('td');
  let time = timeEl.innerText.split(" ")[0];
  var arrow = document.getElementsByClassName("arrow-container")[0];
  document.getElementById("timestamp").innerText = timeEl.innerText;
  document.getElementById("timestamp").style.left = positions[time] + "%";
  if (positions[time] >= 18) {
    document.getElementById("daystamp").innerHTML = "Sunday";
  } else {
    document.getElementById("daystamp").innerHTML = "Saturday";
  }
  document.getElementById("daystamp").style.left = positions[time] + "%";
  arrow.style.left = positions[time] + "%";

  var rect = document.getElementById("sched-line").getBoundingClientRect();
  var left = document.getElementById("path-container").offsetLeft;
  console.log(left + (rect.width / 2));
  arrow.style.left = left + (rect.width / 2);
}

function onRowClick(tableClass) {
  var table = document.getElementsByClassName(tableClass);


  var rows = table[0].getElementsByTagName("tr");
  var i;
  for (i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', doThis.bind(rows[i]));
  }

  rows = table[1].getElementsByTagName("tr");
  var x;
  for (x = 0; x < rows.length; x++) {
    rows[x].addEventListener('click', doThis.bind(rows[x]));

  }
};

onRowClick("schedule1");
document.getElementById("timestamp").style.left = "1%";
document.getElementById("timestamp").innerText = "9:00 AM"


document.getElementById("daystamp").style.left = "1%";
document.getElementById("daystamp").innerText = "Saturday";

function calcHyperlinkPos() {
  // Set hyperlinks to be at the correct positions
  // Avoid stuff being covered up by the navbar
  $(".hyperlink").css("top", '-' + $(".navbar").css("height"));
}
calcHyperlinkPos();

$("#table-saturday tr").click(function() {
  var selected = $(this).hasClass("highlight");
  $("#table-saturday tr").removeClass("highlight");
  if(!selected)
          $(this).addClass("highlight");
});