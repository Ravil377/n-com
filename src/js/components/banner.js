import Swiper, { Navigation, Autoplay, Pagination, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

const swiper = new Swiper('.banner-swiper-js', {
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
  