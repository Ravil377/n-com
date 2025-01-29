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


let swiperInstances = []; // Массив для хранения всех экземпляров Swiper

function initSwipers() {
    // Уничтожаем все предыдущие Swiper
    swiperInstances.forEach(swiper => {
        if (swiper && swiper.destroy) {
            swiper.destroy(true, true);
        }
    });

    swiperInstances = []; // Очищаем массив

    // Находим все элементы с классом .swiper-cards-js и инициализируем их
    document.querySelectorAll(".swiper-cards-js").forEach((el, index) => {
        let swiperClass = `swiper-instance-${index}`;
        el.classList.add(swiperClass);

        // Создаём новый экземпляр Swiper и сохраняем его в переменную
        let swiper = new Swiper(`.${swiperClass}`, {
            effect: "fade",
            grabCursor: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // Добавляем созданный экземпляр в массив
        swiperInstances.push(swiper);
    });
}

// Инициализируем Swiper при загрузке страницы
document.addEventListener("DOMContentLoaded", initSwipers);

