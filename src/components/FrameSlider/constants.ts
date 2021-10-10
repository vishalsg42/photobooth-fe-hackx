export const params = {
  id: "frame-slider",
  spaceBetween: 10,
  slidesPerView: 4,
  mousewheel: true,
  lazy: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
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
