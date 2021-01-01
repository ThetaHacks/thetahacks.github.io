

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  // Special iPad css
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="https://thetahacks.tech/css/ipad2.css">'
  );
  document.getElementById('banner').style.display = "block"; 
} else {
  document.getElementById('banner').style.display = "none"; 
}