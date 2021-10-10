export const params = {
  id: "frame-slider",
  spaceBetween: 10,
  freeMode: true,
  slidesPerView: 3.5,
  mousewheel: true,
  lazy: true,
  breakpoints: {
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};
