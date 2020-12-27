var isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf("Apple") > -1 &&
  navigator.userAgent;

if (isSafari) {
  // Special iPad css
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="css/ipad2.css">'
  );
}