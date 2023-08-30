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


