
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

  document.getElementById("daystamp").classList.add("animate__fadeIn")
  document.getElementById("timestamp").classList.add("animate__fadeIn")

}

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
  for (var lx=0, ly=0;
       el != null;
       lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return {x: lx,y: ly};
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
  console.log(document.getElementById("daystamp"))
  arrow.style.left = positions[time] + "%";

  // var width = document.getElementById("path-container").offsetWidth;
  // var startX = getPos(document.getElementById("path-container"))['x'];
  // console.log(startX + " " + width);
  // var halfway = (startX + (startX + width)) / 2;
  // console.log(startX + " " + width + " " + halfway);
  // arrow.style.left = halfway + "px";
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