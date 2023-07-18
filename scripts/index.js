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

let iframe = document.querySelector("iframe");
let player = new Vimeo.Player(iframe);
let link = document.querySelector(".open-popup-link");
let shadowbox = document.querySelector(".vimeo-shadowbox");
let closeButton = document.querySelector(".vimeo-shadowbox__close-button");

player.on("ended", function () {
  hidePopup();
});

link.addEventListener("click", showPopup);
shadowbox.addEventListener("click", hidePopup);
closeButton.addEventListener("click", hidePopup);

function showPopup() {
  player.play();
  shadowbox.classList.remove("vimeo-shadowbox--hidden");
}
function hidePopup() {
  player.pause();
  shadowbox.classList.add("vimeo-shadowbox--hidden");
}

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

// clear all forms after loading the site
// const forms = document.querySelectorAll("form");
// forms.forEach((form) =>
//   form.addEventListener("submit", () => {
//     form.reset();
//   })
// );
document.addEventListener("DOMContentLoaded", () => {
  forms.forEach((form) => form.reset());
});
