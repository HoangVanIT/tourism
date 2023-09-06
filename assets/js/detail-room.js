function clickProduct(smallImg)
{
    var fullImg = document.getElementById("imageBoxProduct");
    fullImg.src = smallImg.src;
}
function clickHotel(smallImg)
{
    var fullImg = document.getElementById("imageBoxHotel1");
    fullImg.src = smallImg.src;
}
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".box.booking-room-ticket");
    let isFixed = false;
    const sidebarTop = sidebar.getBoundingClientRect().top;
    console.log(sidebarTop);

    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY;

        if (scrollY >= sidebarTop && !isFixed) {
            sidebar.classList.add("fixed");
            isFixed = true;
        } else if (scrollY < sidebarTop && isFixed) {
            sidebar.classList.remove("fixed");
            isFixed = false;
        }
    });
});