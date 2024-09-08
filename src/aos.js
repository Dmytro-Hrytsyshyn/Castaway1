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
