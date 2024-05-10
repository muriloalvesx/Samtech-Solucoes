const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 500,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 150,
});
ScrollReveal().reveal(".section__header2", {
  ...scrollRevealOption,
  delay: 150,
});
ScrollReveal().reveal(".contact .section__header", {
  ...scrollRevealOption,
  delay: 150,
});
ScrollReveal().reveal(".section__header3", {
  ...scrollRevealOption,
  delay: 150,
});
ScrollReveal().reveal("Q.footer__container", {
  ...scrollRevealOption,
  delay: 150,
});
ScrollReveal().reveal(".section__header3", {
  ...scrollRevealOption,
  delay: 150,
});
ScrollReveal().reveal(".security__image", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".contact .contact-form", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 450,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".service__card", {
  duration: 600,
  interval: 300,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".trip__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".trip__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".trip__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".trip__content .section__header2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".trip__list li", {
  ...scrollRevealOption,
  delay: 300,
  interval: 150,
});

ScrollReveal().reveal(".client__content .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".client__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  autoHeight: true,
  slidesPerView: 1,
});
