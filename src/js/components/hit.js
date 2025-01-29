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
  
document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы с классом .swiper-cards-js
  document.querySelectorAll(".swiper-cards-js").forEach((el, index) => {
      // Добавляем уникальный класс каждому контейнеру
      let swiperClass = `swiper-instance-${index}`;
      el.classList.add(swiperClass);

      // Создаём новый экземпляр Swiper
      new Swiper(`.${swiperClass}`, {
          effect: "fade",
          grabCursor: true,
          loop: true,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  });
});
