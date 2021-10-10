export const params = {
  id: 'frame-slider',
  slidesPerView: 4,
  mousewheel: true,
  lazy: true,
  resizeObserver: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  freeMode: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
  },
};
