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


const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};


scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  });
};
