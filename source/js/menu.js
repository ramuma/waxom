'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.main-nav');
  var main = document.querySelector('.slider');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active');
  });

  var closeMenuHandler = function () {
    hamburger.classList.remove('is-active');
    menu.classList.remove('active');
  };

  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeMenuHandler();
    }
  };

  document.addEventListener('keydown', escPressHandler);
  main.addEventListener('click', closeMenuHandler);
}());
