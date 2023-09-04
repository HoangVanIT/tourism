
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

document.addEventListener("DOMContentLoaded", function() {
  var guestAmount = document.getElementById('quantity-room');
  var cntUpButton = document.getElementById('cnt-up');
  var cntDownButton = document.getElementById('cnt-down');
  var buttons = document.querySelectorAll('.btn');
  var diamond = document.querySelector('.diamond');
  var form = document.querySelector('form');
  var linkbox = document.querySelector('.linkbox');

  cntUpButton.addEventListener('click', function() {
    var quantityRoom = parseInt(document.getElementById('quantity-room').value);
    guestAmount.value = Math.min(quantityRoom + 1, 1000);
  });

  cntDownButton.addEventListener('click', function() {
    var quantityRoom = parseInt(document.getElementById('quantity-room').value);
    guestAmount.value = Math.max(quantityRoom - 1, 1);
  });

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      button.classList.toggle('booked');
      diamond.classList.toggle('windup');
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
      linkbox.style.display = linkbox.style.display === 'none' ? 'block' : 'none';

      if (button.textContent === "Search") {
        button.textContent = "Search again";
      } else {
        button.textContent = "Search";
      }
    });
  });
});
