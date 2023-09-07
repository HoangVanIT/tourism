$(document).ready(function() {
    var navLinks = $('.nav-detail li a');
    var nav = $('.navigation-wrapper .nav-detail');
    var navPenals = $('.navigation-wrapper .nav-penal');
    var navWrap = $('.nav-wrap');
    var container = $('.navigation-wrapper');
    var initialWidth = '100%';

    navLinks.on('click', function(e) {
        e.preventDefault();
        var scrollAnchor = $(this).parent('li').attr('aria-controls');
        var scrollPoint = $('div.nav-penal[id="' + scrollAnchor + '"]').offset().top - 180;

        $('html, body').animate({
            scrollTop: scrollPoint
        }, 1000, function() {
            // Trong hàm callback sau khi hoàn thành cuộn, đánh dấu tab là active
            navLinks.closest('li').removeClass('active');
            $(this).parent('li').addClass('active');
        });
    });

    $(window).on('scroll', function() {
        MenuNavigation();
    });

    $(window).on('resize', function() {
        MenuNavigation();
    });

    function MenuNavigation() {
        if ($(window).width() > 1024) {
            if (navWrap.length > 0) {
                var menuPosition = navWrap.offset().top;
                var windscroll = $(window).scrollTop();
                var containerWidth = container.outerWidth();

                if (windscroll >= menuPosition) {
                    nav.addClass('fixed-nav').css('width', containerWidth);
                    navPenals.each(function(i) {
                        if ($(this).offset().top <= windscroll + 185) {
                            navLinks.closest('li').removeClass('active');
                            navLinks.eq(i).closest('li').addClass('active');
                        }
                    });
                } else {
                    nav.removeClass('fixed-nav').css('width', initialWidth);
                    navLinks.closest('li').removeClass('active');
                    navLinks.first().closest('li').addClass('active');
                }
            }
        }
    }

    // Initial call to MenuNavigation to set up the menu on page load
    MenuNavigation();
});

document.addEventListener("DOMContentLoaded", function () {
    const scheduleContent = document.getElementById("schedule-content");
    const showMoreButton = document.getElementById("show-more-button");

    console.log("scrollHeight:", scheduleContent.scrollHeight);

    if (scheduleContent.scrollHeight > 1000) {
        showMoreButton.style.display = "block";
    }

    showMoreButton.addEventListener("click", function () {
        const isExpanded = showMoreButton.getAttribute("data-expanded") === "true";

        if (!isExpanded) {
            scheduleContent.style.maxHeight = scheduleContent.scrollHeight + "px";
            showMoreButton.setAttribute("data-expanded", "true");
            showMoreButton.innerHTML = "Rút gọn";
        } else {
            scheduleContent.style.maxHeight = "1000px";
            showMoreButton.setAttribute("data-expanded", "false");
            showMoreButton.innerHTML = "Xem thêm";
        }
    });
});

//rate
function setupRating() {
    const rateBoxes = document.querySelectorAll(".rate-box");
    const globalValue = document.querySelector(".global-value");
    const two = document.querySelector(".two");
    const totalReviews = document.querySelector(".total-reviews");
    const reviews = {
        5: 100,
        4: 60,
        3: 30,
        2: 20,
        1: 0,
    };

    function updateValues() {
        rateBoxes.forEach((box) => {
            const valueBox = box.querySelector(".value");
            const countBox = box.querySelector(".count");
            const progress = box.querySelector(".progress");

            const value = parseFloat(valueBox.textContent);
            const totalVotes = getTotal(reviews);

            if (totalVotes === 0) {
                countBox.textContent = "0%";
                progress.style.width = "0%";
            } else {
                const percentage = Math.round((reviews[value] / totalVotes) * 100);
                countBox.textContent = `${percentage}%`;
                progress.style.width = `${percentage}%`;
            }
        });

        totalReviews.textContent = `${getTotal(reviews)} Đánh giá`;

        finalRating();
    }

    function getTotal(reviews) {
        return Object.values(reviews).reduce((a, b) => a + b);
    }

    document.querySelectorAll(".value").forEach((element) => {
        element.addEventListener("click", () => {
            const target = element.textContent;
            reviews[target] += 1;
            updateValues();
        });
    });

    function finalRating() {
        const final = Object.entries(reviews)
            .map(([key, value]) => key * value)
            .reduce((a, b) => a + b);

        const ratingValue = nFormat((final / getTotal(reviews)).toFixed(1));
        globalValue.textContent = ratingValue;
        two.style.background = `linear-gradient(to right, #F96706 ${
            (ratingValue / 5) * 100
        }%, transparent 0%)`;
    }

    function nFormat(number) {
        if (number >= 1000 && number < 1000000) {
            return `${(number / 1000).toFixed(1)}k`;
        } else if (number >= 1000000 && number < 1000000000) {
            return `${(number / 1000000).toFixed(1)}m`;
        } else if (number >= 1000000000) {
            return `${(number / 1000000000).toFixed(1)}md`;
        } else if (isNaN(number)) {
            return `0.0`;
        } else {
            return number;
        }
    }

    updateValues();
}
setupRating();



// document.addEventListener("DOMContentLoaded", function() {
//     const sidebar = document.querySelector(".box.booking-ticket");
//     let isFixed = false;
//     const sidebarTop = sidebar.getBoundingClientRect().top;
//     console.log(sidebarTop);
//
//     window.addEventListener("scroll", function() {
//         const scrollY = window.scrollY;
//
//         if (scrollY >= sidebarTop && !isFixed) {
//             sidebar.classList.add("fixed");
//             isFixed = true;
//         } else if (scrollY < sidebarTop && isFixed) {
//             sidebar.classList.remove("fixed");
//             isFixed = false;
//         }
//     });
// });


