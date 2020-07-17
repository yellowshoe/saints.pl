var hamburger = document.querySelector('.hamburger');
var active = document.querySelector('.navbar');
var hidden = document.querySelector('.body');

var handleClick = function handleClick() {
  hamburger.classList.toggle('hamburger--active');
  active.classList.toggle('navbar--active');
  hidden.classList.toggle('body--hidden');
    };

hamburger.addEventListener('click', handleClick);