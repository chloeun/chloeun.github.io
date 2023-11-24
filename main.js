new Swiper ('.__rightBanner .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.__rightBanner .swiper-pagination', 
    clickable: true
  },
  navigation: {
    prevEl: '.__rightBanner .swiper-prev',
    nextEl: '.__rightBanner .swiper-next'
  }
});  
new Swiper ('.main-menu .swiper-container', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 2000
  },
});  
new Swiper(".category .mySwiper", {
  // slidesPerView: 5,
  // centeredSlides: false,
  // slidesPerGroupSkip: 3,
  // grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 16
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});