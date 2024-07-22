const swiperThumb = new Swiper('.gift__swiper--thumb', {
  slidesPerView: 5,
  spaceBetween: 12,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 5,
      spaceBetween: 12,
    },
    1141: {
      spaceBetween: 16,
      slidesPerView: 6,
    }
  }
});

const swiperMain = new Swiper('.gift__swiper--card', {
  spaceBetween: 16,
  thumbs: {
    swiper: swiperThumb,
  } 
});
