document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.modal__tabs-js button');
    var formContainers = document.querySelectorAll('.modal__content');
  
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var targetFormId = button.getAttribute('data-id');
  
        // Скрыть все формы
        formContainers.forEach(function (container) {
          container.classList.remove('_active');
        });
  
        // Показать выбранную форму
        document.getElementById(targetFormId).classList.add('_active');
  
        // Снять выделение со всех кнопок
        tabButtons.forEach(function (tabButton) {
          tabButton.classList.remove('_active');
        });
  
        // Выделить выбранную кнопку
        button.classList.add('_active');
      });
    });
  });
  