"use strict";
//navingation
const navbars = document.querySelector(".nav-bars");
const smallLinksContainer = document.querySelector(".side-menu-links");
const sideMenulinks = document.querySelectorAll(".side-links a");
const closeOverlayBtn = document.querySelector(".close-overlay");
const overlay = document.querySelector(".contact-us-overlay");
const openContactUsOverlayBtn = document.querySelectorAll("#open-contact-us");

navbars.addEventListener("click", () => {
  if (navbars.classList.contains("rotate")) {
    navbars.classList.remove("rotate");
    smallLinksContainer.classList.add("show-mobile-menu");
  } else {
    navbars.classList.add("rotate");
    smallLinksContainer.classList.remove("show-mobile-menu");
  }
});

sideMenulinks.forEach((link) =>
  link.addEventListener("click", () => {
    navbars.classList.remove("rotate");
    smallLinksContainer.classList.add("show-mobile-menu");
  })
);

//video popup jquery code
$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});

//close overlay
closeOverlayBtn.addEventListener("click", () => {
  overlay.style.transform = "translateY(100%)";
});

openContactUsOverlayBtn.forEach((btn) => {
  btn.addEventListener("click", openAndCloseOverlay);
});

function openAndCloseOverlay() {
  overlay.style.transition = "320ms ease-in-out";
  overlay.style.transform = "translateY(100%)";

  overlay.style.transform === "translateY(100%)"
    ? (overlay.style.transform = "translateY(0%)")
    : (overlay.style.transform = "translateY(100%)");
}
