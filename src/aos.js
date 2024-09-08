AOS.init();

import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splide = new Splide('.splide', {
  type: 'loop',
  autoScroll : {
    speed : 2,
    rewind: true,
    pauseOnHover:false,
  },
}).mount({ AutoScroll });








// script.js
// Отримати кнопку
const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

// Показувати/сховувати кнопку в залежності від прокрутки
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block'; // Показати кнопку
  } else {
    scrollToTopBtn.style.display = 'none'; // Сховати кнопку
  }
};

// Прокрутка до верху при натисканні на кнопку
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior:'smooth' // Плавна прокрутка
  });
};
