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
