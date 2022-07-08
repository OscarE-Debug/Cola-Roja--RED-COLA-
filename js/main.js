// *Grab dom elements of navbar responsive

let navbarMobile = document.querySelector(".navigation-mobile");
let buttonOpenNav = document.querySelector(".bi-list");

// *Window event listener window width

window.addEventListener("resize", () => {
  windowWidth = screen.width;
  if (windowWidth > 492) {
    navbarMobile.classList.remove("navigation-mobile");
  } else {
    navbarMobile.classList.add("navigation-mobile");
  }
});

window.addEventListener("load", () => {
  windowWidth = screen.width;
  if (windowWidth > 492) {
    navbarMobile.classList.remove("navigation-mobile");
  } else {
    navbarMobile.classList.add("navigation-mobile");
  }
});

// *Navbar open

buttonOpenNav.addEventListener("click", () => {
  navbarMobile.classList.toggle("active");
});

// *Scrollreveal config

ScrollReveal({
  delay: 300,
  distance: "0px",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "bottom",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: true,
  useDelay: "always",
  viewFactor: 0.0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  afterReset: function (el) {},
  afterReveal: function (el) {},
  beforeReset: function (el) {},
  beforeReveal: function (el) {},
});

ScrollReveal().reveal(".item-reveal");
ScrollReveal({
  delay: 500,
}).reveal(".image-reveal-1");
ScrollReveal({
  delay: 700,
}).reveal(".image-reveal-2");

// *Hero items reveal

ScrollReveal({
  scale: 0.7,
}).reveal(".background-items-hero.item-1");

ScrollReveal({
  delay: 500,
  scale: 0.7,
}).reveal(".background-items-hero.item-2");

ScrollReveal({
  rotate: {
    x: 0,
    y: 0,
    z: 200,
  },
  distance: "500px",
  origin: "left",
  delay: 700,
  scale: 0.5,
}).reveal(".decoration-item-hero");

ScrollReveal({
  delay: 900,
}).reveal(".products-hero");
