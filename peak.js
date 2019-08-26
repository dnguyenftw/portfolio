"use strict";
(function() {

  // set-up code that doesn't involve the DOM
  //   (e.g. setting up initial values, arrays, etc.)

  window.onload = function() {
    // phew! your code goes here
    var sidebarbutton = $("sidebarCollapse");
    var sidebar = $("sidebar");
    var homelogo = $("contactlogo");
    sidebarbutton.addEventListener('click', function() {
      sidebar.classList.toggle("active");
    }, false);

    homelogo.addEventListener('click', function() {
      window.location.href = "index.html";
    }, false);
  };

  function openInNewTab(url) {
	   window.open(url, '_blank');
     win.focus();
  }

  function $(id) {
    return document.getElementById(id);
  }

  function $$(query) {
    return document.querySelectorAll(query);
  }
})();
