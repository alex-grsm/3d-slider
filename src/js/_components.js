import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {

  const showSlider = new Swiper('.showcase-carousel', {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: '.showcase-navigation__next',
      prevEl: '.showcase-navigation__prev',
    },
  });

  document.querySelector('video').playbackRate = 2;

});
