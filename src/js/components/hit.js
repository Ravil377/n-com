import Swiper, { Navigation, Autoplay, Pagination, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

const swiper1 = new Swiper('.hit__slider-js', {
    slidesPerView: 1,
    breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 20
        }
    },
    navigation: {
        nextEl: ".hit-swiper-button-next",
        prevEl: ".hit-swiper-button-prev",
    }
});
  