"use strict";
(function() {

  // set-up code that doesn't involve the DOM
  //   (e.g. setting up initial values, arrays, etc.)



  window.onload = function() {
    // phew! your code goes here
    let preloader = $("loading");
    setTimeout(function() {
      var op = 1;  // initial opacity
      var timer = setInterval(function () {
          if (op <= 0.1){
              clearInterval(timer);
              preloader.style.display = 'none';
          }
          preloader.style.opacity = op;
          preloader.style.filter = 'alpha(opacity=' + op * 100 + ")";
          op -= op * 0.1;
      }, 50);
    }, 400);
  };

  function $(id) {
    return document.getElementById(id);
  }

})();
