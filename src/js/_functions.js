// Фикс фулскрин-блоков
import './functions/fix-fullheight';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

// Реализация табов
import GraphTabs from 'graph-tabs';
const isTabs = document.querySelector('.tabs');
var tabs;
if(isTabs) {
  tabs = new GraphTabs('tab');
}

// Подключение плавной прокрутки к якорям
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
    offset: 150,
  });

const isMap = document.querySelector('.map1');
isMap && ymaps.ready(init);

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

