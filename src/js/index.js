// // Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Portfolio-Swiper:
var swiper = new Swiper(".portfolioSwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
