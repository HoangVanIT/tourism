// Thêm sự kiện lắng nghe khi trang web được tải
window.addEventListener('load', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const swiperBanner = new Swiper(".slider-content", {
  loop: true,
  speed: 1000,
  // autoplay: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperFeaturedTour = new Swiper(".featured-tour-slider", {
  direction: "horizontal",
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 33,
    },
  },
  navigation: {
    nextEl: ".bestSeller-next",
    prevEl: ".bestSeller-prev",
  },
});

const swiperComboTour = new Swiper(".combo-tour-slider", {
  direction: "horizontal",
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".bestSeller-next",
    prevEl: ".bestSeller-prev",
  },
});

const swiperImgVideo = new Swiper(".img-video-slider", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".bestSeller-next",
    prevEl: ".bestSeller-prev",
  },
});

const swiperGalleryGrid = new Swiper(".gallery-grid-slider", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: ".bestSeller-next",
    prevEl: ".bestSeller-prev",
  },
});


//quantity
const plusbtn = document.querySelectorAll(".plus");
plusbtn.forEach((plus) => {
  plus.addEventListener("click", () => {
    const quantity = plus.parentElement.querySelector(".qty");
    quantity.value = parseInt(quantity.value) + 1;
  });
});

const swiperRelated = new Swiper(".related-product", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 28,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const minusbtn = document.querySelectorAll(".minus");
minusbtn.forEach((minus) => {
  minus.addEventListener("click", () => {
    const quantity = minus.parentElement.querySelector(".qty");
    if (parseInt(quantity.value) > 0) {
      quantity.value = parseInt(quantity.value) - 1;
    }
  });
});

//filter
const filterItems = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item"
);

const checkboxItems = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item-criteria li"
);

filterItems.forEach((filterItem) => {
  // Clear Filter
  if (filterItem.querySelector(".clear-button")) {
    filterItem.querySelector(".clear-button").addEventListener("click", () => {
      filterItem
        .querySelectorAll(".products-filter-item-criteria li .checkbox")
        .forEach((checkbox) => {
          checkbox.setAttribute("data-status", "uncheck");
        });
    });
  }
});

checkboxItems.forEach((checkboxItem) => {
  // Select box
  checkboxItem.addEventListener("click", () => {
    if (
      checkboxItem.querySelector(".checkbox").getAttribute("data-status") == "uncheck"
    ) {
      checkboxItem
        .querySelector(".checkbox")
        .setAttribute("data-status", "check");
    } else {
      checkboxItem
        .querySelector(".checkbox")
        .setAttribute("data-status", "uncheck");
    }
  });
});

const sections = document.querySelectorAll('.section');
function displaySectionsInViewport() {
  const sections = document.querySelectorAll('.section');
  let scrolledDown = false;
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }

  function checkScrollDirection() {
    sections.forEach((section, index) => {
      if (section && (isElementInViewport(section))) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
      } else {
        section.style.opacity = '0';
        section.style.transform = 'translateY(100px)'; // Adjust this value as needed
        section.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
      }
    });
  }
  checkScrollDirection();
}
displaySectionsInViewport();
window.addEventListener('scroll', () => {
  displaySectionsInViewport();
});


function handleScroll() {
  const headerContainer = document.getElementById("header-container");
  const headerToolbar = document.getElementById("header-toolbar");
  const headerLogo = document.getElementById("header-logo");
  const headerContent = document.getElementById("header-content");
  const headerContact = document.getElementById("header-contact");

  const scrollY = window.scrollY;

  // Kiểm tra xem tất cả các phần tử đã được tìm thấy
  if (headerContainer) {
    if (scrollY > 100) {
      if (!headerContainer.classList.contains("fixed-header")) {
        headerContainer.classList.add("fixed-header");
      }
      if (headerToolbar && headerContact && headerLogo && headerContent){
        headerToolbar.style.display = "none";
        headerContact.style.display = "none";
        headerLogo.style.transform = "scale(0.8)";
        headerContent.style.height = "auto";
      }
    } else {
      if (headerContainer.classList.contains("fixed-header")) {
        headerContainer.classList.remove("fixed-header");
      }
      if (headerToolbar && headerContact && headerLogo && headerContent){
        headerToolbar.style.display = "block";
        headerContact.style.display = "block";
        headerLogo.style.transform = "scale(1)";
        headerContent.style.height = "82px";
      }
    }
  }
}
window.addEventListener("scroll", handleScroll);

// JavaScript
function setupImagePopup() {
  const body = document.body;
  const imagePopup = document.getElementById("imagePopup");
  const popupImage = document.getElementById("popupImage");
  const closePopupButton = document.getElementById("closePopup");
  const prevImageButton = document.getElementById("prevImage");
  const nextImageButton = document.getElementById("nextImage");

  if (!body || !imagePopup || !popupImage || !closePopupButton || !prevImageButton || !nextImageButton) {
    console.log("null");
    return;
  }

  const popupTriggers = document.querySelectorAll(".popup-trigger");

  let currentIndex = 0;

  function showImage(index) {
    const imagePath = popupTriggers[index].getAttribute("src");
    popupImage.src = imagePath;
    currentIndex = index;
    imagePopup.style.display = "block";
    body.classList.add("popup-open");
  }

  function closeImagePopup() {
    imagePopup.style.display = "none";
    body.classList.remove("popup-open");
  }

  document.getElementById("showMoreImages").addEventListener("click", function () {
    const dataIndex = this.getAttribute("data-index");
    const index = parseInt(dataIndex);

    if (!isNaN(index) && index >= 0 && index < popupTriggers.length) {
      showImage(index);
    }
  });

  closePopupButton.addEventListener("click", closeImagePopup);

  imagePopup.addEventListener("click", function (event) {
    if (event.target === imagePopup) {
      closeImagePopup();
    }
  });

  popupTriggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () {
      showImage(index);
    });
  });

  prevImageButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      showImage(currentIndex - 1);
    }
  });

  nextImageButton.addEventListener("click", function () {
    if (currentIndex < popupTriggers.length - 1) {
      showImage(currentIndex + 1);
    }
  });
}
setupImagePopup();










