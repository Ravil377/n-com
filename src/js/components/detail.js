import Swiper, { Navigation, Autoplay, Pagination, EffectFade, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Thumbs]);

var mainSwiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: 'vertical',
});

var thumbnailSwiper = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  effect: "fade",
  thumbs: {
    swiper: mainSwiper,
  },
});


document.addEventListener("DOMContentLoaded", function () {
    var inputElement = document.querySelector(".calc input");
    var decreaseButton = document.querySelector(".calc button:first-child");
    var increaseButton = document.querySelector(".calc button:last-child");
  
    decreaseButton?.addEventListener("click", function () {
      updateValue(-1);
    });
  
    increaseButton?.addEventListener("click", function () {
      updateValue(1);
    });
  
    function updateValue(change) {
      var currentValue = parseInt(inputElement.value, 10);
      var newValue = currentValue + change;
  
      // Проверяем минимальное и максимальное значение
      if (newValue >= 1 && newValue <= 9999) {
        inputElement.value = newValue;
      }
    }
  
    // Дополнительно можно добавить обработчик для поля ввода,
    // чтобы ограничить ввод неправильных значений (например, букв)
    inputElement?.addEventListener("input", function () {
      var currentValue = parseInt(inputElement.value, 10);
  
      if (isNaN(currentValue) || currentValue < 1) {
        inputElement.value = 1;
      } else if (currentValue > 9999) {
        inputElement.value = 9999;
      }
    });
});
  
