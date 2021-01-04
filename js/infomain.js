

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  // Special iPad css
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="https://thetahacks.tech/css/ipad2.css">'
  );
  document.getElementById('banner').style.display = "block"; 
}

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
if(isAndroid) {
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="https://thetahacks.tech/css/ipad2.css">'
  );
  document.getElementById('banner').style.display = "block"; 
}