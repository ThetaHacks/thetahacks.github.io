console.log("This is ThetaHacks");

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  // Special iPad css
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="css/ipad.css">'
  );
  document.getElementById("banner").style.display = "block";
}

window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

console.log(window.mobileCheck());

if (window.mobileCheck()) {
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="css/ipad.css">'
  );
  document.getElementById("banner").style.display = "block";
}

function showSVG() {
  var path = document.querySelector(".mainpath");
  var length = path.getTotalLength();

  path.style.transition = path.style.WebkitTransition = "none";
  path.style.visibility = "visible";

  path.style.strokeDasharray = length + " " + length;
  path.style.strokeDashoffset = length;

  path.getBoundingClientRect();

  path.style.transition = path.style.WebkitTransition =
    "stroke-dashoffset 2s ease-in-out";

  path.style.strokeDashoffset = "0";

  path = document.querySelector(".arrowpath");
  length = path.getTotalLength();

  path.style.transition = path.style.WebkitTransition = "none";
  path.style.visibility = "visible";

  path.style.strokeDasharray = length + " " + length;
  path.style.strokeDashoffset = length;

  path.getBoundingClientRect();

  path.style.transition = path.style.WebkitTransition =
    "stroke-dashoffset 2s ease-in-out";

  path.style.strokeDashoffset = "0";
}

$(document).ready(function () {
  // Calculate heights for FAQ
  var mobOnly = document.querySelector(".mobile-only");
  var notMob = document.querySelector(".not-mobile");
  mobOnly.style.display = "inline-block";
  notMob.style.display = "inline-block";
  $(".desc").each(function (index) {
    $(this).data("height", $(this).height());
  });

  $(".desc").height("0px");

  showFaqBeginning();
});

function bindFaq() {
  $(".proftitle").click(function () {
    $(this).parent().toggleClass("active");
    var content = $(this).parent().find(".desc");
    if (content.css("height") !== "0px") {
      // Close
      content.css("height", "0px");
      content.css("margin-bottom", "0px");
      $(this).children("span").css("transform", "rotate(0deg)");
    } else {
      // Open
      content.css("height", content.data("height"));
      content.css("margin-bottom", "30px");
      $(this).children("span").css("transform", "rotate(90deg)");
    }
  });
}

bindFaq();

function showFaq() {
  var arrow = document.querySelector("#show-faq-button");
  var mobOnly = document.querySelector(".mobile-only");
  var notMob = document.querySelector(".not-mobile");
  if (arrow.style.transform !== "rotate(0deg)") {
    // Close
    arrow.style.transform = "rotate(0deg)";
    mobOnly.style.display = "none";
    notMob.style.display = "none";
  } else {
    // Open
    arrow.style.transform = "rotate(90deg)";
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
  var mobOnly = document.querySelector(".mobile-only");
  var notMob = document.querySelector(".not-mobile");
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
      el.addClass("animate__fadeIn");
    }
  });
});

var scheduleDone = false;

$.fn.isolatedScroll = function () {
  this.bind("mousewheel DOMMouseScroll", function (e) {
    var delta =
        e.wheelDelta ||
        (e.originalEvent && e.originalEvent.wheelDelta) ||
        -e.detail,
      bottomOverflow =
        this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
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
    var $nav = $("#mainNav");
    if ($(this).scrollTop() <= $title.offset().top) {
      $nav.removeClass("scrolled");
      $nav.addClass("un-scrolled");
    } else {
      $nav.addClass("scrolled");
      $nav.removeClass("un-scrolled");
    }
  });
});

var shiftDay = "Saturday 1/16";

function shiftBackward() {
  if (shiftDay == "Saturday 1/16") {
    shiftDay = "Friday 1/15";
    document.getElementById("day").innerHTML = "Friday 1/15";
    document.getElementById("schedSat").style.display = "none";
    document.getElementById("schedFri").style.display = "block";
  } else if (shiftDay == "Friday 1/15") {
    shiftDay = "Monday 1/18";
    document.getElementById("day").innerHTML = "Monday 1/18";
    document.getElementById("schedFri").style.display = "none";
    document.getElementById("schedMon").style.display = "block";
  } else if (shiftDay == "Monday 1/18") {
    shiftDay = "Sunday 1/17";
    document.getElementById("day").innerHTML = "Sunday 1/17";
    document.getElementById("schedMon").style.display = "none";
    document.getElementById("schedSun").style.display = "block";
  } else if (shiftDay == "Sunday 1/17") {
    shiftDay = "Saturday 1/16";
    document.getElementById("day").innerHTML = "Saturday 1/16";
    document.getElementById("schedSun").style.display = "none";
    document.getElementById("schedSat").style.display = "block";
  }
}

function shiftForward() {
  if (shiftDay == "Saturday 1/16") {
    shiftDay = "Sunday 1/17";
    document.getElementById("day").innerHTML = "Sunday 1/17";
    document.getElementById("schedSat").style.display = "none";
    document.getElementById("schedSun").style.display = "block";
  } else if (shiftDay == "Sunday 1/17") {
    shiftDay = "Monday 1/18";
    document.getElementById("day").innerHTML = "Monday 1/18";
    document.getElementById("schedSun").style.display = "none";
    document.getElementById("schedMon").style.display = "block";
  } else if (shiftDay == "Monday 1/18") {
    shiftDay = "Friday 1/15";
    document.getElementById("day").innerHTML = "Friday 1/15";
    document.getElementById("schedMon").style.display = "none";
    document.getElementById("schedFri").style.display = "block";
  } else if (shiftDay == "Friday 1/15") {
    shiftDay = "Saturday 1/16";
    document.getElementById("day").innerHTML = "Saturday 1/16";
    document.getElementById("schedFri").style.display = "none";
    document.getElementById("schedSat").style.display = "block";
  }
}

$(".volunteer-container").flickity({
  cellAlign: "left",
  contain: true,
  groupCells: "80%",
  autoPlay: 2500,
  wrapAround: true,
});

function getTime(countdownTime) {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countdownTime - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return (
    days +
    "d " +
    " • " +
    hours +
    "h " +
    " • " +
    minutes +
    "m " +
    " • " +
    seconds +
    "s "
  );
}

function getDistance(countdownTime) {
  var now = new Date().getTime();
  distance = countdownTime - now;
}
console.log("Hello World");
function signupCountDown() {
  // var amongUsHypeNight = new Date("Jan 15, 2021 21:00:00").getTime() - 8;
  // var openingCermony = new Date("Jan 16, 2021 10:00:00").getTime() - 8;
  // console.log("1");
  // console.log(getDistance(amongUsHypeNight));
  // console.log("2");
  // document.getElementById("registerBy").innerHTML =
  //   "Among Us Hype Night Starts in:  " + getTime(amongUsHypeNight);
  // else if (getDistance(openingCermony) > 0) {
  //   document.getElementById("registerBy").innerHTML =
  //     "Opening Ceremony Starts in:  " + getTime(openingCermony);
  //   console.log("3");
  // }
}
// var eventCountDown = setInterval(function () {}, 1000);
var run = setInterval(signupCountDown, 100);
