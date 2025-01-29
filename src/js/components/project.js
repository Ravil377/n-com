import Swiper, { Navigation, Autoplay, Pagination, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

const swiper2 = new Swiper('.project__slider-js', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 16
        }
    }
});

const swiperProjjj = new Swiper('.project-detail__slider-js', {
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-nextproj',
    prevEl: '.swiper-button-prevproj',
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
  