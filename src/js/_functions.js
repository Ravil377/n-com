// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";


// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
import './functions/fix-fullheight';



// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

// Реализация табов
import GraphTabs from 'graph-tabs';
const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
    offset: 150,
  });

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map1", {
    center: [55.751244, 37.618423],
    zoom: 8
  });

  var clusterer = new ymaps.Clusterer();
  map.geoObjects.add(clusterer);

  var mapTab = document.querySelector('.map__tab-js');
  var starte = mapTab.querySelector('.activeadress');

  var findAddresses = function (addresses) {
    clusterer.removeAll();

    addresses.forEach(function (data) {
      var coordinates = data.coordinates;
      if (coordinates) {
        var marker = new ymaps.Placemark(coordinates, {
          balloonContent: data.balloonContent
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/placemark.png',
          iconImageSize: [37, 50],
          iconImageOffset: [-15, -15]
        });

        clusterer.add(marker);
      }
    });

    // // Если есть хотя бы один адрес, центрируем карту по первому адресу
    // if (addresses.length > 0) {
    //   map.setCenter(addresses[0].coordinates, 15);
    // }
  };

  // mapTab && mapTab.addEventListener('click', function (e) {
  //   if (e.target.classList.contains('map-tab-js')) {
  //     var ele = e.target;

  //     // Пример данных для нескольких адресов
  //     var multipleAddressesData = [
  //       {
  //         coordinates: [55.75217656899729,37.66865049999999],
  //         balloonContent: 'г. Москва, Дизайн-центр Artplay, ул. Нижняя Сыромятническая, д. 10, стр. 7'
  //       },
  //       {
  //         coordinates: [55.61922306910225,37.44080199999995],
  //         balloonContent: 'г. Москва, Саларьево, ул. Адмирала Корнилова, д. 61'
  //       },
  //       // Добавьте еще адресов при необходимости
  //     ];

  //     findAddresses(multipleAddressesData);
  //   }
  // });

  var multipleAddressesData = [
    {
      coordinates: [55.75217656899729,37.66865049999999],
      balloonContent: 'г. Москва, Дизайн-центр Artplay, ул. Нижняя Сыромятническая, д. 10, стр. 7'
    },
    {
      coordinates: [55.61922306910225,37.44080199999995],
      balloonContent: 'г. Москва, Саларьево, ул. Адмирала Корнилова, д. 61'
    },
  ];

  findAddresses(multipleAddressesData);
}


// validateForms('.form-1', rules1, afterForm);
