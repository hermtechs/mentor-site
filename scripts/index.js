//navingation
const navbars = document.querySelector(".nav-bars");
const smallLinksContainer = document.querySelector(".side-menu-links");
const sideMenulinks = document.querySelectorAll(".side-links a");

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
