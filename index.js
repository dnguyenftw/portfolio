"use strict";
(function() {

  // set-up code that doesn't involve the DOM
  //   (e.g. setting up initial values, arrays, etc.)

  window.onload = function() {
    // phew! your code goes here
    let facebooklink = $("facebook-link");
    let linkedin = $("linkedin-link");
    let dribbble = $("dribbble-link");
    let peakPage = $("peak-project");

    facebooklink.addEventListener('click', function() {
      openInNewTab("https://www.facebook.com/people/Daniel-Nguyen/100000871396662");
    }, false);

    linkedin.addEventListener('click', function() {
      openInNewTab("https://www.linkedin.com/in/danngu1998/");
    }, false);

    dribbble.addEventListener('click', function() {
      openInNewTab("https://dribbble.com/dnguyenftw");
    }, false);

    peakPage.addEventListener('click', function() {
      window.location.href = "peak.html";
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
