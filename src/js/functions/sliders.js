import Swiper from "swiper";

export const sliders = () => {
  let reviewSlider = new Swiper(".testimonials__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".testimonials__button-next",
      prevEl: ".testimonials__button-prev",
    },
    pagination: {
      el: ".testimonials__pagination",
      type: "fraction",
    },
    breakpoints: {
      992: {
        spaceBetween: 30,
        slidesPerView: 1.5,
      },
    },
  });

  const priceSlider = new Swiper(".price__slider", {
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1.25,
        centerInsufficientSlides: true
      },
      768: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
};
