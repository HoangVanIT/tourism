// Range slider
const filterRangeSlider = document.querySelector(
  "#fhm-list-product-products .products-filter-item .products-filter-item-range-slider"
);

const filterRangeSliderInputMin = document.querySelector(
  "#fhm-list-product-products .products-filter-item .products-filter-item-range-slider-input .min"
);
const filterRangeSliderInputMax = document.querySelector(
  "#fhm-list-product-products .products-filter-item .products-filter-item-range-slider-input .max"
);

rangeSlider(filterRangeSlider, {
  // min value
  min: 0,
  // max value
  max: 100,
  // step size
  step: 1,
  // set input value
  value: [0, 100],
  onInput: function (valueSet) {
    filterRangeSliderInputMin.value = valueSet[0];
    filterRangeSliderInputMax.value = valueSet[1];
  },
});

// Change range slider input value
const changeValue = () => {
  rangeSlider(filterRangeSlider).value([
    filterRangeSliderInputMin.value,
    filterRangeSliderInputMax.value,
  ]);
};

// Set default value input
filterRangeSliderInputMin.value = 0;
filterRangeSliderInputMax.value = 100;

// Render color
const colorCheckboxs = document.querySelectorAll(
  "#fhm-list-product-products .products-filter-item .products-filter-item-criteria li .checkbox-color"
);

colorCheckboxs.forEach((colorCheckbox) => {
  colorCheckbox.style.backgroundColor = `#${colorCheckbox.getAttribute(
    "data-color"
  )}`;
});

// Toggle mobile filter
const openFilterButton = document.querySelector(
  "#fhm-list-product-products .products-filter-toggle-button"
);

const closeFilterButton = document.querySelector(
  "#fhm-list-product-products .products-filter-toggle-button-close"
);

const productFilterList = document.querySelector(
  "#fhm-list-product-products .products-filter-list"
);

openFilterButton.addEventListener("click", () => {
  productFilterList.classList.add("active");
});

closeFilterButton.addEventListener("click", () => {
  productFilterList.classList.remove("active");
});
