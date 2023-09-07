  var swiper = new Swiper(".blog-news-detail .blog-news", {
    loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".blog-news-detail .blog-news + .swiper-button-next",
    prevEl: ".blog-news-detail .blog-news + .swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  });