

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  // Special iPad css
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="css/ipad2.css">'
  );
}