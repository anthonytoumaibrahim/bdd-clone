const siteHeader = document.getElementById("site-header");
const headerScroll = document.getElementById("header-scroll");
const headerLogo = document.querySelector("#site-header .logo");
const hero = document.querySelector(".hero-glide");
const scrollToTopButton = document.querySelector(".scroll-to-top");

// Hero Carousel
new Glide(".hero-glide", {
  type: "slider",
  autoplay: 3000,
  hoverpause: false,
}).mount();

// Videos Carousel
new Glide(".videos-glide", {
  type: "carousel",
  perView: 3,
  // autoplay: 3000,
  breakpoints: {
    1024: {
      perView: 2,
    },
    767: {
      perView: 1,
    },
  },
}).mount();

// Using an IntersectionObserver to make the header fixed after scroll
const headerObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      siteHeader.classList.toggle("header-compact", !entry.isIntersecting);
      siteHeader.classList.toggle("slideInDown", !entry.isIntersecting);
      headerLogo.src = !entry.isIntersecting
        ? "./assets/images/logo-compact.png"
        : "./assets/images/logo.png";
    }),
  {
    root: null,
    threshold: 0,
    rootMargin: `${siteHeader.clientHeight}px`,
  }
);
headerObserver.observe(headerScroll);

// Using an IntersectionObserver to show the scroll to top button
const scrollToTopObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) =>
      scrollToTopButton.classList.toggle("hide", entry.isIntersecting)
    ),
  {
    root: null,
    threshold: 0.7,
  }
);
scrollToTopObserver.observe(hero);
